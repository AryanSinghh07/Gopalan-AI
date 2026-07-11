import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Camera, ScanLine, Sparkles, ClipboardCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Take a Photo",
    description: "Snap a clear side-view photo of your cow or buffalo in good light.",
  },
  {
    icon: ScanLine,
    title: "Add ArUco Marker",
    description: "Place the printed marker beside your animal so the AI can measure real size.",
  },
  {
    icon: Sparkles,
    title: "AI Analyzes",
    description: "Our computer-vision model detects the animal and measures its body.",
  },
  {
    icon: ClipboardCheck,
    title: "Get Your Score",
    description: "See the breed, measurements, and a clear body condition score instantly.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-badge mb-6">📋 How It Works</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-6 mb-6 text-foreground">
                Score Your Animal in <span className="gradient-text">4 Simple Steps</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                No special equipment. Just your phone, a printed marker, and a few seconds.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.title} delay={index * 100}>
                  <div className="relative bg-card rounded-2xl border border-border shadow-card p-6 card-lift h-full">
                    {/* connector arrow on desktop */}
                    {index < steps.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 h-6 w-6 text-primary/30 z-10" />
                    )}
                    <span className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-primary text-primary-foreground font-display font-bold flex items-center justify-center shadow-card">
                      {index + 1}
                    </span>
                    <div className="rounded-xl bg-primary/10 text-primary p-3 inline-flex mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal>
            <div className="text-center">
              <Button asChild size="lg" className="btn-lime min-h-14 rounded-xl px-8 text-lg hover:scale-105">
                <Link to="/analyze">
                  <Camera className="h-5 w-5 mr-2" />
                  Try It Now — It's Free
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
