import { useTranslation } from "react-i18next";

const ProblemStatement = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('problem.title')}
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('problem.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-destructive">{t('problem.currentIssues')}</h3>
                <ul className="space-y-4 font-inter text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>{t('problem.issues.humanError')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>{t('problem.issues.inconsistentQuality')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>{t('problem.issues.observerBias')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>{t('problem.issues.fatigue')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-card rounded-2xl p-8 shadow-card border hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-primary">{t('problem.missionImpact')}</h3>
                <p className="font-inter text-muted-foreground">
                  {t('problem.missionImpactDesc')}
                </p>
              </div>
            </div>
            
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 animate-slide-in-right hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-playfair text-3xl font-bold mb-6 text-primary">{t('problem.byTheNumbers')}</h3>
              <div className="space-y-6 font-inter">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t('problem.metrics.manualAccuracy')}</span>
                  <span className="text-2xl font-bold text-destructive">~75%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t('problem.metrics.biasImpact')}</span>
                  <span className="text-2xl font-bold text-destructive">±15%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t('problem.metrics.targetAccuracy')}</span>
                  <span className="text-2xl font-bold text-primary">95%+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t('problem.metrics.standardization')}</span>
                  <span className="text-2xl font-bold text-primary">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;