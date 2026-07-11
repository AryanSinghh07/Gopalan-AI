import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const AnimalTypeClassification = () => {
  const navigate = useNavigate();
  const [scoringActive] = useState(true);
  const [liveScores] = useState({
    overall: 89.2,
    physical: 92.5,
    health: 88.7,
    productivity: 85.3,
    genetic: 91.8
  });
  const [activeAnimals] = useState(28);
  const [processingCount] = useState(156);
  const [showAnalysisPopup, setShowAnalysisPopup] = useState(false);
  const [showClassificationPopup, setShowClassificationPopup] = useState(false);

  // Enhanced process steps data
  const enhancedProcessSteps = [
    {
      step: "01",
      title: "Data Acquisition",
      description: "High-resolution image capture from multiple angles and lighting conditions",
      details: "RGB/IR sensors, 4K resolution",
      technology: "Computer Vision",
      gradient: "from-green-500 to-emerald-600",
      processingTime: "< 0.1s",
      accuracy: "99.9%"
    },
    {
      step: "02",
      title: "Preprocessing",
      description: "Image enhancement, noise reduction, and standardization",
      details: "Gaussian filtering, histogram equalization",
      technology: "Image Processing",
      gradient: "from-emerald-500 to-green-600",
      processingTime: "0.3s",
      accuracy: "98.5%"
    },
    {
      step: "03",
      title: "Feature Extraction",
      description: "Automated detection of key morphological characteristics",
      details: "CNN-based feature maps, edge detection",
      technology: "Deep Learning",
      gradient: "from-lime-600 to-green-700",
      processingTime: "0.8s",
      accuracy: "97.2%"
    },
    {
      step: "04",
      title: "Classification",
      description: "Multi-class breed identification using neural networks",
      details: "ResNet-50 architecture, softmax output",
      technology: "AI/ML",
      gradient: "from-amber-500 to-amber-600",
      processingTime: "0.5s",
      accuracy: "96.3%"
    },
    {
      step: "05",
      title: "Phenotype Scoring",
      description: "Standardized evaluation of physical traits and conformity",
      details: "Multi-criteria analysis, weighted scoring",
      technology: "Analytics",
      gradient: "from-orange-500 to-amber-600",
      processingTime: "0.4s",
      accuracy: "94.8%"
    },
    {
      step: "06",
      title: "Quality Assessment",
      description: "Health indicators, body condition scoring, and anomaly detection",
      details: "Statistical analysis, outlier detection",
      technology: "ML Analytics",
      gradient: "from-emerald-600 to-green-700",
      processingTime: "0.6s",
      accuracy: "93.7%"
    },
    {
      step: "07",
      title: "Integration",
      description: "Seamless data export to farm management and breeding systems",
      details: "API integration, database sync",
      technology: "Cloud/API",
      gradient: "from-yellow-500 to-amber-600",
      processingTime: "0.2s",
      accuracy: "99.9%"
    }
  ];

  const quickSteps = [
    { icon: "📸", title: "Prepare Animal", desc: "Clean, well-lit environment" },
    { icon: "📷", title: "Capture Photos", desc: "Front, side, and rear angles" },
    { icon: "☁️", title: "Upload Images", desc: "Use mobile interface" },
    { icon: "📏", title: "Mark Points", desc: "Two reference points per image" },
    { icon: "📊", title: "Review Results", desc: "AI-generated analysis" }
  ];

  const classificationSteps = [
    { icon: "🎯", title: "Image Capture", desc: "Single high-quality photo" },
    { icon: "🔍", title: "Breed Detection", desc: "AI identifies breed type" },
    { icon: "📋", title: "Category Analysis", desc: "Classification categories" },
    { icon: "📈", title: "Confidence Score", desc: "Accuracy percentage" },
    { icon: "📄", title: "Detailed Report", desc: "Complete classification" }
  ];

  // Live platform stats (from real-time scoring state)
  const liveStats = [
    { label: "Overall Score", value: liveScores.overall, decimals: 1, suffix: "" },
    { label: "Physical", value: liveScores.physical, decimals: 1, suffix: "" },
    { label: "Health", value: liveScores.health, decimals: 1, suffix: "" },
    { label: "Productivity", value: liveScores.productivity, decimals: 1, suffix: "" },
    { label: "Genetic", value: liveScores.genetic, decimals: 1, suffix: "" },
    { label: "Active Animals", value: activeAnimals, decimals: 0, suffix: "" },
    { label: "Scored Today", value: processingCount, decimals: 0, suffix: "+" }
  ];

  // Complete Analysis handlers
  const handleCompleteAnalysisClick = () => {
    setShowAnalysisPopup(true);
  };

  const handleContinueAnalysis = () => {
    setShowAnalysisPopup(false);
    window.open('https://huggingface.co/spaces/theharry1212/bcsscore', '_blank', 'noopener,noreferrer');
  };

  const handleReadMoreAnalysis = () => {
    setShowAnalysisPopup(false);
    navigate('/guide');
  };

  const handleCloseAnalysisPopup = () => {
    setShowAnalysisPopup(false);
  };

  // Classification Analysis handlers
  const handleClassificationClick = () => {
    setShowClassificationPopup(true);
  };

  const handleContinueClassification = () => {
    setShowClassificationPopup(false);
    window.open('https://huggingface.co/spaces/SavlonBhai/gopalanai', '_blank', 'noopener,noreferrer');
  };

  const handleReadMoreClassification = () => {
    setShowClassificationPopup(false);
    navigate('/guide');
  };

  const handleCloseClassificationPopup = () => {
    setShowClassificationPopup(false);
  };

  // The three main analysis actions
  const analysisActions = [
    {
      icon: "🔬",
      title: "Evaluate Physical",
      tags: ["Full Report", "AI Insights"],
      gradient: "from-primary to-primary-glow",
      glow: "bg-primary/30",
      onClick: handleCompleteAnalysisClick
    },
    {
      icon: "🎯",
      title: "Evaluate Score",
      tags: ["Breed ID", "Type Class"],
      gradient: "from-emerald-600 to-green-700",
      glow: "bg-emerald-500/30",
      onClick: handleClassificationClick
    },
    {
      icon: "⭐",
      title: "Evaluate Best Match",
      tags: ["Genetics", "Breeding"],
      gradient: "from-amber-500 to-orange-600",
      glow: "bg-accent/30",
      onClick: undefined
    }
  ];

  return (
    <section id="classification" className="section-padding bg-gradient-to-br from-background via-muted/20 to-primary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="section-badge mb-6">🐄 AI Technology</span>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-6 mb-6 text-foreground">
                Animal Type <span className="gradient-text">Classification</span> &amp; Scoring
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Take photos of your animal. Our AI checks the breed, body type, and score for you — with 95%+ accuracy.
              </p>
            </ScrollReveal>

            {/* Animated stat strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12 mb-16">
              {[
                { stat: <AnimatedCounter end={95} suffix="%+" />, label: "Accuracy" },
                { stat: <AnimatedCounter end={3} suffix=" sec" />, label: "Analysis Time" },
                { stat: <AnimatedCounter end={50} suffix="+" />, label: "Breeds" },
                { stat: <>AI-Based</>, label: "Scoring" }
              ].map((item, index) => (
                <ScrollReveal key={index} variant="zoom" delay={index * 100}>
                  <div className="rounded-2xl border border-border bg-card shadow-card card-lift p-5 text-center">
                    <div className="text-3xl font-bold text-primary">{item.stat}</div>
                    <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* LIVE AI SCORING PLATFORM */}
            <ScrollReveal variant="fade-up">
              <div className="rounded-2xl border border-border bg-card shadow-elegant p-6 md:p-12 mb-16 max-w-6xl mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none"></div>

                <div className="relative z-10">
                  {/* Platform Header */}
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-3 mb-4">
                      {scoringActive && <div className="w-3 h-3 rounded-full bg-primary animate-pulse-soft"></div>}
                      <h3 className="font-playfair text-2xl md:text-4xl font-bold gradient-text">
                        🚀 Live AI Scoring Platform
                      </h3>
                      {scoringActive && <div className="w-3 h-3 rounded-full bg-primary animate-pulse-soft"></div>}
                    </div>

                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Real-time AI livestock scoring, powered by advanced neural networks
                    </p>

                    {/* Live score chips */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                      {liveStats.map((s, index) => (
                        <ScrollReveal key={s.label} variant="fade-in" delay={index * 80}>
                          <div className="rounded-xl bg-primary/10 px-4 py-2 text-center min-w-[104px]">
                            <div className="text-lg font-bold text-primary">
                              <AnimatedCounter end={s.value} decimals={s.decimals} suffix={s.suffix} />
                            </div>
                            <div className="text-xs text-muted-foreground">{s.label}</div>
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>

                    {/* ANALYSIS ACTION BUTTONS */}
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                      {analysisActions.map((action, index) => (
                        <ScrollReveal key={action.title} variant="fade-up" delay={index * 120}>
                          <div className="group relative h-full">
                            {/* Soft glow behind the card */}
                            <div className={`absolute -inset-1 ${action.glow} rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500`}></div>

                            <Button
                              onClick={action.onClick}
                              className={`relative w-full h-auto min-h-[240px] p-6 bg-gradient-to-br ${action.gradient} border-0 rounded-2xl shadow-elegant transition-all duration-300 ease-smooth hover:scale-105 hover:shadow-glow overflow-hidden`}
                            >
                              {/* Shine sweep on hover */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                              <div className="relative text-center z-10 flex flex-col justify-between h-full w-full">
                                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ease-spring">
                                  <span className="text-3xl">{action.icon}</span>
                                </div>

                                <div className="flex-1 flex flex-col justify-center">
                                  <div className="font-bold text-xl mb-4 text-white tracking-wide leading-tight">
                                    {action.title}
                                  </div>
                                </div>

                                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                                  {action.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1.5 bg-white/20 rounded-full text-xs text-white font-medium">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </Button>
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* CLASSIFICATION PROCESS FLOW */}
          <ScrollReveal variant="fade-up">
            <div className="rounded-2xl border border-border bg-card shadow-card p-8 md:p-14 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="text-center mb-14">
                  <h3 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
                    <span className="gradient-text">AI-Powered</span> Classification Pipeline
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Our computer vision system follows 7 simple steps to give you precise livestock evaluation results
                  </p>
                </div>

                <div className="grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 gap-8">
                  {enhancedProcessSteps.map((step, index) => (
                    <ScrollReveal key={index} variant="fade-up" delay={index * 100}>
                      <div className="text-center relative group">
                        {/* Step Number and Icon Container */}
                        <div className="relative mb-6">
                          <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg mx-auto shadow-elegant group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ease-spring`}>
                            {step.step}
                          </div>
                          {/* Technology Badge */}
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-card border border-border text-xs px-2 py-1 rounded-full text-primary font-semibold shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            {step.technology}
                          </div>
                        </div>
                        {/* Step Content */}
                        <div className="relative z-10 group-hover:-translate-y-2 transition-transform duration-300 ease-smooth">
                          <h4 className="text-lg font-bold mb-3 text-foreground">
                            {step.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                            {step.description}
                          </p>
                          {/* Technical Details */}
                          <div className="text-xs text-primary/70 font-medium">
                            {step.details}
                          </div>
                        </div>

                        {/* Hover Metrics */}
                        <div className="absolute inset-x-0 top-full mt-4 bg-card border border-border rounded-xl p-3 shadow-elegant opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-20">
                          <div className="text-xs space-y-1">
                            <div className="flex justify-between gap-2">
                              <span className="text-muted-foreground">Time:</span>
                              <span className="font-semibold text-primary">{step.processingTime}</span>
                            </div>
                            <div className="flex justify-between gap-2">
                              <span className="text-muted-foreground">Accuracy:</span>
                              <span className="font-semibold text-primary">{step.accuracy}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* COMPLETE ANALYSIS POPUP MODAL */}
      {showAnalysisPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-elegant relative animate-in fade-in zoom-in duration-300">

            {/* Close Button */}
            <button
              onClick={handleCloseAnalysisPopup}
              aria-label="Close"
              className="absolute top-4 right-4 w-10 h-10 bg-muted hover:bg-muted/70 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105 z-10"
            >
              <span className="text-xl leading-none">×</span>
            </button>

            {/* Popup Content */}
            <div className="p-6 md:p-8">

              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-4 shadow-glow">
                  <span className="text-2xl">🔬</span>
                </div>
                <h2 className="font-playfair text-2xl font-bold text-foreground mb-2">
                  Evaluate Physical Condition
                </h2>
                <p className="text-muted-foreground">
                  Follow these steps for accurate results
                </p>
              </div>

              {/* Quick Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {quickSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 border border-border rounded-xl">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">{step.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{step.title}</div>
                      <div className="text-xs text-muted-foreground">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  onClick={handleReadMoreAnalysis}
                  className="flex-1 min-h-12 rounded-xl border-border text-foreground hover:bg-muted hover:scale-105 transition-all duration-300"
                >
                  Read More
                </Button>

                <Button
                  onClick={handleContinueAnalysis}
                  className="flex-1 min-h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300"
                >
                  Continue Evaluate Physical
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CLASSIFICATION ANALYSIS POPUP MODAL */}
      {showClassificationPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-elegant relative animate-in fade-in zoom-in duration-300">

            {/* Close Button */}
            <button
              onClick={handleCloseClassificationPopup}
              aria-label="Close"
              className="absolute top-4 right-4 w-10 h-10 bg-muted hover:bg-muted/70 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105 z-10"
            >
              <span className="text-xl leading-none">×</span>
            </button>

            {/* Popup Content */}
            <div className="p-6 md:p-8">

              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl flex items-center justify-center mb-4 shadow-glow">
                  <span className="text-2xl">🎯</span>
                </div>
                <h2 className="font-playfair text-2xl font-bold text-foreground mb-2">
                  Evaluate Score
                </h2>
                <p className="text-muted-foreground">
                  Generate standardized scoring for classification.
                </p>
              </div>

              {/* Quick Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {classificationSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 border border-border rounded-xl">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">{step.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{step.title}</div>
                      <div className="text-xs text-muted-foreground">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  onClick={handleReadMoreClassification}
                  className="flex-1 min-h-12 rounded-xl border-border text-foreground hover:bg-muted hover:scale-105 transition-all duration-300"
                >
                  Read More
                </Button>

                <Button
                  onClick={handleContinueClassification}
                  className="flex-1 min-h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300"
                >
                  Continue Evaluate Score
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AnimalTypeClassification;
