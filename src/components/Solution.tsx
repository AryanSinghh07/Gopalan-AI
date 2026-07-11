import { Button } from "@/components/ui/button";
import aiAnalysisImage from "@/assets/ai-analysis-icon.jpg";
import mobileAppImage from "@/assets/mobile-app-feature.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const Solution = () => {
  const features = [
    {
      title: "Computer Vision Analysis",
      description: "Advanced AI algorithms analyze cattle images to extract precise body structure parameters",
      icon: "📷"
    },
    {
      title: "Standardized Scoring",
      description: "Objective classification scores eliminate human bias and ensure consistency",
      icon: "📊"
    },
    {
      title: "Real-time Processing",
      description: "Instant analysis and scoring for efficient field operations",
      icon: "⚡"
    },
    {
      title: "BPA Integration",
      description: "Seamless integration with Bharat Pashudhan App for automated record keeping",
      icon: "📱"
    }
  ];

  const howItWorks = [
    {
      title: "Image Capture",
      description: "Field personnel capture cattle images using mobile devices"
    },
    {
      title: "AI Analysis",
      description: "Advanced algorithms extract body parameters and measurements"
    },
    {
      title: "Automated Scoring",
      description: "Generate objective classification scores based on standardized criteria"
    },
    {
      title: "Data Integration",
      description: "Seamlessly integrate results with existing databases and apps"
    }
  ];

  return (
    <section id="features" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-badge mb-6">🌱 Our Solution</span>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-6 mb-6 text-foreground">
                AI-Powered <span className="gradient-text">Solution</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Smart technology that makes livestock evaluation simple, fast, and fair
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div>
              <ScrollReveal variant="slide-left">
                <h3 className="font-playfair text-3xl font-bold mb-8 text-primary">
                  How Gopalan AI Works
                </h3>
              </ScrollReveal>
              <div className="space-y-6">
                {howItWorks.map((step, index) => (
                  <ScrollReveal key={index} variant="slide-left" delay={index * 100}>
                    <div className="flex items-start space-x-4 group">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0 shadow-glow group-hover:scale-110 transition-transform duration-300 ease-spring">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">{step.title}</h4>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal variant="slide-right" delay={150}>
              <div className="relative">
                <div className="rounded-2xl border border-border bg-card shadow-elegant card-lift p-6 md:p-8">
                  <img
                    src={aiAnalysisImage}
                    alt="AI Analysis Visualization"
                    loading="lazy"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <div className="hidden md:block absolute -bottom-6 -right-6 rounded-2xl border border-border bg-card shadow-elegant p-3 animate-float">
                  <img
                    src={mobileAppImage}
                    alt="Gopalan AI mobile app"
                    loading="lazy"
                    className="w-28 h-28 object-cover rounded-xl"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {features.map((feature, index) => (
              <ScrollReveal key={index} variant="fade-up" delay={index * 100}>
                <div className="rounded-2xl border border-border bg-card shadow-card card-lift p-6 h-full">
                  <div className="rounded-xl bg-primary/10 text-primary p-3 w-fit text-3xl mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="zoom">
            <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-center text-white shadow-elegant relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Livestock Evaluation?
                </h3>
                <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Join the revolution in agricultural technology and make your breeding programs more accurate and efficient.
                </p>
                <Button
                  variant="outline-hero"
                  size="lg"
                  className="text-lg px-8 py-4 min-h-12 rounded-xl hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Solution;
