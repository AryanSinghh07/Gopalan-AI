import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HeroDecor from "@/components/HeroDecor";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Camera,
  ScanLine,
  ShieldCheck,
  IndianRupee,
  HelpCircle,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const faqs = [
  {
    icon: Camera,
    q: "How do I take a good photo of my animal?",
    a: "Stand to the side of your animal so its whole body is visible. Use daylight or bright light, keep the background simple, and make sure the animal is standing straight. Avoid blurry or dark photos.",
  },
  {
    icon: ScanLine,
    q: "What is an ArUco marker and why do I need it?",
    a: "An ArUco marker is a small printed black-and-white square. When you place it next to your animal in the photo, the AI uses it as a size reference to measure the animal accurately in the real world.",
  },
  {
    icon: HelpCircle,
    q: "Where do I get the ArUco marker?",
    a: "You can print it on plain white paper from the Photo Guide page. Keep it flat, uncreased, and fully visible in your photo for the best measurement accuracy.",
  },
  {
    icon: ShieldCheck,
    q: "Is my data safe?",
    a: "Your photos are used only to analyze your animal and generate its score. We do not sell your data. Full account features and secure storage are being added as the platform grows.",
  },
  {
    icon: IndianRupee,
    q: "Is Gopalan AI free to use?",
    a: "Yes — analyzing your animal and reading the breed and health guides is free. Gopalan AI is built to support farmers and the Rashtriya Gokul Mission.",
  },
  {
    icon: HelpCircle,
    q: "How accurate is the body condition score?",
    a: "Accuracy depends on photo quality and correct ArUco marker placement. A clear, well-lit side photo with a flat marker gives the most reliable score. Always combine the result with your own observation and, when in doubt, consult a veterinarian.",
  },
  {
    icon: Camera,
    q: "Which animals can I analyze?",
    a: "Gopalan AI is built for cattle (cows) and buffalo. It identifies the animal type and its likely breed, then scores its body condition.",
  },
  {
    icon: ShieldCheck,
    q: "The score looks wrong. What should I do?",
    a: "Retake the photo with better light, a full side view, and a flat, clearly visible ArUco marker. Small changes in angle and marker placement can change the result. If problems continue, use the contact form on the About page.",
  },
];

const Help = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-hero text-white overflow-hidden">
        <HeroDecor />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="glass inline-flex items-center gap-2 px-5 py-2 rounded-full text-white/90 text-sm font-medium mb-6">
            <HelpCircle className="h-4 w-4 text-accent" />
            Help Center
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to know about scoring your animals with Gopalan AI.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = open === index;
              return (
                <ScrollReveal key={faq.q} delay={(index % 4) * 80}>
                  <div
                    className={`bg-card rounded-2xl border transition-all duration-300 ${
                      isOpen ? "border-primary/40 shadow-card" : "border-border"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center gap-4 text-left p-5 md:p-6"
                    >
                      <span className="rounded-xl bg-primary/10 text-primary p-2.5 shrink-0">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex-1 font-semibold text-foreground text-base md:text-lg">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-smooth ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 md:px-6 pb-6 pl-16 text-muted-foreground leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Still need help */}
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mt-14 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-border p-8 md:p-10 text-center">
              <div className="rounded-2xl bg-accent/15 text-primary p-4 inline-flex mb-5">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                Still need help?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Can't find your answer here? Try analyzing an animal, read the photo guide, or send us
                a message and we'll get back to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild className="btn-lime min-h-12 rounded-xl px-6">
                  <Link to="/analyze">
                    <Camera className="h-5 w-5 mr-2" />
                    Analyze an Animal
                  </Link>
                </Button>
                <Button asChild variant="outline" className="min-h-12 rounded-xl px-6">
                  <Link to="/about">
                    Contact Us
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Help;
