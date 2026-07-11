import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  Heart,
  AlertTriangle,
  Phone,
  Thermometer,
  Stethoscope,
  Pill,
  Eye,
  Activity,
  Clock,
  CheckCircle,
  XCircle,
  Search,
  Download,
  BookOpen,
  Shield,
  Zap,
  Star,
  Award,
  TrendingUp,
  Users,
  ChevronRight,
  FileText,
  Share2
} from 'lucide-react';
import cowImage from "@/assets/animals/cattle.jpg";
import buffaloImage from "@/assets/animals/water-buffalo.jpg";

interface MedicalCondition {
  id: string;
  name: string;
  symptoms: string[];
  causes: string[];
  treatment: string[];
  prevention: string[];
  severity: 'low' | 'medium' | 'high';
  emergencyContact: boolean;
  description: string;
  funFact: string;
}

interface AnimalType {
  id: string;
  name: string;
  image: string;
  conditions: MedicalCondition[];
  gradient: string;
  description: string;
  characteristics: string[];
  lifespan: string;
  weight: string;
}

const MedicalSupport = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<string>('cow');
  const [selectedCondition, setSelectedCondition] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const animalData: AnimalType[] = [
    {
      id: 'cow',
      name: "Cow",

      image: cowImage,
      gradient: 'from-emerald-600 to-green-700',
      description: "Dairy and beef cattle are essential livestock providing milk, meat, and leather products.",
      characteristics: ["Herbivorous", "Social animals", "Four-chambered stomach", "Average milk production: 6-8 gallons/day"],
      lifespan: "18-22 years",
      weight: "400-800 kg",
      conditions: [
        {
          id: 'mastitis',
          name: "Mastitis",
          description: "Inflammation of the mammary gland, most commonly caused by bacterial infection.",
          funFact: "Mastitis costs dairy farmers billions globally each year in lost milk production.",
          symptoms: ["Swollen udder", "Hot to touch", "Pain when milking", "Abnormal milk (clots, blood)", "Reduced milk production"],
          causes: ["Bacterial infection", "Poor hygiene", "Trauma to udder", "Stress", "Poor nutrition"],
          treatment: ["Antibiotic therapy", "Anti-inflammatory drugs", "Frequent milking", "Udder massage", "Proper hygiene"],
          prevention: ["Clean milking equipment", "Dry cow therapy", "Proper nutrition", "Regular health checks", "Stress reduction"],
          severity: 'high',
          emergencyContact: true
        },
        {
          id: 'bloat',
          name: "Bloat (Gas)",
          description: "Excessive accumulation of gas in the rumen causing dangerous abdominal distension.",
          funFact: "A cow can produce up to 500 liters of gas per day normally, but bloat prevents proper gas release.",
          symptoms: ["Distended left abdomen", "Difficulty breathing", "Restlessness", "Loss of appetite", "Excessive salivation"],
          causes: ["Rapid feed changes", "Legume-rich pasture", "Wet grass", "Grain overload", "Stress"],
          treatment: ["Remove feed immediately", "Walk the animal", "Vegetable oil administration", "Stomach tube insertion", "Emergency surgery if severe"],
          prevention: ["Gradual diet changes", "Avoid wet legumes", "Provide adequate fiber", "Regular feeding schedule", "Monitor grazing"],
          severity: 'high',
          emergencyContact: true
        },
        {
          id: 'milk-fever',
          name: "Milk Fever (Hypocalcemia)",
          description: "Metabolic disorder caused by low blood calcium levels, typically occurring around calving.",
          funFact: "Despite its name, milk fever rarely involves fever - the body temperature often drops.",
          symptoms: ["Muscle tremors", "Inability to stand", "Cold ears and legs", "Rapid heartbeat", "Loss of consciousness"],
          causes: ["Calcium deficiency", "High milk production", "Poor nutrition during dry period", "Age factor", "Stress"],
          treatment: ["Intravenous calcium", "Supportive care", "Warmth provision", "Professional veterinary care", "Monitoring"],
          prevention: ["Proper dry cow nutrition", "Calcium supplementation", "Magnesium balance", "Vitamin D provision", "Gradual diet transition"],
          severity: 'high',
          emergencyContact: true
        },
        {
          id: 'lameness',
          name: "Lameness",
          description: "Impaired locomotion affecting one or more limbs, significantly impacting animal welfare.",
          funFact: "Lameness is the third most costly disease in dairy cattle after mastitis and reproductive disorders.",
          symptoms: ["Limping", "Reluctance to walk", "Swollen joints", "Heat in affected area", "Reduced activity"],
          causes: ["Hoof problems", "Injuries", "Arthritis", "Poor flooring", "Nutritional imbalances"],
          treatment: ["Hoof trimming", "Antibiotic therapy", "Pain management", "Rest", "Proper footing"],
          prevention: ["Regular hoof care", "Clean, dry housing", "Proper nutrition", "Avoid sharp objects", "Regular exercise"],
          severity: 'medium',
          emergencyContact: false
        },
        {
          id: 'diarrhea',
          name: "Diarrhea",
          description: "Frequent passage of loose, watery stools often indicating digestive system problems.",
          funFact: "Calf diarrhea is responsible for more deaths in young calves than any other disease.",
          symptoms: ["Loose stools", "Dehydration", "Loss of appetite", "Weight loss", "Lethargy"],
          causes: ["Dietary changes", "Infections", "Parasites", "Stress", "Poor water quality"],
          treatment: ["Fluid therapy", "Electrolyte replacement", "Dietary management", "Probiotics", "Antimicrobial if needed"],
          prevention: ["Gradual diet changes", "Clean water supply", "Parasite control", "Stress management", "Good hygiene"],
          severity: 'medium',
          emergencyContact: false
        }
      ]
    },
    {
      id: 'buffalo',
      name: "Buffalo",

      image: buffaloImage,
      gradient: 'from-green-600 to-teal-700',
      description: "Water buffalo are important for milk production and agricultural work in many tropical regions.",
      characteristics: ["Excellent swimmers", "Heat tolerant", "High milk fat content", "Strong work animals"],
      lifespan: "20-25 years",
      weight: "450-900 kg",
      conditions: [
        {
          id: 'heat-stress',
          name: "Heat Stress",
          description: "Physiological strain caused by high environmental temperature and humidity.",
          funFact: "Buffalo can regulate body temperature by wallowing in mud, which acts as natural sunscreen.",
          symptoms: ["Excessive panting", "Drooling", "Reduced feed intake", "Seeking shade", "Reduced milk production"],
          causes: ["High temperature", "High humidity", "Poor ventilation", "Lack of shade", "Overcrowding"],
          treatment: ["Provide shade", "Cool water access", "Fans or misters", "Electrolyte replacement", "Reduce activity"],
          prevention: ["Adequate shade", "Good ventilation", "Fresh water", "Avoid midday activities", "Proper housing"],
          severity: 'medium',
          emergencyContact: false
        },
        {
          id: 'foot-rot',
          name: "Foot Rot",
          description: "Bacterial infection of the hoof causing severe lameness and foul odor.",
          funFact: "Foot rot can spread rapidly through a herd in wet, muddy conditions.",
          symptoms: ["Severe lameness", "Swollen foot", "Foul smell", "Separation of hoof wall", "Pain"],
          causes: ["Bacterial infection", "Wet conditions", "Poor hygiene", "Injuries", "Stress"],
          treatment: ["Antibiotic therapy", "Hoof trimming", "Topical treatment", "Dry housing", "Pain management"],
          prevention: ["Dry housing", "Regular hoof care", "Good hygiene", "Avoid muddy areas", "Zinc supplementation"],
          severity: 'high',
          emergencyContact: true
        },
        {
          id: 'respiratory-infection',
          name: "Respiratory Infection",
          description: "Infections affecting the respiratory system, commonly caused by viruses or bacteria.",
          funFact: "Buffalo are generally more resistant to respiratory diseases than cattle due to their robust immune system.",
          symptoms: ["Coughing", "Nasal discharge", "Difficulty breathing", "Fever", "Reduced appetite"],
          causes: ["Viral infections", "Bacterial infections", "Poor air quality", "Stress", "Overcrowding"],
          treatment: ["Antibiotic therapy", "Anti-inflammatory drugs", "Supportive care", "Good ventilation", "Rest"],
          prevention: ["Vaccination", "Good ventilation", "Avoid overcrowding", "Stress reduction", "Quarantine new animals"],
          severity: 'medium',
          emergencyContact: false
        },
        {
          id: 'parasites',
          name: "Internal Parasites",
          description: "Worm infestations that can significantly impact health and productivity.",
          funFact: "Buffalo can harbor over 50 different species of internal parasites, but many show high resistance.",
          symptoms: ["Weight loss", "Poor coat", "Diarrhea", "Anemia", "Reduced performance"],
          causes: ["Worm infestation", "Poor pasture management", "Overcrowding", "Contaminated water", "Stress"],
          treatment: ["Deworming medication", "Supportive nutrition", "Iron supplementation", "Pasture rotation", "Follow-up treatment"],
          prevention: ["Regular deworming", "Pasture rotation", "Fecal testing", "Clean water", "Proper nutrition"],
          severity: 'medium',
          emergencyContact: false
        },
        {
          id: 'digestive-disorders',
          name: "Digestive Disorders",
          description: "Various conditions affecting the digestive system and nutrient absorption.",
          funFact: "Buffalo have a more efficient digestive system than cattle, converting poor-quality feed better.",
          symptoms: ["Loss of appetite", "Abdominal pain", "Abnormal feces", "Dehydration", "Weight loss"],
          causes: ["Poor quality feed", "Sudden diet changes", "Contaminated feed", "Stress", "Parasites"],
          treatment: ["Dietary management", "Probiotics", "Fluid therapy", "Anti-inflammatory drugs", "Supportive care"],
          prevention: ["Quality feed", "Gradual diet changes", "Clean feed storage", "Regular feeding", "Stress management"],
          severity: 'medium',
          emergencyContact: false
        }
      ]
    }
  ];

  const currentAnimal = animalData.find(animal => animal.id === selectedAnimal) || animalData[0];
  const currentCondition = currentAnimal.conditions.find(condition => condition.id === selectedCondition);

  const filteredConditions = currentAnimal.conditions.filter(condition =>
    condition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    condition.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const emergencyProcedures = [
    {
      title: "Emergency Assessment",
      icon: <Zap className="h-6 w-6" />,
      color: "from-red-500 to-red-600",
      steps: [
        "Check vital signs (temperature, breathing, pulse)",
        "Assess consciousness level",
        "Look for obvious injuries or distress",
        "Note any unusual behavior",
        "Document symptoms and timeline"
      ]
    },
    {
      title: "When to Call Veterinarian Immediately",
      icon: <Phone className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      steps: [
        "Animal is unconscious or unresponsive",
        "Severe bleeding or trauma",
        "Difficulty breathing",
        "Signs of severe pain",
        "Bloat or severe abdominal distension",
        "Inability to stand or walk",
        "Toxic plant consumption suspected"
      ]
    },
    {
      title: "First Aid Measures",
      icon: <Shield className="h-6 w-6" />,
      color: "from-emerald-600 to-green-700",
      steps: [
        "Keep animal calm and comfortable",
        "Provide fresh water if able to drink",
        "Move to shade or shelter",
        "Stop any bleeding with clean cloth",
        "Do not give medication without veterinary advice",
        "Keep detailed records of symptoms"
      ]
    }
  ];

  const stats = [
    { icon: <Users className="h-8 w-8" />, value: <AnimatedCounter end={50} suffix="K+" />, label: "Animals Helped" },
    { icon: <Award className="h-8 w-8" />, value: <AnimatedCounter end={99} suffix="%" />, label: "Success Rate" },
    { icon: <Clock className="h-8 w-8" />, value: <span>24/7</span>, label: "Support Available" },
    { icon: <Star className="h-8 w-8" />, value: <AnimatedCounter end={4.9} decimals={1} />, label: "User Rating" },
  ];

  const quickTips = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Daily Observation",
      tip: "Watch your animals every day. Look for changes in behavior, appetite, or physical appearance."
    },
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: "Temperature Check",
      tip: "Learn to take your animal's temperature. It is the most important vital sign."
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Vet Contact Ready",
      tip: "Keep your veterinarian's phone number easy to find at all times."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Record Keeping",
      tip: "Keep health records for each animal, including treatments and vaccinations."
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-700 bg-red-50 border-red-200';
      case 'medium': return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'low': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <XCircle className="h-4 w-4" />;
      case 'medium': return <AlertTriangle className="h-4 w-4" />;
      case 'low': return <CheckCircle className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-20 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-16 left-10 w-40 h-40 bg-white/5 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-16 w-32 h-32 bg-amber-300/10 rounded-full animate-float" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-emerald-300/10 rounded-full animate-pulse-soft"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 section-padding">
          <div className="text-center">
            <ScrollReveal variant="zoom">
              <div className="flex justify-center items-center mb-8">
                <div className="bg-white/15 p-6 rounded-full backdrop-blur-sm animate-pulse-soft">
                  <Heart className="h-14 w-14 text-amber-300" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Animal Medical
                <span className="bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent"> Support</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-12 leading-relaxed">
                Your trusted health guide for cows and buffalo. Find symptoms, causes, treatments, and emergency steps — all in one place.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ease-smooth hover:-translate-y-1 h-full">
                    <div className="text-amber-300 mb-3 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-emerald-100 text-sm md:text-base">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background">
        <div className="container mx-auto px-6">

          {/* Animal Selection */}
          <section className="section-padding">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="section-badge">
                  <Stethoscope className="h-4 w-4 mr-2" />
                  Step 1
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
                  Choose Your <span className="gradient-text">Animal</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Tap the animal you need help with.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {animalData.map((animal, index) => (
                <ScrollReveal key={animal.id} variant={index === 0 ? "slide-left" : "slide-right"} delay={index * 100} className="h-full">
                  <div
                    onClick={() => {
                      setSelectedAnimal(animal.id);
                      setSelectedCondition('');
                      setSearchTerm('');
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedAnimal(animal.id);
                        setSelectedCondition('');
                        setSearchTerm('');
                      }
                    }}
                    className={`group relative h-full cursor-pointer rounded-2xl border bg-card shadow-card card-lift transition-all duration-300 ease-smooth ${
                      selectedAnimal === animal.id
                        ? 'border-primary ring-2 ring-primary/40 shadow-elegant'
                        : 'border-border hover:border-primary/40'
                    }`}
                  >
                    <div className="p-6 md:p-8">
                      {/* Animal Image */}
                      <div className="relative mb-6 rounded-xl overflow-hidden shadow-card">
                        <img
                          src={animal.image}
                          alt={animal.name}
                          loading="lazy"
                          className="w-full h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-smooth"
                        />
                        {selectedAnimal === animal.id && (
                          <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full p-2 shadow-glow animate-fade-up">
                            <CheckCircle className="h-6 w-6" />
                          </div>
                        )}
                      </div>

                      <div className="text-center">
                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">{animal.name}</h3>
                        <p className="text-muted-foreground mb-5 leading-relaxed">{animal.description}</p>

                        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                          <div className="bg-muted p-3 rounded-xl">
                            <div className="font-semibold">Lifespan</div>
                            <div className="text-muted-foreground">{animal.lifespan}</div>
                          </div>
                          <div className="bg-muted p-3 rounded-xl">
                            <div className="font-semibold">Weight</div>
                            <div className="text-muted-foreground">{animal.weight}</div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-2">Key Characteristics</h4>
                          <div className="flex flex-wrap justify-center gap-2">
                            {animal.characteristics.map((char, charIndex) => (
                              <span key={charIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                {char}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <BookOpen className="h-5 w-5" />
                            <span>{animal.conditions.length} conditions covered</span>
                          </div>
                          <span className={`min-h-12 px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r ${animal.gradient} shadow-card group-hover:shadow-elegant transition-shadow flex items-center space-x-2`}>
                            <span>Select {animal.name}</span>
                            <ChevronRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Quick Tips Section */}
          <section className="pb-16 md:pb-24">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="section-badge">
                  <Heart className="h-4 w-4 mr-2" />
                  Daily Care
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
                  Quick <span className="gradient-text">Health Tips</span>
                </h2>
                <p className="text-lg text-muted-foreground">Simple habits that keep your animals healthy.</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickTips.map((tip, index) => (
                <ScrollReveal key={index} delay={index * 100} className="h-full">
                  <div className="group h-full rounded-2xl border border-border bg-card shadow-card card-lift p-6">
                    <div className="rounded-xl bg-primary/10 text-primary p-3 mb-4 inline-block group-hover:scale-110 transition-transform ease-smooth">
                      {tip.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{tip.tip}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Conditions Browser */}
          <section className="pb-16 md:pb-24">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="section-badge">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Step 2
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
                  Find the <span className="gradient-text">Condition</span>
                </h2>
                <p className="text-lg text-muted-foreground">Search by name or symptom, then tap a condition to learn more.</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Conditions List */}
              <div className="lg:col-span-1">
                <ScrollReveal variant="slide-left">
                  <div className="rounded-2xl border border-border bg-card shadow-card p-6 md:p-8 lg:sticky lg:top-24">
                    <div className="flex items-center mb-6">
                      <div className={`bg-gradient-to-r ${currentAnimal.gradient} p-3 rounded-xl mr-4`}>
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Medical Conditions</h3>
                        <p className="text-muted-foreground text-sm">For {currentAnimal.name}</p>
                      </div>
                    </div>

                    {/* Search */}
                    <div className="relative mb-6">
                      <Search className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search conditions or symptoms..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full min-h-12 pl-12 pr-4 py-3 border border-border rounded-xl bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      />
                    </div>

                    <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                      {filteredConditions.map((condition) => (
                        <button
                          key={condition.id}
                          onClick={() => setSelectedCondition(condition.id)}
                          className={`w-full min-h-12 text-left p-4 border-2 rounded-xl transition-all duration-300 ease-smooth group ${
                            selectedCondition === condition.id
                              ? 'border-primary bg-primary/5 shadow-card'
                              : 'border-border hover:border-primary/50 hover:bg-muted/50 hover:shadow-card'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <h4 className="font-bold group-hover:text-primary transition-colors">
                              {condition.name}
                            </h4>
                            <div className={`px-2.5 py-1 rounded-full text-xs flex items-center space-x-1 border shrink-0 ${getSeverityColor(condition.severity)}`}>
                              {getSeverityIcon(condition.severity)}
                              <span className="capitalize font-bold">{condition.severity}</span>
                            </div>
                          </div>
                          {condition.emergencyContact && (
                            <div className="flex items-center mb-1">
                              <Phone className="h-4 w-4 text-red-600 mr-2" />
                              <span className="text-sm text-red-600 font-semibold">Emergency condition</span>
                            </div>
                          )}
                          <p className="text-muted-foreground text-sm line-clamp-2">{condition.description}</p>
                        </button>
                      ))}
                      {filteredConditions.length === 0 && (
                        <p className="text-muted-foreground text-sm text-center py-6">No condition found. Try another word.</p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Condition Details */}
              <div className="lg:col-span-2">
                {currentCondition ? (
                  <div key={currentCondition.id} className="animate-fade-up space-y-6">
                    {/* Main Condition Card */}
                    <div className="rounded-2xl border border-border bg-card shadow-card p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                        <div className="flex items-center">
                          <div className="bg-gradient-to-r from-emerald-600 to-green-700 p-4 rounded-xl mr-4 shrink-0">
                            <Activity className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <h3 className="font-display text-2xl md:text-4xl font-bold mb-1">{currentCondition.name}</h3>
                            <p className="text-muted-foreground md:text-lg">{currentCondition.description}</p>
                          </div>
                        </div>
                        <div className={`px-4 py-2.5 rounded-xl flex items-center space-x-2 border-2 shrink-0 self-start ${getSeverityColor(currentCondition.severity)}`}>
                          {getSeverityIcon(currentCondition.severity)}
                          <span className="font-bold capitalize">{currentCondition.severity} Risk</span>
                        </div>
                      </div>

                      {/* Fun Fact */}
                      <div className="bg-accent/10 border border-accent/30 p-5 rounded-xl mb-8">
                        <div className="flex items-start">
                          <div className="rounded-xl bg-accent text-accent-foreground p-2 mr-4 flex-shrink-0">
                            <Star className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-bold mb-1">Did You Know?</h4>
                            <p className="text-muted-foreground">{currentCondition.funFact}</p>
                          </div>
                        </div>
                      </div>

                      {currentCondition.emergencyContact && (
                        <div className="bg-red-50 border-2 border-red-200 p-5 rounded-xl mb-8 animate-pulse-soft">
                          <div className="flex items-center text-red-800">
                            <div className="bg-red-600 p-3 rounded-xl mr-4 shrink-0">
                              <Phone className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <span className="font-bold text-lg md:text-xl">Emergency Condition</span>
                              <p className="text-red-700 mt-1">Call your veterinarian now for proper diagnosis and treatment.</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4 mb-8">
                        <Button className="min-h-12 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl shadow-card hover:shadow-elegant transition-all">
                          <Download className="h-5 w-5 mr-2" />
                          Download PDF Guide
                        </Button>
                        <Button variant="outline" className="min-h-12 border-primary/40 text-primary hover:bg-primary/10 px-6 py-3 rounded-xl shadow-card hover:shadow-elegant transition-all">
                          <Share2 className="h-5 w-5 mr-2" />
                          Share Information
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Symptoms */}
                        <ScrollReveal delay={0} className="h-full">
                          <div className="h-full bg-red-50 p-6 md:p-8 rounded-2xl border border-red-200 hover:shadow-card transition-shadow">
                            <h4 className="text-xl md:text-2xl font-bold mb-5 flex items-center text-red-800">
                              <Eye className="h-6 w-6 mr-3 text-red-600" />
                              Symptoms to Watch
                            </h4>
                            <ul className="space-y-3">
                              {currentCondition.symptoms.map((symptom, index) => (
                                <li key={index} className="flex items-start group">
                                  <div className="h-2.5 w-2.5 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                                  <span className="text-foreground/80 leading-relaxed">{symptom}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </ScrollReveal>

                        {/* Causes */}
                        <ScrollReveal delay={100} className="h-full">
                          <div className="h-full bg-amber-50 p-6 md:p-8 rounded-2xl border border-amber-200 hover:shadow-card transition-shadow">
                            <h4 className="text-xl md:text-2xl font-bold mb-5 flex items-center text-amber-800">
                              <AlertTriangle className="h-6 w-6 mr-3 text-amber-600" />
                              Common Causes
                            </h4>
                            <ul className="space-y-3">
                              {currentCondition.causes.map((cause, index) => (
                                <li key={index} className="flex items-start group">
                                  <div className="h-2.5 w-2.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                                  <span className="text-foreground/80 leading-relaxed">{cause}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </ScrollReveal>

                        {/* Treatment */}
                        <ScrollReveal delay={200} className="h-full">
                          <div className="h-full bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-200 hover:shadow-card transition-shadow">
                            <h4 className="text-xl md:text-2xl font-bold mb-5 flex items-center text-emerald-800">
                              <Pill className="h-6 w-6 mr-3 text-emerald-600" />
                              Treatment Options
                            </h4>
                            <ul className="space-y-3">
                              {currentCondition.treatment.map((treatment, index) => (
                                <li key={index} className="flex items-start group">
                                  <div className="h-2.5 w-2.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                                  <span className="text-foreground/80 leading-relaxed">{treatment}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </ScrollReveal>

                        {/* Prevention */}
                        <ScrollReveal delay={300} className="h-full">
                          <div className="h-full bg-green-50 p-6 md:p-8 rounded-2xl border border-green-200 hover:shadow-card transition-shadow">
                            <h4 className="text-xl md:text-2xl font-bold mb-5 flex items-center text-green-800">
                              <Shield className="h-6 w-6 mr-3 text-green-600" />
                              Prevention Tips
                            </h4>
                            <ul className="space-y-3">
                              {currentCondition.prevention.map((prevention, index) => (
                                <li key={index} className="flex items-start group">
                                  <div className="h-2.5 w-2.5 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                                  <span className="text-foreground/80 leading-relaxed">{prevention}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </ScrollReveal>
                      </div>
                    </div>
                  </div>
                ) : (
                  <ScrollReveal variant="fade-in">
                    <div className="rounded-2xl border border-border bg-card shadow-card p-10 md:p-16 text-center">
                      <div className="bg-primary/10 p-10 rounded-2xl mb-8 inline-block animate-float">
                        <Stethoscope className="h-20 w-20 text-primary" />
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Select a Medical Condition</h3>
                      <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
                        Pick a condition from the list to see its symptoms, causes, treatment options, and prevention tips.
                      </p>
                    </div>
                  </ScrollReveal>
                )}
              </div>
            </div>
          </section>

          {/* Emergency Procedures */}
          <section className="pb-16 md:pb-24">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="section-badge">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Be Prepared
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
                  Emergency <span className="gradient-text-warm">Procedures</span>
                </h2>
                <p className="text-lg text-muted-foreground">Important steps to follow during an animal health emergency.</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {emergencyProcedures.map((procedure, index) => (
                <ScrollReveal key={index} delay={index * 100} className="h-full">
                  <div className="group h-full rounded-2xl border border-border bg-card shadow-card card-lift p-6 md:p-8">
                    <div className={`bg-gradient-to-r ${procedure.color} p-4 rounded-2xl mb-6 inline-block group-hover:scale-110 transition-transform ease-smooth`}>
                      <div className="text-white">{procedure.icon}</div>
                    </div>
                    <h3 className="font-bold text-xl md:text-2xl mb-6">{procedure.title}</h3>
                    <ol className="space-y-4">
                      {procedure.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start group/item">
                          <span className="bg-primary/10 text-primary text-sm font-bold h-8 w-8 flex items-center justify-center rounded-full mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            {stepIndex + 1}
                          </span>
                          <span className="text-foreground/80 leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Vital Signs Reference */}
          <section className="pb-16 md:pb-24">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="section-badge">
                  <Thermometer className="h-4 w-4 mr-2" />
                  Know What Is Normal
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
                  Normal <span className="gradient-text">Vital Signs</span>
                </h2>
                <p className="text-lg text-muted-foreground">Healthy ranges for cattle and buffalo. Compare with your animal.</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <ScrollReveal variant="slide-left" className="h-full">
                <div className="h-full bg-emerald-50 p-6 md:p-10 rounded-2xl border border-emerald-200 hover:shadow-elegant transition-shadow">
                  <div className="flex items-center mb-8">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-emerald-800">Cattle (Cows)</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Body Temperature", value: '101-102.5°F (38.3-39.2°C)', icon: <Thermometer className="h-6 w-6" /> },
                      { label: "Heart Rate", value: '60-70 beats/minute', icon: <Heart className="h-6 w-6" /> },
                      { label: "Respiratory Rate", value: '12-28 breaths/minute', icon: <Activity className="h-6 w-6" /> },
                      { label: "Rumen Contractions", value: '1-3 per 2 minutes', icon: <TrendingUp className="h-6 w-6" /> },
                    ].map((vital, index) => (
                      <div key={index} className="bg-card p-5 rounded-2xl shadow-card border border-emerald-100 hover:shadow-elegant transition-shadow group">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <div className="flex items-center">
                            <div className="text-emerald-600 mr-3 group-hover:scale-110 transition-transform">{vital.icon}</div>
                            <span className="font-bold">{vital.label}</span>
                          </div>
                          <span className="text-emerald-700 font-bold">{vital.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slide-right" delay={100} className="h-full">
                <div className="h-full bg-amber-50 p-6 md:p-10 rounded-2xl border border-amber-200 hover:shadow-elegant transition-shadow">
                  <div className="flex items-center mb-8">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-amber-800">Buffalo</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Body Temperature", value: '100-102°F (37.8-38.9°C)', icon: <Thermometer className="h-6 w-6" /> },
                      { label: "Heart Rate", value: '55-65 beats/minute', icon: <Heart className="h-6 w-6" /> },
                      { label: "Respiratory Rate", value: '15-25 breaths/minute', icon: <Activity className="h-6 w-6" /> },
                      { label: "Rumen Contractions", value: '1-2 per 2 minutes', icon: <TrendingUp className="h-6 w-6" /> },
                    ].map((vital, index) => (
                      <div key={index} className="bg-card p-5 rounded-2xl shadow-card border border-amber-100 hover:shadow-elegant transition-shadow group">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <div className="flex items-center">
                            <div className="text-amber-600 mr-3 group-hover:scale-110 transition-transform">{vital.icon}</div>
                            <span className="font-bold">{vital.label}</span>
                          </div>
                          <span className="text-amber-700 font-bold">{vital.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MedicalSupport;
