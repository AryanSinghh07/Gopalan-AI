import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Eye, Search, BarChart3, Award, Zap, Shield, Target, Cpu, Sparkles, CheckCircle, TrendingUp } from "lucide-react";
import techHeroBg from "@/assets/tech-hero-bg.jpg";
import processFlowBg from "@/assets/process-flow-bg.jpg";
import mobileTechDemo from "@/assets/mobile-tech-demo.jpg";

const TechnicalDetails = () => {
  const processSteps = [
    {
      icon: Upload,
      title: "User Uploads Image",
      description: "Farmers or veterinarians upload high-quality images of livestock through our mobile app or web interface",
      color: "from-blue-500 to-cyan-500",
      bgPattern: "from-blue-500/5 to-cyan-500/10"
    },
    {
      icon: Eye,
      title: "Object Detection",
      description: "Advanced YOLO model detects animals in images, with ArUco markers ensuring precise localization and tracking.",
      color: "from-purple-500 to-pink-500",
      bgPattern: "from-purple-500/5 to-pink-500/10"
    },
    {
      icon: Search,
      title: "Species Identification", 
      description: "AI model determines whether the detected animal is a cow or buffalo with 99.2% accuracy",
      color: "from-green-500 to-emerald-500",
      bgPattern: "from-green-500/5 to-emerald-500/10"
    },
    {
      icon: BarChart3,
      title: "Breed Classification",
      description: "Deep learning algorithms classify the specific breed from our database of 50+ recognized breeds",
      color: "from-orange-500 to-red-500",
      bgPattern: "from-orange-500/5 to-red-500/10"
    },
    {
      icon: Award,
      title: "Physical Parameters & Scoring",
      description: "Comprehensive evaluation of physical traits and breeding potential based on standardized scoring systems",
      color: "from-indigo-500 to-purple-500",
      bgPattern: "from-indigo-500/5 to-purple-500/10"
    }
  ];

  const techSpecs = [
    {
      icon: Cpu,
      title: "AI Model Architecture",
      color: "from-blue-500 to-cyan-500",
      items: [
        "YOLO v8 for object detection",
        "ResNet-50 backbone for feature extraction", 
        "Custom CNN for breed classification",
        "Ensemble learning for accuracy optimization"
      ]
    },
    {
      icon: BarChart3,
      title: "Performance Metrics", 
      color: "from-green-500 to-emerald-500",
      items: [
        { label: "Species identification accuracy", value: "99.2%" },
        { label: "Breed classification accuracy", value: "95.8%" },
        { label: "Processing time", value: "<2 sec" },
        { label: "Supported breeds", value: "50+" }
      ]
    },
    {
      icon: Upload,
      title: "Data Requirements",
      color: "from-purple-500 to-pink-500", 
      items: [
        "Minimum 1080p image resolution",
        "Clear visibility of animal features",
        "Adequate lighting conditions",
        "JPEG, PNG, WebP formats supported"
      ]
    },
    {
      icon: Shield,
      title: "Integration Options",
      color: "from-orange-500 to-red-500",
      items: [
        "REST API for web applications",
        "Mobile SDK for native apps",
        "Batch processing for large datasets", 
        "Real-time camera integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Redesigned to match the reference */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.05),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            {/* Breadcrumb/Tag */}
            <div className="animate-fade-in mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2.5 text-white/90">
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span className="text-sm font-medium tracking-wide">Advanced AI Technology</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <div className="animate-fade-in mb-8" style={{ animationDelay: '0.1s' }}>
              <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-2">
                Technical Innovation
              </h1>
              <div className="flex justify-center items-center gap-4 text-5xl md:text-7xl lg:text-8xl font-playfair font-bold">
                <span className="text-white">&</span>
                <span className="text-emerald-300">AI Excellence</span>
              </div>
            </div>
            
            {/* Description */}
            <div className="animate-fade-in mb-12" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto font-light">
                Discover comprehensive information about our cutting-edge AI technology, advanced processing capabilities, and everything you need to know about our remarkable livestock classification system.
              </p>
            </div>
            
            {/* Feature Highlights */}
            <div className="animate-fade-in flex flex-wrap justify-center items-center gap-8 md:gap-12" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-lg md:text-xl font-medium">99.2% Accuracy Rate</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-lg md:text-xl font-medium">50+ Breed Classifications</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-lg md:text-xl font-medium">Real-time Processing</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/20 to-transparent"></div>
      </section>

      {/* Enhanced Working Process Section */}
      <section className="relative py-20 bg-gradient-subtle overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${processFlowBg})` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_70%)]" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 shadow-sm">
                <TrendingUp className="w-4 h-4 text-primary animate-bounce" />
                <span className="text-primary text-sm font-medium">AI-Powered Process</span>
              </div>
              
              <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6 text-foreground">
                AI Processing <span className="text-primary relative">
                  Pipeline
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full"></div>
                </span>
              </h2>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <p className="font-inter text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                Experience the power of our sophisticated 5-step AI process that delivers unparalleled accuracy in livestock evaluation
              </p>
            </div>
          </div>

          {/* Enhanced Process Flow */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div 
                    key={index} 
                    className="relative animate-fade-in" 
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    {/* Enhanced Connection Line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/60 w-8 h-0.5 top-1/2 transform -translate-y-1/2 animate-pulse"></div>
                          <ArrowRight className="w-8 h-8 text-primary/80 animate-pulse relative z-10 bg-background rounded-full p-1" />
                        </div>
                      </div>
                    )}
                    
                    {/* Super Enhanced Process Card */}
                    <div className="relative z-10 bg-card/90 backdrop-blur-md border border-border/50 rounded-3xl p-6 h-full hover:shadow-2xl hover:shadow-primary/10 hover:scale-105 transition-all duration-500 group hover:bg-card/95 hover:border-primary/30">
                      {/* Dynamic gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.bgPattern} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`} />
                      
                      {/* Subtle border glow on hover */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -inset-px"></div>
                      
                      <div className="relative z-10">
                        {/* Enhanced Icon Container */}
                        <div className={`relative w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                          <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}></div>
                        </div>
                        
                        <h3 className="font-inter font-bold text-lg mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        
                        <p className="font-inter text-sm text-foreground/70 leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                          {step.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="text-xs font-semibold text-primary bg-gradient-to-r from-primary/10 to-primary/20 px-3 py-1.5 rounded-full border border-primary/20">
                              Step {index + 1}
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Technical Specifications */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.03),transparent_70%)]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 shadow-sm">
                <Cpu className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: '3s' }} />
                <span className="text-primary text-sm font-medium">Advanced Technology</span>
              </div>
              
              <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Technical <span className="text-primary relative">
                  Specifications
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full"></div>
                </span>
              </h2>
              <p className="font-inter text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Powered by state-of-the-art AI models and enterprise-grade infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {techSpecs.map((spec, index) => {
                const IconComponent = spec.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card/80 backdrop-blur-lg border border-border/50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/5 hover:scale-[1.02] transition-all duration-500 group animate-fade-in hover:bg-card/90 hover:border-primary/20" 
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    {/* Enhanced Header */}
                    <div className="flex items-center mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${spec.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                        <IconComponent className="w-7 h-7 text-white drop-shadow-sm" />
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500`}></div>
                      </div>
                      <h3 className="font-inter font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {spec.title}
                      </h3>
                    </div>

                    {/* Enhanced Content */}
                    <div className="space-y-4">
                      {spec.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="group/item">
                          {typeof item === 'string' ? (
                            <div className="flex items-center group-hover/item:translate-x-1 transition-transform duration-300">
                              <div className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-primary/70 rounded-full mr-4 group-hover/item:scale-125 transition-transform duration-300"></div>
                              <span className="font-inter text-foreground/70 group-hover/item:text-foreground transition-colors duration-300">
                                {item}
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between group-hover/item:translate-x-1 transition-transform duration-300">
                              <span className="flex items-center font-inter text-foreground/70 group-hover/item:text-foreground transition-colors duration-300">
                                <div className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-primary/70 rounded-full mr-4 group-hover/item:scale-125 transition-transform duration-300"></div>
                                {item.label}
                              </span>
                              <span className="text-primary font-bold text-lg bg-primary/10 px-3 py-1 rounded-full border border-primary/20 group-hover/item:bg-primary/20 transition-colors duration-300">
                                {item.value}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Mobile Demo Section */}
            <div className="relative bg-gradient-subtle rounded-3xl p-8 md:p-12 animate-fade-in overflow-hidden" style={{ animationDelay: '0.5s' }}>
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-2xl"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 shadow-sm">
                    <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                    <span className="text-primary text-sm font-medium">Mobile Innovation</span>
                  </div>
                  
                  <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Mobile-First <span className="text-primary relative">
                      Experience
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 to-transparent rounded-full"></div>
                    </span>
                  </h3>
                  
                  <p className="font-inter text-lg text-foreground/70 mb-8 leading-relaxed">
                    Our mobile application brings AI-powered livestock classification directly to farmers' hands, 
                    enabling real-time analysis in the field with intuitive touch interfaces and offline capabilities.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "Offline processing capabilities",
                      "Real-time camera integration", 
                      "Cloud sync and backup"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                        <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary/70 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300 shadow-md"></div>
                        <CheckCircle className="w-5 h-5 text-primary/60 mr-3 group-hover:text-primary transition-colors duration-300" />
                        <span className="font-inter text-foreground group-hover:text-primary transition-colors duration-300 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="relative z-10 transform hover:scale-105 hover:-rotate-2 transition-all duration-500 group">
                    <img 
                      src={mobileTechDemo} 
                      alt="Mobile Technology Demo" 
                      className="w-full max-w-md mx-auto rounded-3xl shadow-2xl shadow-primary/10 group-hover:shadow-3xl group-hover:shadow-primary/20 transition-all duration-500 border border-white/10"
                    />
                    
                    {/* Enhanced floating elements around the image */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-accent to-accent/70 rounded-full animate-pulse shadow-md"></div>
                  </div>
                  
                  {/* Enhanced background glow */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 opacity-60 blur-3xl rounded-3xl animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnicalDetails;
