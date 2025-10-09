import { Button } from "@/components/ui/button";
import aiAnalysisImage from "@/assets/ai-analysis-icon.jpg";
import mobileAppImage from "@/assets/mobile-app-feature.jpg";
import { useTranslation } from "react-i18next";

const Solution = () => {
  const { t } = useTranslation();
  const features = [
    {
      title: t('solution.features.cv.title'),
      description: t('solution.features.cv.desc'),
      icon: "📷"
    },
    {
      title: t('solution.features.scoring.title'),
      description: t('solution.features.scoring.desc'),
      icon: "📊"
    },
    {
      title: t('solution.features.realtime.title'),
      description: t('solution.features.realtime.desc'),
      icon: "⚡"
    },
    {
      title: t('solution.features.bpa.title'),
      description: t('solution.features.bpa.desc'),
      icon: "📱"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('solution.title')}
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('solution.subtitle')}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-slide-in-left">
              <h3 className="font-playfair text-3xl font-bold mb-6 text-primary">
                {t('solution.howItWorks')}
              </h3>
              <div className="space-y-6 font-inter">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t('solution.steps.capture.title')}</h4>
                    <p className="text-muted-foreground">{t('solution.steps.capture.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t('solution.steps.analysis.title')}</h4>
                    <p className="text-muted-foreground">{t('solution.steps.analysis.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t('solution.steps.scoring.title')}</h4>
                    <p className="text-muted-foreground">{t('solution.steps.scoring.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t('solution.steps.integration.title')}</h4>
                    <p className="text-muted-foreground">{t('solution.steps.integration.desc')}</p>
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
              {t('solution.cta.title')}
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t('solution.cta.desc')}
            </p>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4">
              {t('solution.cta.button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;