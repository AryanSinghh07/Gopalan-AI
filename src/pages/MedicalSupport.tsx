import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  Calendar,
  MapPin,
  ChevronRight,
  PlayCircle,
  FileText,
  Bookmark,
  Share2
} from 'lucide-react';
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const [selectedAnimal, setSelectedAnimal] = useState<string>('cow');
  const [selectedCondition, setSelectedCondition] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const animalData: AnimalType[] = [
    {
      id: 'cow',
      name: t('medical.animals.cow.name'),

      image: 'https://www.peta.org/wp-content/uploads/2024/05/mother-and-baby-cow-in-grass.jpg',
      gradient: 'from-blue-500 to-purple-600',
      description: t('medical.animals.cow.description'),
      characteristics: t('medical.animals.cow.characteristics', { returnObjects: true }) as string[],
      lifespan: t('medical.animals.cow.lifespan'),
      weight: t('medical.animals.cow.weight'),
      conditions: [
        {
          id: 'mastitis',
          name: t('medical.conditions.mastitis.name'),
          description: t('medical.conditions.mastitis.description'),
          funFact: t('medical.conditions.mastitis.funFact'),
          symptoms: t('medical.conditions.mastitis.symptoms', { returnObjects: true }) as string[],
          causes: t('medical.conditions.mastitis.causes', { returnObjects: true }) as string[],
          treatment: t('medical.conditions.mastitis.treatment', { returnObjects: true }) as string[],
          prevention: t('medical.conditions.mastitis.prevention', { returnObjects: true }) as string[],
          severity: 'high',
          emergencyContact: true
        },
        {
          id: 'bloat',
          name: t('medical.conditions.bloat.name'),
          description: t('medical.conditions.bloat.description'),
          funFact: t('medical.conditions.bloat.funFact'),
          symptoms: t('medical.conditions.bloat.symptoms', { returnObjects: true }) as string[],
          causes: t('medical.conditions.bloat.causes', { returnObjects: true }) as string[],
          treatment: t('medical.conditions.bloat.treatment', { returnObjects: true }) as string[],
          prevention: t('medical.conditions.bloat.prevention', { returnObjects: true }) as string[],
          severity: 'high',
          emergencyContact: true
        },
        {
          id: 'milk-fever',
          name: t('medical.conditions.milkFever.name'),
          description: t('medical.conditions.milkFever.description'),
          funFact: t('medical.conditions.milkFever.funFact'),
          symptoms: t('medical.conditions.milkFever.symptoms', { returnObjects: true }) as string[],
          causes: t('medical.conditions.milkFever.causes', { returnObjects: true }) as string[],
          treatment: t('medical.conditions.milkFever.treatment', { returnObjects: true }) as string[],
          prevention: t('medical.conditions.milkFever.prevention', { returnObjects: true }) as string[],
          severity: 'high',
          emergencyContact: true
        },
        {
          id: 'lameness',
          name: t('medical.conditions.lameness.name'),
          description: t('medical.conditions.lameness.description'),
          funFact: t('medical.conditions.lameness.funFact'),
          symptoms: t('medical.conditions.lameness.symptoms', { returnObjects: true }) as string[],
          causes: t('medical.conditions.lameness.causes', { returnObjects: true }) as string[],
          treatment: t('medical.conditions.lameness.treatment', { returnObjects: true }) as string[],
          prevention: t('medical.conditions.lameness.prevention', { returnObjects: true }) as string[],
          severity: 'medium',
          emergencyContact: false
        },
        {
          id: 'diarrhea',
          name: t('medical.conditions.diarrhea.name'),
          description: t('medical.conditions.diarrhea.description'),
          funFact: t('medical.conditions.diarrhea.funFact'),
          symptoms: t('medical.conditions.diarrhea.symptoms', { returnObjects: true }) as string[],
          causes: t('medical.conditions.diarrhea.causes', { returnObjects: true }) as string[],
          treatment: t('medical.conditions.diarrhea.treatment', { returnObjects: true }) as string[],
          prevention: t('medical.conditions.diarrhea.prevention', { returnObjects: true }) as string[],
          severity: 'medium',
          emergencyContact: false
        }
      ]
    },
    {
      id: 'buffalo',
      name: t('medical.animals.buffalo.name'),

      image: 'https://agrifutures.com.au/wp-content/uploads/2017/07/DSC_11281_1500.jpg',
      gradient: 'from-green-500 to-teal-600',
      description: t('medical.animals.buffalo.description'),
      characteristics: t('medical.animals.buffalo.characteristics', { returnObjects: true }) as string[],
      lifespan: t('medical.animals.buffalo.lifespan'),
      weight: t('medical.animals.buffalo.weight'),
      conditions: [
        {
          id: 'heat-stress',
          name: t('medical.conditions.heatStress.name'),
          description: t('medical.conditions.heatStress.description'),
          funFact: t('medical.conditions.heatStress.funFact'),
          symptoms: t('medical.conditions.heatStress.symptoms', { returnObjects: true }) as string[],
          causes: t('medical.conditions.heatStress.causes', { returnObjects: true }) as string[],
          treatment: t('medical.conditions.heatStress.treatment', { returnObjects: true }) as string[],
          prevention: t('medical.conditions.heatStress.prevention', { returnObjects: true }) as string[],
          severity: 'medium',
          emergencyContact: false
        },
        {
          id: 'foot-rot',
          name: t('medical.conditions.footRot.name'),
          description: t('medical.conditions.footRot.description'),
          funFact: t('medical.conditions.footRot.funFact'),
          symptoms: t('medical.conditions.footRot.symptoms', { returnObjects: true }) as string[],
          causes: t('medical.conditions.footRot.causes', { returnObjects: true }) as string[],
          treatment: t('medical.conditions.footRot.treatment', { returnObjects: true }) as string[],
          prevention: t('medical.conditions.footRot.prevention', { returnObjects: true }) as string[],
          severity: 'high',
          emergencyContact: true
        },
        {
          id: 'respiratory-infection',
          name: t('medical.conditions.respiratoryInfection.name'),
          description: t('medical.conditions.respiratoryInfection.description'),
          funFact: t('medical.conditions.respiratoryInfection.funFact'),
          symptoms: t('medical.conditions.respiratoryInfection.symptoms', { returnObjects: true }) as string[],
          causes: t('medical.conditions.respiratoryInfection.causes', { returnObjects: true }) as string[],
          treatment: t('medical.conditions.respiratoryInfection.treatment', { returnObjects: true }) as string[],
          prevention: t('medical.conditions.respiratoryInfection.prevention', { returnObjects: true }) as string[],
          severity: 'medium',
          emergencyContact: false
        },
        {
          id: 'parasites',
          name: t('medical.conditions.parasites.name'),
          description: t('medical.conditions.parasites.description'),
          funFact: t('medical.conditions.parasites.funFact'),
          symptoms: t('medical.conditions.parasites.symptoms', { returnObjects: true }) as string[],
          causes: t('medical.conditions.parasites.causes', { returnObjects: true }) as string[],
          treatment: t('medical.conditions.parasites.treatment', { returnObjects: true }) as string[],
          prevention: t('medical.conditions.parasites.prevention', { returnObjects: true }) as string[],
          severity: 'medium',
          emergencyContact: false
        },
        {
          id: 'digestive-disorders',
          name: t('medical.conditions.digestiveDisorders.name'),
          description: t('medical.conditions.digestiveDisorders.description'),
          funFact: t('medical.conditions.digestiveDisorders.funFact'),
          symptoms: t('medical.conditions.digestiveDisorders.symptoms', { returnObjects: true }) as string[],
          causes: t('medical.conditions.digestiveDisorders.causes', { returnObjects: true }) as string[],
          treatment: t('medical.conditions.digestiveDisorders.treatment', { returnObjects: true }) as string[],
          prevention: t('medical.conditions.digestiveDisorders.prevention', { returnObjects: true }) as string[],
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
      title: t('medical.emergency.cards.assessment.title'),
      icon: <Zap className="h-6 w-6" />,
      color: "from-red-500 to-pink-500",
      steps: [
        t('medical.emergency.cards.assessment.s1'),
        t('medical.emergency.cards.assessment.s2'),
        t('medical.emergency.cards.assessment.s3'),
        t('medical.emergency.cards.assessment.s4'),
        t('medical.emergency.cards.assessment.s5')
      ]
    },
    {
      title: t('medical.emergency.cards.callVet.title'),
      icon: <Phone className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      steps: [
        t('medical.emergency.cards.callVet.s1'),
        t('medical.emergency.cards.callVet.s2'),
        t('medical.emergency.cards.callVet.s3'),
        t('medical.emergency.cards.callVet.s4'),
        t('medical.emergency.cards.callVet.s5'),
        t('medical.emergency.cards.callVet.s6'),
        t('medical.emergency.cards.callVet.s7')
      ]
    },
    {
      title: t('medical.emergency.cards.firstAid.title'),
      icon: <Shield className="h-6 w-6" />,
      color: "from-blue-500 to-indigo-500",
      steps: [
        t('medical.emergency.cards.firstAid.s1'),
        t('medical.emergency.cards.firstAid.s2'),
        t('medical.emergency.cards.firstAid.s3'),
        t('medical.emergency.cards.firstAid.s4'),
        t('medical.emergency.cards.firstAid.s5'),
        t('medical.emergency.cards.firstAid.s6')
      ]
    }
  ];

  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "50,000+", label: t('medical.stats.helped'), color: "text-blue-600" },
    { icon: <Award className="h-8 w-8" />, value: "99%", label: t('medical.stats.success'), color: "text-green-600" },
    { icon: <Clock className="h-8 w-8" />, value: "24/7", label: t('medical.stats.support'), color: "text-purple-600" },
    { icon: <Star className="h-8 w-8" />, value: "4.9", label: t('medical.stats.rating'), color: "text-yellow-600" },
  ];

  const quickTips = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Daily Observation",
      tip: "Monitor your animals daily for changes in behavior, appetite, or physical appearance.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: "Temperature Check",
      tip: "Learn to take your animal's temperature - it's the most important vital sign.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Vet Contact Ready",
      tip: "Keep your veterinarian's contact information easily accessible at all times.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Record Keeping",
      tip: "Maintain detailed health records for each animal including treatments and vaccinations.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-100 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-100 border-green-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
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
    <div className="min-h-screen">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <div className="relative pt-20 pb-20 bg-gradient-to-br from-green-800 via-emerald-700 to-green-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="flex justify-center items-center mb-8">
              <div className="bg-white bg-opacity-20 p-6 rounded-full backdrop-blur-sm animate-pulse">
                <Heart className="h-16 w-16 text-red-300" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              {t('medical.hero.title.a')}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"> {t('medical.hero.title.b')}</span>
            </h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              {t('medical.hero.subtitle')}
            </p>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="group bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30 hover:bg-opacity-25 transition-all duration-300 transform hover:scale-105">
                  <div className={`${stat.color} mb-4 flex justify-center group-hover:animate-bounce`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-200 text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-6">
          {/* Enhanced Animal Selection */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 mb-16 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                <Stethoscope className="h-10 w-10 mr-4 text-blue-600" />
                {t('medical.select.title')}
              </h2>
              <p className="text-xl text-gray-600">{t('medical.select.subtitle')}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {animalData.map((animal) => (
                <div
                  key={animal.id}
                  onClick={() => {
                    setSelectedAnimal(animal.id);
                    setSelectedCondition('');
                    setSearchTerm('');
                  }}
                  className={`group relative cursor-pointer rounded-3xl transition-all duration-500 transform hover:scale-105 ${
                    selectedAnimal === animal.id
                      ? 'ring-4 ring-blue-500 ring-opacity-50 shadow-2xl'
                      : 'shadow-xl hover:shadow-2xl'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${animal.gradient} rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  
                  <div className="relative bg-white rounded-3xl p-8 border border-gray-200">
                    {/* Animal Image */}
                    <div className="relative mb-6 rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src={animal.image} 
                        alt={animal.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {selectedAnimal === animal.id && (
                        <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full p-2">
                          <CheckCircle className="h-6 w-6" />
                        </div>
                      )}
                    </div>

                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-gray-800 mb-3">{animal.name}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{animal.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="font-semibold text-gray-800">{t('medical.select.lifespan')}</div>
                          <div className="text-gray-600">{animal.lifespan}</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="font-semibold text-gray-800">{t('medical.select.weight')}</div>
                          <div className="text-gray-600">{animal.weight}</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-2">{t('medical.select.keyChars')}</h4>
                        <div className="flex flex-wrap gap-2">
                          {animal.characteristics.map((char, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                              {char}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <BookOpen className="h-5 w-5" />
                          <span>{t('medical.select.conditionsCovered', { count: animal.conditions.length })}</span>
                        </div>
                        <span className={`px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r ${animal.gradient} shadow-lg group-hover:shadow-xl transition-shadow flex items-center space-x-2`}>
                          <span>{t('medical.select.choose', { name: animal.name })}</span>
                          <ChevronRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Tips Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('medical.tips.title')}</h2>
              <p className="text-gray-600">{t('medical.tips.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickTips.map((tip, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className={`bg-gradient-to-r ${tip.color} p-3 rounded-xl mb-4 inline-block group-hover:scale-110 transition-transform`}>
                    <div className="text-white">{tip.icon}</div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tip.tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Enhanced Conditions List */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 sticky top-8">
                <div className="flex items-center mb-8">
                  <div className={`bg-gradient-to-r ${currentAnimal.gradient} p-4 rounded-xl mr-4`}>
                    <BookOpen className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{t('medical.conditionsList.title')}</h2>
                    <p className="text-gray-600">{t('medical.conditionsList.for', { name: currentAnimal.name })}</p>
                  </div>
                </div>
                
                {/* Enhanced Search */}
                <div className="relative mb-8">
                  <Search className="h-5 w-5 absolute left-4 top-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t('medical.conditionsList.search') as string}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-colors text-gray-700 placeholder-gray-500"
                  />
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {filteredConditions.map((condition) => (
                    <button
                      key={condition.id}
                      onClick={() => setSelectedCondition(condition.id)}
                      className={`w-full text-left p-5 border-2 rounded-xl transition-all duration-300 group ${
                        selectedCondition === condition.id
                          ? 'border-blue-500 bg-blue-50 shadow-lg transform scale-105'
                          : 'border-gray-100 hover:border-blue-300 hover:bg-blue-25 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-gray-800 group-hover:text-blue-800 transition-colors text-lg">
                          {condition.name}
                        </h3>
                        <div className={`px-3 py-1 rounded-full text-xs flex items-center space-x-1 border-2 ${getSeverityColor(condition.severity)}`}>
                          {getSeverityIcon(condition.severity)}
                          <span className="capitalize font-bold">{condition.severity}</span>
                        </div>
                      </div>
                      {condition.emergencyContact && (
                        <div className="flex items-center mb-2">
                          <Phone className="h-4 w-4 text-red-500 mr-2" />
                          <span className="text-sm text-red-600 font-semibold">{t('medical.conditionsList.emergency')}</span>
                        </div>
                      )}
                      <p className="text-gray-600 text-sm line-clamp-2">{condition.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Condition Details */}
            <div className="lg:col-span-2">
              {currentCondition ? (
                <div className="space-y-6">
                  {/* Main Condition Card */}
                  <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl mr-5">
                          <Activity className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-4xl font-bold text-gray-800 mb-1">{currentCondition.name}</h2>
                          <p className="text-gray-600 text-lg">{currentCondition.description}</p>
                        </div>
                      </div>
                      <div className={`px-5 py-3 rounded-xl flex items-center space-x-3 border-2 ${getSeverityColor(currentCondition.severity)}`}>
                        {getSeverityIcon(currentCondition.severity)}
                          <span className="text-base font-bold capitalize">{currentCondition.severity} {t('medical.detail.risk')}</span>
                      </div>
                    </div>

                    {/* Fun Fact */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 p-6 rounded-xl mb-8">
                      <div className="flex items-start">
                        <div className="bg-purple-500 p-2 rounded-lg mr-4 flex-shrink-0">
                          <Star className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-purple-800 mb-1">{t('medical.detail.didYouKnow')}</h4>
                          <p className="text-purple-700">{currentCondition.funFact}</p>
                        </div>
                      </div>
                    </div>

                    {currentCondition.emergencyContact && (
                      <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 p-6 rounded-xl mb-8">
                        <div className="flex items-center text-red-800">
                          <div className="bg-red-500 p-3 rounded-lg mr-4">
                            <Phone className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <span className="font-bold text-xl">⚠️ {t('medical.detail.emergencyTitle')}</span>
                            <p className="text-red-700 mt-1">{t('medical.detail.emergencyDesc')}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        <Download className="h-5 w-5 mr-2" />
                        {t('medical.detail.download')}
                      </Button>
                      <Button variant="outline" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        <Share2 className="h-5 w-5 mr-2" />
                        {t('medical.detail.share')}
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Enhanced Symptoms */}
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold mb-6 flex items-center text-orange-800">
                          <Eye className="h-7 w-7 mr-3 text-orange-600" />
                          {t('medical.detail.sections.symptoms')}
                        </h3>
                        <ul className="space-y-4">
                          {currentCondition.symptoms.map((symptom, index) => (
                            <li key={index} className="flex items-start group">
                              <div className="h-3 w-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                              <span className="text-gray-700 leading-relaxed">{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Enhanced Causes */}
                      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold mb-6 flex items-center text-yellow-800">
                          <AlertTriangle className="h-7 w-7 mr-3 text-yellow-600" />
                          {t('medical.detail.sections.causes')}
                        </h3>
                        <ul className="space-y-4">
                          {currentCondition.causes.map((cause, index) => (
                            <li key={index} className="flex items-start group">
                              <div className="h-3 w-3 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                              <span className="text-gray-700 leading-relaxed">{cause}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Enhanced Treatment */}
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold mb-6 flex items-center text-blue-800">
                          <Pill className="h-7 w-7 mr-3 text-blue-600" />
                          {t('medical.detail.sections.treatment')}
                        </h3>
                        <ul className="space-y-4">
                          {currentCondition.treatment.map((treatment, index) => (
                            <li key={index} className="flex items-start group">
                              <div className="h-3 w-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                              <span className="text-gray-700 leading-relaxed">{treatment}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Enhanced Prevention */}
                      <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold mb-6 flex items-center text-green-800">
                          <Shield className="h-7 w-7 mr-3 text-green-600" />
                          {t('medical.detail.sections.prevention')}
                        </h3>
                        <ul className="space-y-4">
                          {currentCondition.prevention.map((prevention, index) => (
                            <li key={index} className="flex items-start group">
                              <div className="h-3 w-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                              <span className="text-gray-700 leading-relaxed">{prevention}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-xl p-16 text-center border border-gray-100">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-12 rounded-3xl mb-8 inline-block">
                    <Stethoscope className="h-24 w-24 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{t('medical.detail.empty.title')}</h3>
                  <p className="text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">{t('medical.detail.empty.desc')}</p>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Emergency Procedures */}
          <div className="mt-20 bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <div className="text-center mb-16">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 rounded-2xl inline-block mb-6">
                <AlertTriangle className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('medical.emergency.title')}</h2>
              <p className="text-xl text-gray-600">{t('medical.emergency.subtitle')}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {emergencyProcedures.map((procedure, index) => (
                <div key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 h-full">
                    <div className={`bg-gradient-to-r ${procedure.color} p-4 rounded-2xl mb-6 inline-block group-hover:scale-110 transition-transform`}>
                      <div className="text-white">{procedure.icon}</div>
                    </div>
                    <h3 className="font-bold text-2xl mb-6 text-gray-800">{procedure.title}</h3>
                    <ol className="space-y-4">
                      {procedure.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start group/item">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full mr-4 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            {stepIndex + 1}
                          </span>
                          <span className="text-gray-700 leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Vital Signs Reference */}
          <div className="mt-20 bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <div className="text-center mb-16">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 rounded-2xl inline-block mb-6">
                <Thermometer className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('medical.vitals.title')}</h2>
              <p className="text-xl text-gray-600">{t('medical.vitals.subtitle')}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl border border-blue-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-8">
                  <h3 className="text-3xl font-bold text-blue-800">{t('medical.vitals.cattle')}</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { label: t('medical.vitals.labels.temp'), value: '101-102.5°F (38.3-39.2°C)', icon: <Thermometer className="h-6 w-6" /> },
                    { label: t('medical.vitals.labels.heart'), value: '60-70 beats/minute', icon: <Heart className="h-6 w-6" /> },
                    { label: t('medical.vitals.labels.resp'), value: '12-28 breaths/minute', icon: <Activity className="h-6 w-6" /> },
                    { label: t('medical.vitals.labels.rumen'), value: '1-3 per 2 minutes', icon: <TrendingUp className="h-6 w-6" /> },
                  ].map((vital, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow group">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="text-blue-600 mr-4 group-hover:scale-110 transition-transform">{vital.icon}</div>
                          <span className="font-bold text-gray-800 text-lg">{vital.label}</span>
                        </div>
                        <span className="text-blue-700 font-bold text-lg">{vital.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-10 rounded-3xl border border-green-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-8">
                  <h3 className="text-3xl font-bold text-green-800">{t('medical.vitals.buffalo')}</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { label: t('medical.vitals.labels.temp'), value: '100-102°F (37.8-38.9°C)', icon: <Thermometer className="h-6 w-6" /> },
                    { label: t('medical.vitals.labels.heart'), value: '55-65 beats/minute', icon: <Heart className="h-6 w-6" /> },
                    { label: t('medical.vitals.labels.resp'), value: '15-25 breaths/minute', icon: <Activity className="h-6 w-6" /> },
                    { label: t('medical.vitals.labels.rumen'), value: '1-2 per 2 minutes', icon: <TrendingUp className="h-6 w-6" /> },
                  ].map((vital, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 hover:shadow-md transition-shadow group">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="text-green-600 mr-4 group-hover:scale-110 transition-transform">{vital.icon}</div>
                          <span className="font-bold text-gray-800 text-lg">{vital.label}</span>
                        </div>
                        <span className="text-green-700 font-bold text-lg">{vital.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MedicalSupport;
