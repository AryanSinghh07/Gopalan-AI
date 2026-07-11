# Building the Gopalan AI Backend — Python + ArUco Guide

This is a practical, step-by-step guide for building your **own** Python backend for
Gopalan AI: image-based cattle/buffalo **body measurement**, **body condition scoring (BCS)**,
**breed classification**, and **disease prediction** — using an **ArUco marker** for real-world
scale.

> This document is guidance only. It explains the architecture, the ArUco math, the models,
> the datasets to use, and how to deploy and connect it to this website. You do not need to
> change the frontend to follow it — the site already embeds a hosted model on `/analyze`, and
> you can swap in your own API later.

---

## 1. How the whole system fits together

```
 Farmer's phone                 Your Python backend                 Models
┌───────────────┐   image      ┌────────────────────────┐        ┌──────────────────┐
│ Web app       │ ───────────► │ FastAPI / Gradio        │ ─────► │ 1. Detector (YOLO)│
│ (/analyze)    │              │  1. ArUco → scale       │        │ 2. Breed CNN      │
│ upload photo  │ ◄─────────── │  2. Measure body        │ ◄───── │ 3. BCS regressor  │
└───────────────┘   JSON       │  3. Score + classify    │        │ 4. Disease model  │
                    result     └────────────────────────┘        └──────────────────┘
```

**Request flow**

1. The user uploads a photo (animal + a printed ArUco marker in frame).
2. Backend detects the ArUco marker → computes a **pixels-per-centimetre** scale.
3. Backend detects the animal and key body points → converts pixel distances to **cm**.
4. Models produce: **breed**, **body measurements**, a **body condition score**, and optional
   **disease flags**.
5. Backend returns a JSON result that the frontend renders.

---

## 2. Recommended tech stack

| Layer | Recommendation | Why |
|---|---|---|
| API framework | **FastAPI** (or **Gradio** for a quick UI) | Fast, typed, easy to deploy |
| Computer vision | **OpenCV** (`opencv-contrib-python`) | ArUco lives in `cv2.aruco` |
| Detection | **Ultralytics YOLOv8/YOLO11** | Best accuracy/effort ratio |
| Classification / scoring | **PyTorch** + `torchvision` (ResNet/EfficientNet) | Standard, lots of pretrained weights |
| Serving models | ONNX Runtime (optional) | Faster CPU inference |
| Hosting | **Hugging Face Spaces**, Render, or Railway | Free/cheap, GPU options |

Install:

```bash
pip install fastapi uvicorn[standard] opencv-contrib-python numpy pillow \
            ultralytics torch torchvision python-multipart
```

> Use `opencv-contrib-python`, **not** plain `opencv-python` — the ArUco module ships only
> in the contrib build.

---

## 3. The ArUco pipeline (this is the core of accurate measurement)

An ArUco marker is a printed black-and-white square of a **known physical size**. Because you
know its real width (say **10 cm**), you can convert pixels to centimetres anywhere the marker
appears in the photo.

### 3.1 Generate a marker to print

```python
import cv2
import numpy as np

aruco = cv2.aruco
aruco_dict = aruco.getPredefinedDictionary(aruco.DICT_5X5_50)

marker_id = 0
marker_px = 700  # output image size in pixels
img = aruco.generateImageMarker(aruco_dict, marker_id, marker_px)
cv2.imwrite("aruco_marker_10cm.png", img)
# Print this so the black square measures EXACTLY 10 cm on paper.
```

Tell farmers: **print it, keep it flat, and place it beside the animal** (roughly on the same
plane as the body).

### 3.2 Detect the marker and compute scale

```python
def detect_scale(image_bgr, marker_real_cm=10.0):
    """Return pixels-per-cm using a detected ArUco marker, or None."""
    aruco = cv2.aruco
    aruco_dict = aruco.getPredefinedDictionary(aruco.DICT_5X5_50)

    # OpenCV >= 4.7 API:
    detector = aruco.ArucoDetector(aruco_dict, aruco.DetectorParameters())
    corners, ids, _ = detector.detectMarkers(image_bgr)
    # OpenCV <= 4.6 used: corners, ids, _ = aruco.detectMarkers(image_bgr, aruco_dict)

    if ids is None or len(corners) == 0:
        return None

    # corners[0] shape: (1, 4, 2) — the 4 marker corners in pixels
    c = corners[0].reshape(4, 2)
    side_px = (
        np.linalg.norm(c[0] - c[1]) +
        np.linalg.norm(c[1] - c[2]) +
        np.linalg.norm(c[2] - c[3]) +
        np.linalg.norm(c[3] - c[0])
    ) / 4.0
    return side_px / marker_real_cm   # pixels per cm
```

