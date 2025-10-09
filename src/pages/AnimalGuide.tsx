import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";

// Import breed images from AnimalImg folder
import girImage from "@/assets/AnimalImg/Gir.jpg";
import sahiwalImage from "@/assets/AnimalImg/Sahiwal.jpg";
import murrahImage from "@/assets/AnimalImg/murrah buffalo.jpg";
import niliRaviImage from "@/assets/AnimalImg/nili-ravi buffalo.jpg";
import surtiImage from "@/assets/AnimalImg/surti buffalo.jpg";
import jafarabadiImage from "@/assets/AnimalImg/jafarabadi buffalo.jpg";
import cattleOverviewImage from "@/assets/AnimalImg/Cattle (Cows).jpg";
import buffaloOverviewImage from "@/assets/AnimalImg/Water Buffalo.jpg";
import ongoleImage from "@/assets/AnimalImg/Ongole.jpg";
import hallikarImage from "@/assets/AnimalImg/Hallikar.jpg";
import malnadImage from "@/assets/AnimalImg/malnad.jpg";
import rathiImage from "@/assets/AnimalImg/Rathi.jpg";
import redsindhiImage from "@/assets/AnimalImg/redsindhi.jpg";
import kankrejImage from "@/assets/AnimalImg/kankrej.jpg";
import mehsanaImage from "@/assets/AnimalImg/Mehsana.jpg";
import bhadawariImage from "@/assets/AnimalImg/bhadawari.png";
import todaImage from "@/assets/AnimalImg/toda.jpg";
import nagpuriImage from "@/assets/AnimalImg/nagpuri.jpg";

