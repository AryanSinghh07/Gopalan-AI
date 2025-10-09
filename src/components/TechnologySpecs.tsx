import { useTranslation } from "react-i18next";

const TechnologySpecs = () => {
  const { t } = useTranslation();
  const specifications = [
    {
      category: t('techspecs.categories.ai'),
      items: [
        { label: t('techspecs.items.bodyLength'), value: t('techspecs.values.accuracy_992') },
        { label: t('techspecs.items.heightWithers'), value: t('techspecs.values.accuracy_988') },
        { label: t('techspecs.items.chestWidth'), value: t('techspecs.values.accuracy_975') },
        { label: t('techspecs.items.rumpAngle'), value: t('techspecs.values.accuracy_963') },
      ]
    },
    {
      category: t('techspecs.categories.performance'),
      items: [
        { label: t('techspecs.items.processingSpeed'), value: t('techspecs.values.lt3s') },
        { label: t('techspecs.items.imageResolution'), value: t('techspecs.values.4k') },
        { label: t('techspecs.items.classificationAccuracy'), value: t('techspecs.values.accuracy_95p') },
        { label: t('techspecs.items.dataReliability'), value: t('techspecs.values.uptime_999') },
      ]
    },
    {
      category: t('techspecs.categories.integration'),
      items: [
        { label: t('techspecs.items.bpaCompatibility'), value: t('techspecs.values.nativeApi') },
        { label: t('techspecs.items.mobileSupport'), value: t('techspecs.values.iosAndroid') },
        { label: t('techspecs.items.offlineMode'), value: t('techspecs.values.fullCapability') },
        { label: t('techspecs.items.dataSync'), value: t('techspecs.values.realtime') },
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('techspecs.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('techspecs.subtitle')}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-card border">
                <h3 className="text-2xl font-bold mb-6 text-primary">{spec.category}</h3>
                <div className="space-y-4">
                  {spec.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-semibold text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-3xl font-bold mb-6 text-primary">{t('techspecs.keyBenefits.title')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>{t('techspecs.keyBenefits.standardization.title')}</strong> {t('techspecs.keyBenefits.standardization.desc')}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>{t('techspecs.keyBenefits.efficiency.title')}</strong> {t('techspecs.keyBenefits.efficiency.desc')}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>{t('techspecs.keyBenefits.scalability.title')}</strong> {t('techspecs.keyBenefits.scalability.desc')}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>{t('techspecs.keyBenefits.accuracy.title')}</strong> {t('techspecs.keyBenefits.accuracy.desc')}
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card border">
              <h3 className="text-3xl font-bold mb-6 text-secondary">{t('techspecs.missionAlignment.title')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('techspecs.missionAlignment.desc')}
              </p>
              <div className="space-y-3">
                <div className="bg-background/50 rounded-lg p-4">
                  <strong className="text-foreground">{t('techspecs.missionAlignment.enhancedBreeding.title')}</strong>
                  <span className="text-muted-foreground ml-2">{t('techspecs.missionAlignment.enhancedBreeding.desc')}</span>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <strong className="text-foreground">{t('techspecs.missionAlignment.scientificValidation.title')}</strong>
                  <span className="text-muted-foreground ml-2">{t('techspecs.missionAlignment.scientificValidation.desc')}</span>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <strong className="text-foreground">{t('techspecs.missionAlignment.nationalImpact.title')}</strong>
                  <span className="text-muted-foreground ml-2">{t('techspecs.missionAlignment.nationalImpact.desc')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySpecs;