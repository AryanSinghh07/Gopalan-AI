import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Camera,
  Upload,
  X,
  Sparkles,
  ScanLine,
  Ruler,
  HeartPulse,
  ExternalLink,
  CheckCircle2,
  Image as ImageIcon,
} from "lucide-react";
import arucoMarker from "@/assets/animals/aruco-marker.jpg";
import measurePoints from "@/assets/animals/measure-points.jpg";

const HF_SPACE = "https://huggingface.co/spaces/theharry1212/bcsscore";

const steps = [
  {
    icon: Camera,
    title: "Take the photo",
    desc: "Stand to the side of your animal and take a clear, full-body photo in good light.",
  },
  {
    icon: ScanLine,
    title: "Add the ArUco marker",
    desc: "Place the printed ArUco marker next to the animal so the AI can measure real size.",
  },
  {
    icon: Sparkles,
    title: "Upload & analyze",
    desc: "Upload the photo here. Our AI detects the animal and scores its body condition.",
  },
  {
    icon: HeartPulse,
    title: "Read your results",
    desc: "Get the breed, body measurements, and a body condition score you can act on.",
  },
];

const Analyze = () => {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const readFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) readFile(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) readFile(file);
  };

  const clearImage = () => {
    setImage(null);
    setFileName("");
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleAnalyze = () => {
    // Full in-site analysis is wired to the model in the next step.
    // For now we hand off to the hosted scoring tool.
    window.open(HF_SPACE, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-10 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-10 w-56 h-56 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="glass inline-flex items-center gap-2 px-5 py-2 rounded-full text-white/90 text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-accent" />
            AI Body Condition Scoring
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Analyze Your Animal
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in">
            Upload one clear photo with an ArUco marker. Our AI measures your cattle or buffalo
            and scores its body condition — in seconds.
          </p>
        </div>
      </section>

      {/* Uploader */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">
            {/* Upload card */}
            <ScrollReveal variant="slide-left" className="lg:col-span-3">
              <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8 h-full">
                <h2 className="font-display text-2xl font-bold text-foreground mb-1">Upload a photo</h2>
                <p className="text-muted-foreground mb-6">JPG, PNG or WebP — a clear side view works best.</p>

                {!image ? (
                  <label
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={onDrop}
                    className={`flex flex-col items-center justify-center text-center rounded-2xl border-2 border-dashed cursor-pointer transition-all duration-300 min-h-72 p-8 ${
                      isDragging
                        ? "border-primary bg-primary/5 scale-[1.01]"
                        : "border-border hover:border-primary/60 hover:bg-muted/40"
                    }`}
                  >
                    <div className="rounded-2xl bg-primary/10 text-primary p-4 mb-4 animate-float">
                      <Upload className="h-8 w-8" />
                    </div>
                    <p className="font-semibold text-foreground text-lg mb-1">
                      Tap to upload or drag a photo here
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">Maximum 10 MB</p>
                    <span className="btn-lime inline-flex items-center gap-2 min-h-12 px-6 rounded-xl">
                      <ImageIcon className="h-5 w-5" />
                      Choose Photo
                    </span>
                    <input
                      ref={inputRef}
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={onFileChange}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="animate-scale-in">
                    <div className="relative rounded-2xl overflow-hidden border border-border group">
                      <img src={image} alt="Your animal to analyze" className="w-full max-h-96 object-contain bg-muted" />
                      <button
                        onClick={clearImage}
                        aria-label="Remove photo"
                        className="absolute top-3 right-3 bg-foreground/70 text-white rounded-full p-2 hover:bg-destructive transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 truncate flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {fileName || "Photo ready"}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <Button
                        onClick={handleAnalyze}
                        className="btn-lime flex-1 min-h-14 rounded-xl text-lg"
                      >
                        <Sparkles className="h-5 w-5 mr-2" />
                        Analyze Now
                      </Button>
                      <Button
                        variant="outline"
                        onClick={clearImage}
                        className="min-h-14 rounded-xl"
                      >
                        Choose Another
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 text-center">
                      Analysis runs on our secure hosted AI model. Full in-app results are coming soon.
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* ArUco help */}
            <ScrollReveal variant="slide-right" className="lg:col-span-2">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-border shadow-card p-6 md:p-8 h-full">
                <div className="rounded-xl bg-accent/15 text-primary p-3 inline-flex mb-4">
                  <ScanLine className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  What is an ArUco marker?
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  It is a small printed black-and-white square. Placed beside your animal, it lets the
                  AI know the real-world size, so measurements are accurate.
                </p>
                <img
                  src={arucoMarker}
                  alt="Example of an ArUco marker"
                  loading="lazy"
                  className="w-full rounded-xl border border-border mb-4"
                />
                <ul className="space-y-2 text-sm text-foreground/80">
                  {[
                    "Print the marker on white paper",
                    "Keep it flat and fully visible",
                    "Place it near the animal's body",
                    "Avoid folds, shadows or glare",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-muted/40">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-badge mb-4">📋 Simple Steps</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-4">
                How <span className="gradient-text">Analysis</span> Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Four easy steps from photo to results
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.title} delay={index * 100}>
                  <div className="relative bg-card rounded-2xl border border-border shadow-card p-6 card-lift h-full">
                    <span className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-primary text-primary-foreground font-display font-bold flex items-center justify-center shadow-card">
                      {index + 1}
                    </span>
                    <div className="rounded-xl bg-primary/10 text-primary p-3 inline-flex mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="slide-left">
              <img
                src={measurePoints}
                alt="Body measurement points on cattle"
                loading="lazy"
                className="w-full rounded-2xl border border-border shadow-elegant"
              />
            </ScrollReveal>
            <ScrollReveal variant="slide-right">
              <div>
                <span className="section-badge mb-4">📊 Your Results</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                  What you get back
                </h2>
                <div className="space-y-5">
                  {[
                    { icon: HeartPulse, title: "Body Condition Score", desc: "A clear score showing whether your animal is underweight, healthy, or overweight." },
                    { icon: Ruler, title: "Body Measurements", desc: "Height, length, and girth estimated from the photo using the ArUco marker." },
                    { icon: ScanLine, title: "Breed Identification", desc: "The AI identifies whether your animal is a cow or buffalo, and its likely breed." },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="rounded-xl bg-accent/15 text-primary p-3 shrink-0">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Button
                  variant="outline"
                  onClick={handleAnalyze}
                  className="mt-8 min-h-12 rounded-xl"
                >
                  Open scoring tool
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Analyze;