const AnimalGuide = () => {
  const { t } = useTranslation();
  const cowBreeds = [
    {
      name: t('animalGuide.breeds.cow.ongole.name'),
      origin: t('animalGuide.breeds.cow.ongole.origin'),
      characteristics: t('animalGuide.breeds.cow.ongole.characteristics'),
      avgWeight: "600-700 kg",
      milkYield: "20-30 liters/day",
      lactationYield: "4,000-12,000 kg",
      fatContent: "3.5-4.0%",
      climate: "Cold to moderate",
      image: ongoleImage,
      specialty: t('animalGuide.breeds.cow.ongole.specialty')
    },
    {
      name: t('animalGuide.breeds.cow.hallikar.name'),
      origin: t('animalGuide.breeds.cow.hallikar.origin'), 
      characteristics: t('animalGuide.breeds.cow.hallikar.characteristics'),
      avgWeight: "350-450 kg",
      milkYield: "15-20 liters/day",
      lactationYield: "4,000-6,000 kg",
      fatContent: "4.8-5.2%",
      climate: "Adaptable to various climates",
      image: hallikarImage,
      specialty: t('animalGuide.breeds.cow.hallikar.specialty')
    },
    {
      name: t('animalGuide.breeds.cow.gir.name'),
      origin: t('animalGuide.breeds.cow.gir.origin'),
      characteristics: t('animalGuide.breeds.cow.gir.characteristics'),
      avgWeight: "300-400 kg", 
      milkYield: "10-15 liters/day",
      lactationYield: "1,200-3,000 kg",
      fatContent: "4.5-5.0%",
      climate: "Hot and dry",
      image: girImage,
      specialty: t('animalGuide.breeds.cow.gir.specialty')
    },
    {
      name: t('animalGuide.breeds.cow.sahiwal.name'),
      origin: t('animalGuide.breeds.cow.sahiwal.origin'),
      characteristics: t('animalGuide.breeds.cow.sahiwal.characteristics'),
      avgWeight: "400-500 kg",
      milkYield: "12-16 liters/day",
      lactationYield: "2,000-3,500 kg",
      fatContent: "4.2-4.8%",
      climate: "Hot and humid",
      image: sahiwalImage,
      specialty: t('animalGuide.breeds.cow.sahiwal.specialty')
    },
    {
      name: t('animalGuide.breeds.cow.malnad.name'),
      origin: t('animalGuide.breeds.cow.malnad.origin'),
      characteristics: t('animalGuide.breeds.cow.malnad.characteristics'),
      avgWeight: "450-500 kg",
      milkYield: "18-22 liters/day",
      lactationYield: "4,500-6,000 kg",
      fatContent: "4.5-5.0%",
      climate: "Moderate",
      image: malnadImage, // Placeholder - replace with actual image
      specialty: t('animalGuide.breeds.cow.malnad.specialty')
    },
    {
      name: t('animalGuide.breeds.cow.rathi.name'),
      origin: t('animalGuide.breeds.cow.rathi.origin'),
      characteristics: t('animalGuide.breeds.cow.rathi.characteristics'),
      avgWeight: "600-700 kg",
      milkYield: "20-25 liters/day",
      lactationYield: "6,000-8,000 kg",
      fatContent: "4.0-4.2%",
      climate: "Mountainous regions",
      image: rathiImage, // Placeholder - replace with actual image
      specialty: t('animalGuide.breeds.cow.rathi.specialty')
    },
    {
      name: t('animalGuide.breeds.cow.redsindhi.name'),
      origin: t('animalGuide.breeds.cow.redsindhi.origin'),
      characteristics: t('animalGuide.breeds.cow.redsindhi.characteristics'),
      avgWeight: "300-400 kg",
      milkYield: "8-12 liters/day",
      lactationYield: "1,500-2,500 kg",
      fatContent: "4.5-5.2%",
      climate: "Arid and semi-arid",
      image: redsindhiImage, // Placeholder - replace with actual image
      specialty: t('animalGuide.breeds.cow.redsindhi.specialty')
    },
    {
      name: t('animalGuide.breeds.cow.kankrej.name'),
      origin: t('animalGuide.breeds.cow.kankrej.origin'),
      characteristics: t('animalGuide.breeds.cow.kankrej.characteristics'),
      avgWeight: "400-500 kg",
      milkYield: "8-10 liters/day",
      lactationYield: "1,500-2,000 kg",
      fatContent: "4.0-4.5%",
      climate: "Arid regions",
      image: kankrejImage, // Placeholder - replace with actual image
      specialty: t('animalGuide.breeds.cow.kankrej.specialty')
    }
  ];

  const buffaloBreeds = [
    {
      name: t('animalGuide.breeds.buffalo.murrah.name'),
      origin: t('animalGuide.breeds.buffalo.murrah.origin'),
      characteristics: t('animalGuide.breeds.buffalo.murrah.characteristics'),
      avgWeight: "450-650 kg",
      milkYield: "15-20 liters/day",
      lactationYield: "2,000-3,500 kg",
      fatContent: "7-8%",
      climate: "Sub-tropical",
      image: murrahImage,
      specialty: t('animalGuide.breeds.buffalo.murrah.specialty')
    },
    {
      name: t('animalGuide.breeds.buffalo.niliravi.name'),
      origin: t('animalGuide.breeds.buffalo.niliravi.origin'),
      characteristics: t('animalGuide.breeds.buffalo.niliravi.characteristics'),
      avgWeight: "450-600 kg",
      milkYield: "12-18 liters/day",
      lactationYield: "1,800-2,500 kg",
      fatContent: "6-8%",
      climate: "Semi-arid",
      image: niliRaviImage,
      specialty: t('animalGuide.breeds.buffalo.niliravi.specialty')
    },
    {
      name: t('animalGuide.breeds.buffalo.surti.name'),
      origin: t('animalGuide.breeds.buffalo.surti.origin'),
      characteristics: t('animalGuide.breeds.buffalo.surti.characteristics'),
      avgWeight: "350-450 kg",
      milkYield: "8-12 liters/day",
      lactationYield: "1,000-1,500 kg",
      fatContent: "6-8%",
      climate: "Semi-arid",
      image: surtiImage,
      specialty: t('animalGuide.breeds.buffalo.surti.specialty')
    },
    {
      name: t('animalGuide.breeds.buffalo.jafarabadi.name'),
      origin: t('animalGuide.breeds.buffalo.jafarabadi.origin'),
      characteristics: t('animalGuide.breeds.buffalo.jafarabadi.characteristics'),
      avgWeight: "500-800 kg",
      milkYield: "10-15 liters/day",
      lactationYield: "1,500-2,000 kg",
      fatContent: "7-9%",
      climate: "Coastal regions",
      image: jafarabadiImage,
      specialty: t('animalGuide.breeds.buffalo.jafarabadi.specialty')
    },
    {
      name: t('animalGuide.breeds.buffalo.mehsana.name'),
      origin: t('animalGuide.breeds.buffalo.mehsana.origin'),
      characteristics: t('animalGuide.breeds.buffalo.mehsana.characteristics'),
      avgWeight: "400-550 kg",
      milkYield: "12-16 liters/day",
      lactationYield: "1,500-2,000 kg",
      fatContent: "6-7%",
      climate: "Semi-arid",
      image: mehsanaImage, // Placeholder - replace with actual image
      specialty: t('animalGuide.breeds.buffalo.mehsana.specialty')
    },
    {
      name: t('animalGuide.breeds.buffalo.bhadawari.name'),
      origin: t('animalGuide.breeds.buffalo.bhadawari.origin'),
      characteristics: t('animalGuide.breeds.buffalo.bhadawari.characteristics'),
      avgWeight: "350-450 kg",
      milkYield: "6-10 liters/day",
      lactationYield: "800-1,200 kg",
      fatContent: "8-12%",
      climate: "Sub-tropical",
      image: bhadawariImage, // Placeholder - replace with actual image
      specialty: t('animalGuide.breeds.buffalo.bhadawari.specialty')
    },
    {
      name: t('animalGuide.breeds.buffalo.toda.name'),
      origin: t('animalGuide.breeds.buffalo.toda.origin'),
      characteristics: t('animalGuide.breeds.buffalo.toda.characteristics'),
      avgWeight: "300-400 kg",
      milkYield: "4-8 liters/day",
      lactationYield: "400-600 kg",
      fatContent: "8%",
      climate: "Hilly regions",
      image: todaImage, // Placeholder - replace with actual image
      specialty: t('animalGuide.breeds.buffalo.toda.specialty')
    },
    {
      name: t('animalGuide.breeds.buffalo.nagpuri.name'),
      origin: t('animalGuide.breeds.buffalo.nagpuri.origin'),
      characteristics: t('animalGuide.breeds.buffalo.nagpuri.characteristics'),
      avgWeight: "400-500 kg",
      milkYield: "8-12 liters/day",
      lactationYield: "700-1,200 kg",
      fatContent: "7-8%",
      climate: "Semi-arid",
      image: nagpuriImage, // Placeholder - replace with actual image
      specialty: t('animalGuide.breeds.buffalo.nagpuri.specialty')
    }
  ];

  const physicalParams = [
    { parameter: "Body Length", cow: "150-180 cm", buffalo: "140-170 cm" },
    { parameter: "Height at Withers", cow: "120-140 cm", buffalo: "130-150 cm" },
    { parameter: "Heart Girth", cow: "180-220 cm", buffalo: "190-240 cm" },
    { parameter: "Body Weight", cow: "350-700 kg", buffalo: "400-800 kg" },
    { parameter: "Lactation Period", cow: "280-305 days", buffalo: "270-300 days" },
    { parameter: "Gestation Period", cow: "280-285 days", buffalo: "300-320 days" },
    { parameter: "Age at First Calving", cow: "24-30 months", buffalo: "36-48 months" },
    { parameter: "Inter-calving Period", cow: "12-14 months", buffalo: "14-18 months" }
  ];

  const nutritionalData = [
    { nutrient: t('animalGuide.nutritionalData.fatContent'), cow: "3.5-4.5%", buffalo: "6-8%" },
    { nutrient: t('animalGuide.nutritionalData.protein'), cow: "3.2-3.8%", buffalo: "4.2-4.8%" },
    { nutrient: t('animalGuide.nutritionalData.lactose'), cow: "4.6-4.9%", buffalo: "4.8-5.2%" },
    { nutrient: t('animalGuide.nutritionalData.snf'), cow: "8.5-9.0%", buffalo: "9.5-10.5%" },
    { nutrient: t('animalGuide.nutritionalData.totalSolids'), cow: "12.0-13.5%", buffalo: "15.5-18.5%" },
    { nutrient: t('animalGuide.nutritionalData.calcium'), cow: "120 mg/100ml", buffalo: "169 mg/100ml" },
    { nutrient: t('animalGuide.nutritionalData.phosphorus'), cow: "90 mg/100ml", buffalo: "117 mg/100ml" }
  ];

  const managementTips = [
    {
      category: t('animalGuide.managementTips.feeding.category'),
      icon: "🌾",
      tips: t('animalGuide.managementTips.feeding.tips', { returnObjects: true }) as string[]
    },
    {
      category: t('animalGuide.managementTips.housing.category'),
      icon: "🏠",
      tips: t('animalGuide.managementTips.housing.tips', { returnObjects: true }) as string[]
    },
    {
      category: t('animalGuide.managementTips.healthCare.category'),
      icon: "🏥",
      tips: t('animalGuide.managementTips.healthCare.tips', { returnObjects: true }) as string[]
    },
    {
      category: t('animalGuide.managementTips.breeding.category'),
      icon: "🐄",
      tips: t('animalGuide.managementTips.breeding.tips', { returnObjects: true }) as string[]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 font-inter">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-green-900/90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-200 text-sm font-medium mb-4">
              {t('animalGuide.hero.badge')}
              </span>
            </div>
            <h1 className="font-playfair font-bold text-5xl md:text-7xl mb-8 bg-gradient-to-r from-emerald-200 via-green-100 to-teal-200 bg-clip-text text-transparent leading-tight">
              {t('animalGuide.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-4xl mx-auto">
              {t('animalGuide.hero.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-emerald-300 rounded-full"></span>
                <span>{t('animalGuide.hero.pills.cattle')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                <span>{t('animalGuide.hero.pills.buffalo')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-teal-300 rounded-full"></span>
                <span>{t('animalGuide.hero.pills.tips')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Overview Cards */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="group border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-emerald-50">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={cattleOverviewImage} 
                  alt="Cattle overview"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-emerald-500/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-white font-semibold text-lg">{t('animalGuide.cards.cattle.badge')}</span>
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-playfair text-emerald-800 flex items-center gap-3">
                  {t('animalGuide.cards.cattle.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">{t('animalGuide.cards.cattle.desc')}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50 rounded-lg p-3">
                    <div className="font-semibold text-emerald-800">{t('animalGuide.cards.common.milkProd')}</div>
                    <div className="text-sm text-gray-600">4-30 L/day</div>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-3">
                    <div className="font-semibold text-emerald-800">{t('animalGuide.cards.common.weightRange')}</div>
                    <div className="text-sm text-gray-600">300-700 kg</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">{t('animalGuide.cards.cattle.tags.dairy')}</Badge>
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">{t('animalGuide.cards.cattle.tags.meat')}</Badge>
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">{t('animalGuide.cards.cattle.tags.draft')}</Badge>
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">{t('animalGuide.cards.cattle.tags.leather')}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-teal-50">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={buffaloOverviewImage} 
                  alt="Buffalo overview"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-teal-500/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-white font-semibold text-lg">{t('animalGuide.cards.buffalo.badge')}</span>
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-playfair text-teal-800 flex items-center gap-3">
                  {t('animalGuide.cards.buffalo.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">{t('animalGuide.cards.buffalo.desc')}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-teal-50 rounded-lg p-3">
                    <div className="font-semibold text-teal-800">{t('animalGuide.cards.common.milkProd')}</div>
                    <div className="text-sm text-gray-600">6-20 L/day</div>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-3">
                    <div className="font-semibold text-teal-800">{t('animalGuide.cards.common.weightRange')}</div>
                    <div className="text-sm text-gray-600">350-800 kg</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">{t('animalGuide.cards.buffalo.tags.richMilk')}</Badge>
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">{t('animalGuide.cards.buffalo.tags.heat')}</Badge>
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">{t('animalGuide.cards.buffalo.tags.draft')}</Badge>
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">{t('animalGuide.cards.buffalo.tags.cheese')}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Breed Information with Tabs */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6 text-gray-800">{t('animalGuide.tabs.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('animalGuide.tabs.subtitle')}
            </p>
          </div>
          
          <Tabs defaultValue="cattle" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-12">
              <TabsTrigger value="cattle" className="text-lg font-semibold">{t('animalGuide.tabs.cattle')}</TabsTrigger>
              <TabsTrigger value="buffalo" className="text-lg font-semibold">{t('animalGuide.tabs.buffalo')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="cattle" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {cowBreeds.map((breed) => (
                  <Card key={breed.name} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-gradient-to-br from-white to-emerald-50">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={breed.image} 
                        alt={breed.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-emerald-500/90 text-white border-0">{breed.origin}</Badge>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                          <span className="text-sm font-semibold text-gray-800">{breed.specialty}</span>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-inter text-emerald-800">{breed.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-600 leading-relaxed">{breed.characteristics}</p>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="bg-emerald-50 rounded-lg p-2">
                          <div className="text-gray-500">{t('animalGuide.breedLabels.weight')}</div>
                          <div className="font-semibold text-emerald-800">{breed.avgWeight}</div>
                        </div>
                        <div className="bg-emerald-50 rounded-lg p-2">
                          <div className="text-gray-500">{t('animalGuide.breedLabels.dailyYield')}</div>
                          <div className="font-semibold text-emerald-800">{breed.milkYield}</div>
                        </div>
                        <div className="bg-emerald-50 rounded-lg p-2">
                          <div className="text-gray-500">{t('animalGuide.breedLabels.fatContent')}</div>
                          <div className="font-semibold text-emerald-800">{breed.fatContent}</div>
                        </div>
                        <div className="bg-emerald-50 rounded-lg p-2">
                          <div className="text-gray-500">{t('animalGuide.breedLabels.climate')}</div>
                          <div className="font-semibold text-emerald-800 truncate">{breed.climate}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="buffalo" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {buffaloBreeds.map((breed) => (
                  <Card key={breed.name} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-gradient-to-br from-white to-teal-50">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={breed.image} 
                        alt={breed.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-teal-500/90 text-white border-0">{breed.origin}</Badge>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                          <span className="text-sm font-semibold text-gray-800">{breed.specialty}</span>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-inter text-teal-800">{breed.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-600 leading-relaxed">{breed.characteristics}</p>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="bg-teal-50 rounded-lg p-2">
                          <div className="text-gray-500">{t('animalGuide.breedLabels.weight')}</div>
                          <div className="font-semibold text-teal-800">{breed.avgWeight}</div>
                        </div>
                        <div className="bg-teal-50 rounded-lg p-2">
                          <div className="text-gray-500">{t('animalGuide.breedLabels.dailyYield')}</div>
                          <div className="font-semibold text-teal-800">{breed.milkYield}</div>
                        </div>
                        <div className="bg-teal-50 rounded-lg p-2">
                          <div className="text-gray-500">{t('animalGuide.breedLabels.fatContent')}</div>
                          <div className="font-semibold text-teal-800">{breed.fatContent}</div>
                        </div>
                        <div className="bg-teal-50 rounded-lg p-2">
                          <div className="text-gray-500">{t('animalGuide.breedLabels.climate')}</div>
                          <div className="font-semibold text-teal-800 truncate">{breed.climate}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enhanced Physical Parameters */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6 text-gray-800">{t('animalGuide.physical.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('animalGuide.physical.subtitle')}
            </p>
          </div>
          
          <Card className="max-w-6xl mx-auto shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
              <CardTitle className="text-2xl font-inter text-center">{t('animalGuide.physical.cardTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="text-left py-4 px-6 font-bold text-gray-800 text-lg">{t('animalGuide.physical.table.parameter')}</th>
                      <th className="text-center py-4 px-6 font-bold text-emerald-700 text-lg">{t('animalGuide.physical.table.cattle')}</th>
                      <th className="text-center py-4 px-6 font-bold text-teal-700 text-lg">{t('animalGuide.physical.table.buffalo')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {physicalParams.map((param, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50 transition-colors duration-200">
                        <td className="py-4 px-6 font-semibold text-gray-800">{param.parameter}</td>
                        <td className="py-4 px-6 text-center bg-emerald-50 font-medium text-emerald-800">{param.cow}</td>
                        <td className="py-4 px-6 text-center bg-teal-50 font-medium text-teal-800">{param.buffalo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Nutritional Comparison */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6 text-gray-800">{t('animalGuide.milk.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('animalGuide.milk.subtitle')}
            </p>
          </div>
          
          <Card className="max-w-6xl mx-auto shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
              <CardTitle className="text-2xl font-inter text-center">{t('animalGuide.milk.cardTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="text-left py-4 px-6 font-bold text-gray-800 text-lg">{t('animalGuide.milk.table.component')}</th>
                      <th className="text-center py-4 px-6 font-bold text-emerald-700 text-lg">{t('animalGuide.milk.table.cow')}</th>
                      <th className="text-center py-4 px-6 font-bold text-teal-700 text-lg">{t('animalGuide.milk.table.buffalo')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nutritionalData.map((nutrient, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50 transition-colors duration-200">
                        <td className="py-4 px-6 font-semibold text-gray-800">{nutrient.nutrient}</td>
                        <td className="py-4 px-6 text-center bg-emerald-50 font-medium text-emerald-800">{nutrient.cow}</td>
                        <td className="py-4 px-6 text-center bg-teal-50 font-medium text-teal-800">{nutrient.buffalo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="m-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-400">
                <h4 className="font-bold text-lg text-blue-800 mb-3">🔍 {t('animalGuide.milk.insights.title')}</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2">{t('animalGuide.milk.insights.buffalo')}</p>
                  </div>
                  <div>
                    <p>{t('animalGuide.milk.insights.cow')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Care & Management */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6 text-gray-800">{t('animalGuide.care.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('animalGuide.care.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementTips.map((section) => (
              <Card key={section.category} className="hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 group">
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <CardTitle className="text-2xl font-playfair text-gray-800">
                    {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-3">
                    {section.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnimalGuide;
