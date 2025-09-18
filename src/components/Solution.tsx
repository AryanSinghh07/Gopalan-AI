import { Button } from "@/components/ui/button";
import aiAnalysisImage from "@/assets/ai-analysis-icon.jpg";
import mobileAppImage from "@/assets/mobile-app-feature.jpg";

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

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
              AI-Powered Solution
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionary technology that transforms livestock evaluation through intelligent automation
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-slide-in-left">
              <h3 className="font-playfair text-3xl font-bold mb-6 text-primary">
                How Gopalan AI Works
              </h3>
              <div className="space-y-6 font-inter">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Image Capture</h4>
                    <p className="text-muted-foreground">Field personnel capture cattle images using mobile devices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">AI Analysis</h4>
                    <p className="text-muted-foreground">Advanced algorithms extract body parameters and measurements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Automated Scoring</h4>
                    <p className="text-muted-foreground">Generate objective classification scores based on standardized criteria</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data Integration</h4>
                    <p className="text-muted-foreground">Seamlessly integrate results with existing databases and apps</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant">
                <img 
                  src={aiAnalysisImage} 
                  alt="AI Analysis Visualization"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-card border hover:shadow-elegant transition-smooth">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-hero rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Livestock Evaluation?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join the revolution in agricultural technology and make your breeding programs more accurate and efficient.
            </p>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;