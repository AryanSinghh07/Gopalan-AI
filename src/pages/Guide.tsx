import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Camera, Target, BarChart3, Upload, ArrowRight, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import girImage from "@/assets/AnimalImg/Gir.jpg";
import angleImage from "@/assets/AnimalImg/anglephotos.jpg";
import uploadiImage from "@/assets/AnimalImg/uploadi.png";
import mesurepointImage from "@/assets/AnimalImg/mesurepoint.jpg";
import scoreImage from "@/assets/AnimalImg/score.png";
import React, { useState } from "react";
import arucoImage from "@/assets/AnimalImg/arucomarker.jpg";
import { useTranslation } from "react-i18next";

const Guide = () => {
  const { t } = useTranslation();
  const [showArucoPopup, setShowArucoPopup] = useState(false);

  const steps = [
    {
      id: 1,
      title: t('guide.steps.1.title'),
      description: t('guide.steps.1.description'),
      icon: Camera,
      image: girImage,
      details: [
        t('guide.steps.1.details.0'),
        t('guide.steps.1.details.1'),
        t('guide.steps.1.details.2'),
        t('guide.steps.1.details.3'),
        t('guide.steps.1.details.4')
      ],
      tips: (
        <>
          {t('guide.steps.1.tips.text')}<br />
          <Button
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => setShowArucoPopup(true)}
          >
            {t('guide.steps.1.tips.showMarker')}
          </Button>
          {showArucoPopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
                <img
                  src={arucoImage}
                  alt={t('guide.aruco.alt')}
                  className="w-full h-auto mb-4 rounded"
                />
                <p className="mb-4 text-sm text-gray-600">
                  {t('guide.aruco.caption')}
                </p>
                <div className="flex justify-between gap-2">
                  <a
                    href={arucoImage}
                    download="aruco-marker.jpg"
                    className="btn btn-primary px-4 py-2 rounded bg-primary text-white"
                  >
                    {t('guide.aruco.download')}
                  </a>
                  <Button
                    variant="outline"
                    onClick={() => setShowArucoPopup(false)}
                  >
                    {t('common.close')}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </>
      )
    },
    {
      id: 2,  
      title: t('guide.steps.2.title'),
      description: t('guide.steps.2.description'),
      icon: Target,
      image: angleImage,
      details: [
        t('guide.steps.2.details.0'),
        t('guide.steps.2.details.1'), 
        t('guide.steps.2.details.2'),
        t('guide.steps.2.details.3'),
        t('guide.steps.2.details.4')
      ],
      tips: t('guide.steps.2.tips')
    },
    {
      id: 3,
      title: t('guide.steps.3.title'),
      description: t('guide.steps.3.description'),
      icon: Upload,
      image: uploadiImage,
      details: [
        t('guide.steps.3.details.0'),
        t('guide.steps.3.details.1'),
        t('guide.steps.3.details.2'),
        t('guide.steps.3.details.3')
      ],
      tips: t('guide.steps.3.tips')
    },
    {
      id: 4,
      title: t('guide.steps.4.title'),
      description: t('guide.steps.4.description'),
      icon: Target,
      image: mesurepointImage,
      details: [
        t('guide.steps.4.details.0'),
        t('guide.steps.4.details.1'),
        t('guide.steps.4.details.2'),
        t('guide.steps.4.details.3')
      ],
      tips: t('guide.steps.4.tips')
    },
    {
      id: 5,
      title: t('guide.steps.5.title'),
      description: t('guide.steps.5.description'),
      icon: BarChart3,
      image: scoreImage,
      details: [
        t('guide.steps.5.details.0'),
        t('guide.steps.5.details.1'),
        t('guide.steps.5.details.2'),
        t('guide.steps.5.details.3')
      ],
      tips: t('guide.steps.5.tips')
    }
  ];

  const requirements = [
    t('guide.requirements.items.0'),
    t('guide.requirements.items.1'),
    t('guide.requirements.items.2'),
    t('guide.requirements.items.3')
  ];

  const tips = [
    t('guide.proTips.items.0'),
    t('guide.proTips.items.1'),
    t('guide.proTips.items.2'),
    t('guide.proTips.items.3')
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
<section className="pt-20 pb-20 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white relative overflow-hidden">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto text-center">
      <Badge variant="secondary" className="mb-4">
        {t('guide.hero.badge')}
      </Badge>
      <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-white">
        {t('guide.hero.title')}
      </h1>
      <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
        {t('guide.hero.subtitle')}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="shadow-elegant">
          <Camera className="w-5 h-5 mr-2" />
          {t('guide.hero.ctaStart')}
        </Button>
        <Button variant="outline" size="lg" className="text-black border-black hover:bg-black hover:text-white hover:border-white transition-colors duration-200">
          {t('guide.hero.ctaWatch')}
        </Button>
      </div>
    </div>
  </div>
</section>

      {/* Requirements Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    {t('guide.requirements.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                    {t('guide.proTips.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                {t('guide.process.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('guide.process.subtitle')}
              </p>
            </div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-32 bg-border/50 hidden lg:block"></div>
                  )}
                  
                  <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <step.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <Badge variant="outline" className="mb-2">
                              {t('guide.labels.step', { id: step.id })}
                            </Badge>
                            <h3 className="text-2xl font-playfair font-bold mb-2">
                              {step.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4 mb-6">
                          <h4 className="font-semibold">
                            {t('guide.labels.detailedInstructions')}
                          </h4>
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-3">
                                <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 bg-muted/50 rounded-lg">
                          <p className="text-sm font-medium text-primary mb-1">
                            💡 {t('guide.labels.proTip')}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {step.tips}
                          </p>
                        </div>
                      </div>

                      <div className="lg:p-8 p-6 bg-muted/20 flex items-center justify-center">
                        <div className="relative overflow-hidden rounded-lg shadow-card max-w-sm w-full">
                          <img 
                            src={step.image} 
                            alt={t('guide.alt.stepImage', { id: step.id })}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Guide;
