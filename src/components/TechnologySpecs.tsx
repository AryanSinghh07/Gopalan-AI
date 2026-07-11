import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

/**
 * Renders a spec value, animating the leading number when one exists
 * (e.g. "99.2% Accuracy", "< 3 seconds", "4K+ Support").
 */
const SpecValue = ({ value }: { value: string }) => {
  const match = value.match(/^([<>~±]?\s*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return <>{value}</>;
  const [, prefix, num, rest] = match;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return (
    <>
      <AnimatedCounter end={parseFloat(num)} prefix={prefix} decimals={decimals} />
      {rest}
    </>
  );
};

const TechnologySpecs = () => {
  const specifications = [
    {
      category: "AI Capabilities",
      icon: "🧠",
      items: [
        { label: "Body Length Analysis", value: "99.2% Accuracy" },
        { label: "Height at Withers", value: "98.8% Accuracy" },
        { label: "Chest Width Measurement", value: "97.5% Accuracy" },
        { label: "Rump Angle Assessment", value: "96.3% Accuracy" },
      ]
    },
    {
      category: "Performance Metrics",
      icon: "⚡",
      items: [
        { label: "Processing Speed", value: "< 3 seconds" },
        { label: "Image Resolution", value: "4K+ Support" },
        { label: "Classification Accuracy", value: "95%+ Average" },
        { label: "Data Reliability", value: "99.9% Uptime" },
      ]
    },
    {
      category: "Integration Features",
      icon: "🔗",
      items: [
        { label: "BPA Compatibility", value: "Native API" },
        { label: "Mobile Support", value: "iOS & Android" },
        { label: "Offline Mode", value: "Full Capability" },
        { label: "Data Sync", value: "Real-time" },
      ]
    }
  ];

  const keyBenefits = [
    { heading: "Standardization", text: "Eliminates observer bias and human error" },
    { heading: "Efficiency", text: "10x faster than manual classification" },
    { heading: "Scalability", text: "Process thousands of animals per day" },
    { heading: "Accuracy", text: "Consistent 95%+ classification accuracy" }
  ];

  const missionPoints = [
    { heading: "Enhanced Breeding Programs", text: "Accurate identification of elite breeding stock" },
    { heading: "Scientific Validation", text: "Reliable data for genetic improvement initiatives" },
    { heading: "National Impact", text: "Scalable solution for nationwide implementation" }
  ];

  return (
    <section className="section-padding bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-badge mb-6">⚙️ Under the Hood</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-6 mb-6 text-foreground">
                Technical <span className="gradient-text">Specifications</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Precise, reliable, and easy to use — built for real field conditions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {specifications.map((spec, index) => (
              <ScrollReveal key={index} variant="fade-up" delay={index * 100}>
                <div className="rounded-2xl border border-border bg-card shadow-card card-lift p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="rounded-xl bg-primary/10 text-primary p-3 text-xl leading-none">{spec.icon}</div>
                    <h3 className="text-2xl font-bold text-primary">{spec.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {spec.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-center gap-3 py-3 border-b border-border/50 last:border-0"
                      >
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-semibold text-foreground text-right whitespace-nowrap">
                          <SpecValue value={item.value} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <ScrollReveal variant="slide-left">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 shadow-card card-lift p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-xl bg-primary/10 text-primary p-3 text-xl leading-none">✅</div>
                  <h3 className="font-display text-3xl font-bold text-primary">Key Benefits</h3>
                </div>
                <ul className="space-y-4">
                  {keyBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">{benefit.heading}:</strong> {benefit.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slide-right" delay={100}>
              <div className="rounded-2xl border border-border bg-card shadow-card card-lift p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-xl bg-accent/10 text-accent p-3 text-xl leading-none">🇮🇳</div>
                  <h3 className="font-display text-3xl font-bold gradient-text-warm">Mission Alignment</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Gopalan AI directly supports the Rashtriya Gokul Mission objectives by providing:
                </p>
                <div className="space-y-3">
                  {missionPoints.map((point, index) => (
                    <div
                      key={index}
                      className="bg-muted/50 border border-border rounded-xl p-4 hover:bg-muted transition-colors duration-300"
                    >
                      <strong className="text-foreground">{point.heading}:</strong>
                      <span className="text-muted-foreground ml-2">{point.text}</span>
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

export default TechnologySpecs;
