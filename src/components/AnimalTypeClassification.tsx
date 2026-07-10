import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      gradient: "from-blue-500 to-blue-600",
      processingTime: "< 0.1s",
      accuracy: "99.9%"
    },
    {
      step: "02",
      title: "Preprocessing",
      description: "Image enhancement, noise reduction, and standardization",
      details: "Gaussian filtering, histogram equalization",
      technology: "Image Processing",
      gradient: "from-green-500 to-green-600",
      processingTime: "0.3s",
      accuracy: "98.5%"
    },
    {
      step: "03",
      title: "Feature Extraction",
      description: "Automated detection of key morphological characteristics",
      details: "CNN-based feature maps, edge detection",
      technology: "Deep Learning",
      gradient: "from-purple-500 to-purple-600",
      processingTime: "0.8s",
      accuracy: "97.2%"
    },
    {
      step: "04",
      title: "Classification",
      description: "Multi-class breed identification using neural networks",
      details: "ResNet-50 architecture, softmax output",
      technology: "AI/ML",
      gradient: "from-red-500 to-red-600",
      processingTime: "0.5s",
      accuracy: "96.3%"
    },
    {
      step: "05",
      title: "Phenotype Scoring",
      description: "Standardized evaluation of physical traits and conformity",
      details: "Multi-criteria analysis, weighted scoring",
      technology: "Analytics",
      gradient: "from-orange-500 to-orange-600",
      processingTime: "0.4s",
      accuracy: "94.8%"
    },
    {
      step: "06",
      title: "Quality Assessment",
      description: "Health indicators, body condition scoring, and anomaly detection",
      details: "Statistical analysis, outlier detection",
      technology: "ML Analytics",
      gradient: "from-teal-500 to-teal-600",
      processingTime: "0.6s",
      accuracy: "93.7%"
    },
    {
      step: "07",
      title: "Integration",
      description: "Seamless data export to farm management and breeding systems",
      details: "API integration, database sync",
      technology: "Cloud/API",
      gradient: "from-indigo-500 to-indigo-600",
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

  return (
    <section id="technology" className="min-h-screen py-20 bg-gradient-to-br from-background via-muted/20 to-primary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                AI Technology
              </span>
            </div>
            <h2 className="font-playfair text-5xl md:text-7xl font-bold mb-8 text-foreground bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
              Animal Type Classification & Scoring
            </h2>
            <p className="font-inter text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed">
              Advanced AI-powered evaluation system for comprehensive livestock assessment, breed classification, and standardized scoring with 95%+ accuracy
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%+</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3sec</div>
                <div className="text-sm text-muted-foreground">Analysis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Breeds</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">AI-Based</div>
                <div className="text-sm text-muted-foreground">Scoring</div>
              </div>
            </div>

            {/* LIVE AI SCORING PLATFORM */}
            <div className="bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50 mb-16 max-w-6xl mx-auto relative overflow-hidden">

              <div className="relative z-10">
                {/* Platform Header */}
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <h3 className="font-playfair text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      🚀 Live AI Scoring Platform
                    </h3>
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Experience real-time AI-powered livestock scoring with advanced neural networks
                  </p>

                  {/* ANALYSIS ACTION BUTTONS */}
                  <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-5xl mx-auto">

                    {/* Complete Analysis Button - With Click Handler */}
                    <div className="group relative transform transition-all duration-500 hover:-translate-y-2">
                      {/* Animated Background Glow */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse group-hover:animate-none"></div>

                      {/* Secondary Glow Layer */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-300/20 to-cyan-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700"></div>

                      {/* Button Container */}
                      <div className="relative bg-gradient-to-br from-blue-50/90 to-cyan-50/90 backdrop-blur-sm rounded-3xl p-1.5 shadow-xl">
                        <Button
                          onClick={handleCompleteAnalysisClick}
                          className="relative w-full h-auto min-h-[280px] p-6 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 border-0 rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-blue-500/25 group-hover:scale-[1.02] overflow-hidden"
                        >

                          {/* Animated Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                          {/* Content */}
                          <div className="relative text-center z-10 flex flex-col justify-between h-full">
                            {/* Enhanced Icon Container */}
                            <div className="relative mb-6">
                              <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                                <span className="text-3xl filter drop-shadow-lg">🔬</span>
                              </div>
                              {/* Floating particles effect */}
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                              <div className="absolute top-2 right-1/4 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 flex flex-col justify-center">
                              {/* Enhanced Typography */}
                              <div className="font-bold text-xl mb-4 text-white tracking-wide leading-tight">
                                Evaluate Physical
                              </div>
                            </div>

                            {/* Feature Tags */}
                            <div className="flex flex-wrap gap-2 justify-center mt-auto">
                              <span className="px-3 py-1.5 bg-white/20 rounded-full text-xs text-white font-medium">Full Report</span>
                              <span className="px-3 py-1.5 bg-white/20 rounded-full text-xs text-white font-medium">AI Insights</span>
                            </div>
                          </div>
                        </Button>
                      </div>
                    </div>

                    {/* Classification Analysis Button - With Click Handler */}
                    <div className="group relative transform transition-all duration-500 hover:-translate-y-2">
                      {/* Animated Background Glow */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse group-hover:animate-none"></div>

                      {/* Secondary Glow Layer */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-green-300/20 to-emerald-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700"></div>

                      {/* Button Container */}
                      <div className="relative bg-gradient-to-br from-green-50/90 to-emerald-50/90 backdrop-blur-sm rounded-3xl p-1.5 shadow-xl">
                        <Button
                          onClick={handleClassificationClick}
                          className="relative w-full h-auto min-h-[280px] p-6 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:via-green-600 hover:to-teal-700 border-0 rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-green-500/25 group-hover:scale-[1.02] overflow-hidden"
                        >

                          {/* Animated Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                          {/* Content */}
                          <div className="relative text-center z-10 flex flex-col justify-between h-full">
                            {/* Enhanced Icon Container */}
                            <div className="relative mb-6">
                              <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                                <span className="text-3xl filter drop-shadow-lg">🎯</span>
                              </div>
                              {/* Floating particles effect */}
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                              <div className="absolute top-2 right-1/4 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 flex flex-col justify-center">
                              {/* Enhanced Typography */}
                              <div className="font-bold text-xl mb-4 text-white tracking-wide leading-tight">
                                Evaluate Score
                              </div>
                            </div>

                            {/* Feature Tags */}
                            <div className="flex flex-wrap gap-2 justify-center mt-auto">
                              <span className="px-3 py-1.5 bg-white/20 rounded-full text-xs text-white font-medium">Breed ID</span>
                              <span className="px-3 py-1.5 bg-white/20 rounded-full text-xs text-white font-medium">Type Class</span>
                            </div>
                          </div>
                        </Button>
                      </div>
                    </div>

                    {/* Evaluate Best Match Button */}
                    <div className="group relative transform transition-all duration-500 hover:-translate-y-2">
                      {/* Animated Background Glow */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-violet-500 to-fuchsia-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse group-hover:animate-none"></div>

                      {/* Secondary Glow Layer */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-300/20 to-fuchsia-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700"></div>

                      {/* Button Container */}
                      <div className="relative bg-gradient-to-br from-purple-50/90 to-fuchsia-50/90 backdrop-blur-sm rounded-3xl p-1.5 shadow-xl">
                        <Button className="relative w-full h-auto min-h-[280px] p-6 bg-gradient-to-br from-purple-500 via-violet-600 to-fuchsia-600 hover:from-violet-600 hover:via-purple-600 hover:to-fuchsia-700 border-0 rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-purple-500/25 group-hover:scale-[1.02] overflow-hidden">

                          {/* Animated Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                          {/* Content */}
                          <div className="relative text-center z-10 flex flex-col justify-between h-full">
                            {/* Enhanced Icon Container */}
                            <div className="relative mb-6">
                              <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                                <span className="text-3xl filter drop-shadow-lg">⭐</span>
                              </div>
                              {/* Floating particles effect */}
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                              <div className="absolute top-2 right-1/4 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 flex flex-col justify-center">
                              {/* Enhanced Typography */}
                              <div className="font-bold text-xl mb-4 text-white tracking-wide leading-tight">
                                Evaluate Best Match
                              </div>
                            </div>

                            {/* Feature Tags */}
                            <div className="flex flex-wrap gap-2 justify-center mt-auto">
                              <span className="px-3 py-1.5 bg-white/20 rounded-full text-xs text-white font-medium">Genetics</span>
                              <span className="px-3 py-1.5 bg-white/20 rounded-full text-xs text-white font-medium">Breeding</span>
                            </div>
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IMPROVED CLASSIFICATION PROCESS FLOW */}
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl border border-border/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50"></div>
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h3 className="text-4xl md:text-5xl font-bold mb-6 text-primary bg-gradient-to-r from-primary to-accent bg-clip-text">
                  AI-Powered Classification Pipeline
                </h3>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our advanced computer vision system follows a comprehensive 7-step process to deliver precise livestock evaluation results
                </p>
              </div>

              <div className="grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 gap-8 mb-16">
                {enhancedProcessSteps.map((step, index) => (
                  <div key={index} className="text-center relative group">
                    {/* Step Number and Icon Container */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        {step.step}
                      </div>
                      {/* Technology Badge */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-xs px-2 py-1 rounded-full text-primary font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {step.technology}
                      </div>
                    </div>
                    {/* Step Content */}
                    <div className="relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
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
                    <div className="absolute inset-x-0 top-full mt-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                      <div className="text-xs space-y-1">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Processing Time:</span>
                          <span className="font-semibold text-primary">{step.processingTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Accuracy:</span>
                          <span className="font-semibold text-green-600">{step.accuracy}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COMPLETE ANALYSIS POPUP MODAL */}
      {showAnalysisPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl relative animate-in fade-in zoom-in duration-300">

            {/* Close Button */}
            <button
              onClick={handleCloseAnalysisPopup}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200 z-10"
            >
              <span className="text-lg">×</span>
            </button>

            {/* Popup Content */}
            <div className="p-8">

              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">🔬</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Evaluate Physical Condition
                </h2>
                <p className="text-gray-600">
                  Follow these steps for accurate results
                </p>
              </div>

              {/* Quick Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {quickSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">{step.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{step.title}</div>
                      <div className="text-xs text-gray-600">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={handleReadMoreAnalysis}
                  className="flex-1 py-3 text-black border-black hover:bg-black hover:text-white transition-colors duration-200"
                >
                  Read More
                </Button>

                <Button
                  onClick={handleContinueAnalysis}
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white"
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
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl relative animate-in fade-in zoom-in duration-300">

            {/* Close Button */}
            <button
              onClick={handleCloseClassificationPopup}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200 z-10"
            >
              <span className="text-lg">×</span>
            </button>

            {/* Popup Content */}
            <div className="p-8">

              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Evaluate Score
                </h2>
                <p className="text-gray-600">
                  Generate standardized scoring for classification.
                </p>
              </div>

              {/* Quick Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {classificationSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">{step.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{step.title}</div>
                      <div className="text-xs text-gray-600">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={handleReadMoreClassification}
                  className="flex-1 py-3 text-black border-black hover:bg-black hover:text-white transition-colors duration-200"
                >
                  Read More
                </Button>

                <Button
                  onClick={handleContinueClassification}
                  className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white"
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