### 3.3 Convert a body measurement to centimetres

```python
def px_to_cm(pixel_distance, pixels_per_cm):
    return pixel_distance / pixels_per_cm
```

**Accuracy tips (say these to your users too):**

- The marker must be on (or very near) the **same plane** as the body part being measured —
  perspective/depth is the biggest source of error.
- Shoot **square-on** (camera perpendicular to the animal's side), full body in frame.
- A bigger marker (A4-sized) measured from a distance is more robust than a tiny one.
- For serious accuracy, correct lens distortion first with a one-time **camera calibration**
  (`cv2.calibrateCamera` using a printed chessboard) and undistort images before measuring.

---

## 4. Measuring the animal

You need body **keypoints** (withers, rump, chest, hooves) to measure:

- **Body length** — shoulder point → pin bone
- **Height at withers** — withers → ground
- **Heart girth** — chest circumference (estimate from width; girth is hard from a single 2D photo)

Two ways to get keypoints:

1. **Keypoint detection model** — train YOLOv8-pose or a keypoint R-CNN on ~500–2000 images you
   annotate with body landmarks. Most accurate, most work.
2. **Segmentation + geometry** — segment the animal (YOLOv8-seg or Segment Anything), then derive
   length/height from the mask's bounding geometry. Faster to start, less precise.

Once you have keypoints in pixels, multiply by `pixels_per_cm` from §3.

> **Weight estimate:** a common field formula is
> `weight_kg ≈ (heart_girth_cm² × body_length_cm) / 10840` (Schaeffer's formula).
> Treat it as an estimate, not a scale reading.

---

## 5. The models

### 5.1 Animal detection (cow vs buffalo, and where it is)
- Start from a **pretrained YOLOv8** — COCO already has a `cow` class, so you get detection for
  free, then fine-tune to add `buffalo`.
- Output: bounding box(es) so you can crop the animal for the next models.

### 5.2 Breed classification
- A CNN (**EfficientNet-B0** or **ResNet-50**) fine-tuned on Indian breed images.
- Input: the cropped animal. Output: breed + confidence.
- You already have reference photos for 16 breeds in `src/assets/animals/` — a good starting
  point for a small demo; you'll need far more images per breed for production accuracy.

### 5.3 Body Condition Score (BCS)
- BCS is a number on a fixed scale (India commonly uses **1–5**, some use 1–9) describing fat
  cover over the ribs, spine, and tail-head.
- Two viable approaches:
  - **Regression CNN**: image → continuous BCS value (MAE loss). Simple and effective.
  - **Measurement-based**: combine the §4 measurements + visual features into a small model.
- **Labels are the hard part** — you need a qualified vet/technician to score training images.

### 5.4 Disease prediction (optional, add later)
- **Image-based** for visible conditions (e.g. Lumpy Skin Disease): a CNN classifier on
  skin-lesion images.
- **Symptom-based** for the rest: a tabular model (Random Forest / gradient boosting) that takes
  farmer-entered symptoms and returns likely conditions — pairs naturally with the site's
  existing Medical Support content.
- ⚠️ Always show a disclaimer: this **assists** diagnosis, it does not replace a veterinarian.

---

## 6. Datasets

> Verify the licence and terms of every dataset before use, and prefer datasets you can legally
> redistribute or that allow model training. Names/links change — search the platform if a link
> moves.

### Detection (animal in frame)
- **COCO** — has a `cow` category; enough to bootstrap detection.
- **Roboflow Universe** — search "cattle", "cow detection", "buffalo"; many community datasets
  with ready YOLO annotations and augmentation.

### Breed classification (Indian breeds)
- **Kaggle** — search "Indian bovine breeds", "cattle breed", "cow breed classification".
  Several community datasets cover Gir, Sahiwal, Murrah, etc.
- **Roboflow Universe** — "indian cattle breeds" classification projects.
- **Build your own** — scrape/collect labelled photos per breed (aim for 300–1000+ images/breed),
  which usually beats small public sets for local accuracy.

### Body Condition Score
- Public **labelled BCS image** datasets are scarce. Realistic plan:
  - Collect side-view photos in the field and have a **vet annotate BCS** (1–5).
  - Look for **academic/research** BCS datasets (search Google Scholar / Papers with Code for
    "cattle body condition score dataset"); some papers release data on request.
  - Start with a few hundred expert-labelled images and grow.

### Disease
- **Lumpy Skin Disease** image datasets exist on **Kaggle** and **Mendeley Data** (search
  "lumpy skin disease dataset"). Good for an image classifier.
- **Animal / cattle disease symptom** CSV datasets on **Kaggle** (search "animal disease
  prediction") for a symptom→disease tabular model.

### ArUco
- **No dataset needed** — markers are generated with `cv2.aruco` (§3.1). For measurement
  validation, photograph animals of **known** dimensions and check your error.

---

## 7. Serving it — FastAPI skeleton

```python
from fastapi import FastAPI, UploadFile, File
import numpy as np, cv2

app = FastAPI(title="Gopalan AI Backend")

@app.post("/analyze")
async def analyze(file: UploadFile = File(...)):
    data = await file.read()
    img = cv2.imdecode(np.frombuffer(data, np.uint8), cv2.IMREAD_COLOR)

    ppc = detect_scale(img, marker_real_cm=10.0)   # §3.2
    if ppc is None:
        return {"ok": False, "error": "ArUco marker not found. Retake the photo."}

    # box = detect_animal(img)          # §5.1
    # crop = crop(img, box)
    # breed = classify_breed(crop)      # §5.2
    # kpts  = keypoints(img, box)       # §4
    # length_cm = px_to_cm(dist(kpts["shoulder"], kpts["pin"]), ppc)
    # bcs = score_bcs(crop)             # §5.3

    return {
        "ok": True,
        "pixels_per_cm": round(ppc, 2),
        # "breed": breed,
        # "measurements_cm": {"body_length": length_cm, ...},
        # "bcs": bcs,
    }
```

Run locally:

```bash
uvicorn app:app --reload --port 7860
```

> Prefer **Gradio** for a zero-frontend demo (`import gradio as gr`) — that's what the current
> hosted model on `/analyze` uses, and it embeds straight into this site.

---

## 8. Deploying

- **Hugging Face Spaces** (recommended, like the current setup): push a repo with `app.py`
  (Gradio or FastAPI) + `requirements.txt`. Free CPU tier; paid GPU if needed. The site can embed
  it in an iframe (already wired) at `https://<owner>-<space>.hf.space`.
- **Render / Railway / Fly.io**: containerise the FastAPI app (`Dockerfile`) for a REST API.

---

## 9. Connecting your backend to this website

The frontend is React (Vite) and the `/analyze` page currently **embeds** the hosted Gradio Space
(`src/components/GradioEmbed.tsx`, `src/pages/Analyze.tsx`). Two ways to use your own backend:

**Option A — keep embedding (simplest).**
Change the URL in `src/pages/Analyze.tsx`:

```ts
const HF_SPACE_EMBED = "https://<your-owner>-<your-space>.hf.space";
```

**Option B — call your REST API and render results in our own UI.**
Add a fetch from a custom upload component:

```ts
const form = new FormData();
form.append("file", file);
const res = await fetch("https://your-api.example.com/analyze", { method: "POST", body: form });
const result = await res.json(); // { breed, measurements_cm, bcs, ... }
```

Enable **CORS** on the backend for your site's domain, then design result cards for the JSON.

---

## 10. Suggested build order

1. **ArUco scale** working on test photos (§3) — this alone is a demo.
2. **Animal detection** with pretrained YOLO (§5.1).
3. **Measurements** via segmentation or keypoints (§4).
4. **Breed classifier** on a small labelled set (§5.2).
5. **BCS regressor** once you have vet-labelled images (§5.3).
6. **Disease** models last (§5.4).
7. Wrap in **FastAPI/Gradio**, deploy, and point the site at it (§9).

---

## 11. Honesty & safety notes

- Report **real** accuracy from a held-out test set; avoid publishing invented percentages.
- A single 2D photo limits measurement precision — be transparent about error ranges, and
  encourage multiple photos / good marker placement.
- Health outputs must carry a clear **"consult a veterinarian"** disclaimer.
