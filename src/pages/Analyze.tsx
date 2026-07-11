import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HeroDecor from "@/components/HeroDecor";
import GradioEmbed from "@/components/GradioEmbed";
import {
  Camera,
  Sparkles,
  ScanLine,
  Ruler,
  HeartPulse,
  CheckCircle2,
} from "lucide-react";
import arucoMarker from "@/assets/animals/aruco-marker.jpg";
import measurePoints from "@/assets/animals/measure-points.jpg";

// Hosted body-condition-scoring model (Hugging Face Space)
const HF_SPACE_EMBED = "https://theharry1212-bcsscore.hf.space";

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
    desc: "Upload the photo in the tool below. Our AI detects the animal and scores it.",
  },
  {
    icon: HeartPulse,
    title: "Read your results",
    desc: "Get the breed, body measurements, and a body condition score you can act on.",
  },
];

const Analyze = () => {
  const scrollToTool = () => {
    document.getElementById("analyzer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-hero text-white overflow-hidden">
        <HeroDecor />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="glass inline-flex items-center gap-2 px-5 py-2 rounded-full text-white/90 text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-accent" />
            AI Body Condition Scoring
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Analyze Your Animal
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in">
            Upload one clear photo with an ArUco marker. Our AI measures your cattle or buffalo
            and scores its body condition — right here on this page.
          </p>
          <button
            onClick={scrollToTool}
            className="btn-lime inline-flex items-center gap-2 min-h-14 px-8 rounded-xl text-lg animate-fade-in"
          >
            <Camera className="h-5 w-5" />
            Start Analyzing
          </button>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
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

      {/* Live analyzer */}
      <section id="analyzer" className="section-padding bg-muted/40 scroll-mt-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="section-badge mb-4">⚡ Live Tool</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-4">
                Analyze Your Animal Now
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Upload your photo in the tool below to get an instant body condition score.
              </p>
            </div>
          </ScrollReveal>

          {/* ArUco reminder */}
          <ScrollReveal>
            <div className="max-w-5xl mx-auto mb-8 flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-4 md:p-5">
              <div className="rounded-xl bg-accent text-accent-foreground p-2.5 shrink-0">
                <ScanLine className="h-5 w-5" />
              </div>
              <p className="text-sm md:text-base text-foreground/80">
                <span className="font-semibold text-foreground">Before you upload:</span> make sure a
                flat, clearly visible ArUco marker is next to your animal in the photo — it lets the
                AI measure real-world size accurately.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-5xl mx-auto">
              <GradioEmbed src={HF_SPACE_EMBED} title="Gopalan AI — Body Condition Scoring" height={760} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ArUco help + what you get */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="slide-left">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-border shadow-card p-6 md:p-8">
                <div className="rounded-xl bg-accent/15 text-primary p-3 inline-flex mb-4">
                  <ScanLine className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  What is an ArUco marker?
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  It is a small printed black-and-white square. Placed beside your animal, it lets the
                  AI know the real-world size, so measurements are accurate.
                </p>
                <img
                  src={arucoMarker}
                  alt="Example of an ArUco marker"
                  loading="lazy"
                  className="w-full rounded-xl border border-border mb-4"
                />
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-foreground/80">
                  {[
                    "Print on white paper",
                    "Keep it flat and fully visible",
                    "Place it near the animal",
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

            <ScrollReveal variant="slide-right">
              <div>
                <span className="section-badge mb-4">📊 Your Results</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                  What you get back
                </h2>
                <div className="space-y-5 mb-8">
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
                <img
                  src={measurePoints}
                  alt="Body measurement points on cattle"
                  loading="lazy"
                  className="w-full rounded-2xl border border-border shadow-card"
                />
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
