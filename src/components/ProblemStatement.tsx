import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const ProblemStatement = () => {
  const currentIssues = [
    "Human error and subjectivity in manual scoring",
    "Inconsistent data quality despite trained personnel",
    "Observer bias affecting scientific analysis",
    "Fatigue-related measurement inaccuracies"
  ];

  const numbers = [
    { label: "Manual Classification Accuracy", prefix: "~", end: 75, suffix: "%", tone: "text-destructive" },
    { label: "Observer Bias Impact", prefix: "±", end: 15, suffix: "%", tone: "text-destructive" },
    { label: "Target AI Accuracy", prefix: "", end: 95, suffix: "%+", tone: "text-primary" },
    { label: "Standardization", prefix: "", end: 100, suffix: "%", tone: "text-primary" }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-badge mb-6">⚠️ The Problem</span>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-6 mb-6 text-foreground">
                The Challenge <span className="gradient-text">We're Solving</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Manual animal scoring is slow and often wrong. Results change from person to person.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-8">
              <ScrollReveal variant="slide-left">
                <div className="rounded-2xl border border-border bg-card shadow-card card-lift p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-xl bg-destructive/10 text-destructive p-3 text-xl leading-none">⚠️</div>
                    <h3 className="font-playfair text-2xl font-bold text-destructive">Current Issues</h3>
                  </div>
                  <ul className="space-y-4 text-muted-foreground">
                    {currentIssues.map((issue, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slide-left" delay={150}>
                <div className="rounded-2xl border border-border bg-card shadow-card card-lift p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-xl bg-primary/10 text-primary p-3 text-xl leading-none">🇮🇳</div>
                    <h3 className="font-playfair text-2xl font-bold text-primary">Mission Impact</h3>
                  </div>
                  <p className="text-muted-foreground">
                    The Rashtriya Gokul Mission's success in conserving indigenous bovine breeds and enhancing milk
                    productivity depends on accurate Animal Type Classification for identifying elite breeding stock.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal variant="slide-right" delay={100}>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 shadow-card card-lift p-8">
                <h3 className="font-playfair text-3xl font-bold mb-8 text-primary">By the Numbers</h3>
                <div className="space-y-6">
                  {numbers.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-4 pb-4 border-b border-border/50 last:border-0 last:pb-0"
                    >
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className={`text-2xl md:text-3xl font-bold whitespace-nowrap ${item.tone}`}>
                        <AnimatedCounter end={item.end} prefix={item.prefix} suffix={item.suffix} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
