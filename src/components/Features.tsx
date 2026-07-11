import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Eye,
  Ruler,
  Zap,
  Smartphone,
  WifiOff,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Computer Vision",
    description: "AI detects your animal and reads its body structure from a single photo.",
  },
  {
    icon: Ruler,
    title: "Accurate Measurement",
    description: "ArUco markers turn a photo into real-world height, length, and girth.",
  },
  {
    icon: Zap,
    title: "Instant Scoring",
    description: "Objective body condition scores in seconds — no waiting, no guesswork.",
  },
  {
    icon: Smartphone,
    title: "Works on Any Phone",
    description: "A simple, mobile-first design that works for every farmer.",
  },
  {
    icon: WifiOff,
    title: "Built for the Field",
    description: "Designed for real farm conditions and low-connectivity areas.",
  },
  {
    icon: ShieldCheck,
    title: "Fair & Consistent",
    description: "Removes human bias so every animal is scored the same way.",
  },
];

const benefits = [
  { heading: "Standardized", text: "Removes observer bias and human error" },
  { heading: "Fast", text: "Much quicker than manual classification" },
  { heading: "Scalable", text: "Score many animals, day after day" },
  { heading: "Reliable", text: "Consistent results you can trust" },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-badge mb-6">🌱 Why Gopalan AI</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-6 mb-6 text-foreground">
                Smart Technology, <span className="gradient-text">Made Simple</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to measure, score, and care for your livestock — in one place.
              </p>
            </div>
          </ScrollReveal>

          {/* Feature grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={feature.title} delay={(index % 3) * 100}>
                  <div className="group bg-card rounded-2xl border border-border shadow-card p-7 card-lift h-full">
                    <div className="rounded-xl bg-primary/10 text-primary p-3 inline-flex mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Benefits + Mission */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <ScrollReveal variant="slide-left">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 shadow-card p-8 h-full">
                <h3 className="font-display text-2xl font-bold text-primary mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit.heading} className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">{benefit.heading}:</strong> {benefit.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slide-right" delay={100}>
              <div className="rounded-2xl border border-border bg-card shadow-card p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="rounded-xl bg-accent/15 text-primary p-3 text-xl leading-none">🇮🇳</span>
                  <h3 className="font-display text-2xl font-bold text-foreground">Supporting the Gokul Mission</h3>
                </div>
                <p className="text-muted-foreground mb-5">
                  Gopalan AI supports the Rashtriya Gokul Mission's goals of conserving indigenous
                  breeds and improving milk productivity through:
                </p>
                <div className="space-y-3">
                  {[
                    { h: "Better Breeding", t: "Helping identify strong breeding animals" },
                    { h: "Reliable Data", t: "Consistent scores for genetic improvement" },
                    { h: "Nationwide Reach", t: "A simple tool that scales across India" },
                  ].map((p) => (
                    <div key={p.h} className="bg-muted/50 border border-border rounded-xl p-4">
                      <strong className="text-foreground">{p.h}:</strong>
                      <span className="text-muted-foreground ml-2">{p.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Final CTA */}
          <ScrollReveal variant="zoom">
            <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-center text-white shadow-elegant relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Ready to score your first animal?
                </h3>
                <p className="text-lg md:text-xl mb-8 text-white/85 max-w-2xl mx-auto">
                  It's free, it's fast, and it works right from your phone.
                </p>
                <Button asChild size="lg" className="btn-lime min-h-14 rounded-xl px-8 text-lg hover:scale-105">
                  <Link to="/analyze">
                    Get Started
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Features;
