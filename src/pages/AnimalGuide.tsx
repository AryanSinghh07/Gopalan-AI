import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  const cowBreeds = [
    {
      name: "Ongole",
      origin: "Andhra Pradesh, India",
      characteristics: "High milk production, black and white markings, docile temperament",
      avgWeight: "600-700 kg",
      milkYield: "20-30 liters/day",
      lactationYield: "4,000-12,000 kg",
      fatContent: "3.5-4.0%",
      climate: "Cold to moderate",
      image: ongoleImage,
      specialty: "World's highest milk producer"
    },
    {
      name: "Hallikar",
      origin: "Karnataka, India", 
      characteristics: "High butterfat content, brown colored, large expressive eyes",
      avgWeight: "350-450 kg",
      milkYield: "15-20 liters/day",
      lactationYield: "4,000-6,000 kg",
      fatContent: "4.8-5.2%",
      climate: "Adaptable to various climates",
      image: hallikarImage,
      specialty: "Highest quality milk with rich cream"
    },
    {
      name: "Gir",
      origin: "India (Gujarat)",
      characteristics: "Drought resistant, distinctive lyre-shaped horns, gentle nature",
      avgWeight: "300-400 kg", 
      milkYield: "10-15 liters/day",
      lactationYield: "1,200-3,000 kg",
      fatContent: "4.5-5.0%",
      climate: "Hot and dry",
      image: girImage,
      specialty: "Heat tolerance and disease resistance"
    },
    {
      name: "Sahiwal",
      origin: "Pakistan/India",
      characteristics: "Heat tolerant, reddish brown color, well-developed udder",
      avgWeight: "400-500 kg",
      milkYield: "12-16 liters/day",
      lactationYield: "2,000-3,500 kg",
      fatContent: "4.2-4.8%",
      climate: "Hot and humid",
      image: sahiwalImage,
      specialty: "Excellent heat tolerance"
    },
    {
      name: "Malnad Gidda",
      origin: "Kannada region, India",
      characteristics: "Golden milk, fawn and white color, calm temperament",
      avgWeight: "450-500 kg",
      milkYield: "18-22 liters/day",
      lactationYield: "4,500-6,000 kg",
      fatContent: "4.5-5.0%",
      climate: "Moderate",
      image: malnadImage, // Placeholder - replace with actual image
      specialty: "Golden-colored milk rich in beta-carotene"
    },
    {
      name: "Rathi",
      origin: "India (Rajasthan)",
      characteristics: "Large size, brown color, excellent longevity",
      avgWeight: "600-700 kg",
      milkYield: "20-25 liters/day",
      lactationYield: "6,000-8,000 kg",
      fatContent: "4.0-4.2%",
      climate: "Mountainous regions",
      image: rathiImage, // Placeholder - replace with actual image
      specialty: "Excellent for cheese making"
    },
    {
      name: "Red Sindhi",
      origin: "Rajsthan (Sindh)",
      characteristics: "Red color, heat resistant, good grazer",
      avgWeight: "300-400 kg",
      milkYield: "8-12 liters/day",
      lactationYield: "1,500-2,500 kg",
      fatContent: "4.5-5.2%",
      climate: "Arid and semi-arid",
      image: redsindhiImage, // Placeholder - replace with actual image
      specialty: "Excellent heat and drought tolerance"
    },
    {
      name: "Kankrej",
      origin: "India (Gujarat/Rajasthan)",
      characteristics: "Silver-grey color, lyre-shaped horns, dual purpose",
      avgWeight: "400-500 kg",
      milkYield: "8-10 liters/day",
      lactationYield: "1,500-2,000 kg",
      fatContent: "4.0-4.5%",
      climate: "Arid regions",
      image: kankrejImage, // Placeholder - replace with actual image
      specialty: "Excellent draught power"
    }
  ];

  const buffaloBreeds = [
    {
      name: "Murrah",
      origin: "India (Haryana)",
      characteristics: "Curved horns, high milk yield, black color, well-developed udder",
      avgWeight: "450-650 kg",
      milkYield: "15-20 liters/day",
      lactationYield: "2,000-3,500 kg",
      fatContent: "7-8%",
      climate: "Sub-tropical",
      image: murrahImage,
      specialty: "Highest milk yielding buffalo breed"
    },
    {
      name: "Nili-Ravi",
      origin: "Pakistan/India (Punjab)",
      characteristics: "Wall eyes, white markings on face and legs, tightly coiled horns",
      avgWeight: "450-600 kg",
      milkYield: "12-18 liters/day",
      lactationYield: "1,800-2,500 kg",
      fatContent: "6-8%",
      climate: "Semi-arid",
      image: niliRaviImage,
      specialty: "Excellent adaptability"
    },
    {
      name: "Surti",
      origin: "India (Gujarat)",
      characteristics: "Compact size, sickle-shaped horns, wedge-shaped body",
      avgWeight: "350-450 kg",
      milkYield: "8-12 liters/day",
      lactationYield: "1,000-1,500 kg",
      fatContent: "6-8%",
      climate: "Semi-arid",
      image: surtiImage,
      specialty: "Ideal for small farms"
    },
    {
      name: "Jafarabadi",
      origin: "India (Gujarat)",
      characteristics: "Large size, drooping ears, flat curved horns, black color",
      avgWeight: "500-800 kg",
      milkYield: "10-15 liters/day",
      lactationYield: "1,500-2,000 kg",
      fatContent: "7-9%",
      climate: "Coastal regions",
      image: jafarabadiImage,
      specialty: "Heaviest buffalo breed in India"
    },
    {
      name: "Mehsana",
      origin: "India (Gujarat)",
      characteristics: "Cross between Murrah and Surti, black/grey color, white markings",
      avgWeight: "400-550 kg",
      milkYield: "12-16 liters/day",
      lactationYield: "1,500-2,000 kg",
      fatContent: "6-7%",
      climate: "Semi-arid",
      image: mehsanaImage, // Placeholder - replace with actual image
      specialty: "Combines best traits of parent breeds"
    },
    {
      name: "Bhadawari",
      origin: "India (UP/MP)",
      characteristics: "Copper colored, medium size, well-adapted to local conditions",
      avgWeight: "350-450 kg",
      milkYield: "6-10 liters/day",
      lactationYield: "800-1,200 kg",
      fatContent: "8-12%",
      climate: "Sub-tropical",
      image: bhadawariImage, // Placeholder - replace with actual image
      specialty: "Very high fat content milk"
    },
    {
      name: "Toda",
      origin: "India (Tamil Nadu - Nilgiris)",
      characteristics: "Fawn colored, thick hair coat, semi-wild, sturdy build",
      avgWeight: "300-400 kg",
      milkYield: "4-8 liters/day",
      lactationYield: "400-600 kg",
      fatContent: "8%",
      climate: "Hilly regions",
      image: todaImage, // Placeholder - replace with actual image
      specialty: "Adapted to hilly terrains"
    },
    {
      name: "Nagpuri",
      origin: "India (Maharashtra)",
      characteristics: "Dark grey color, sword-like horns, white facial patches",
      avgWeight: "400-500 kg",
      milkYield: "8-12 liters/day",
      lactationYield: "700-1,200 kg",
      fatContent: "7-8%",
      climate: "Semi-arid",
      image: nagpuriImage, // Placeholder - replace with actual image
      specialty: "Good draught animal"
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
    { nutrient: "Fat Content", cow: "3.5-4.5%", buffalo: "6-8%" },
    { nutrient: "Protein", cow: "3.2-3.8%", buffalo: "4.2-4.8%" },
    { nutrient: "Lactose", cow: "4.6-4.9%", buffalo: "4.8-5.2%" },
    { nutrient: "SNF (Solids Not Fat)", cow: "8.5-9.0%", buffalo: "9.5-10.5%" },
    { nutrient: "Total Solids", cow: "12.0-13.5%", buffalo: "15.5-18.5%" },
    { nutrient: "Calcium", cow: "120 mg/100ml", buffalo: "169 mg/100ml" },
    { nutrient: "Phosphorus", cow: "90 mg/100ml", buffalo: "117 mg/100ml" }
  ];

  const managementTips = [
    {
      category: "Feeding",
      icon: "🌾",
      tips: [
        "Provide 40-50 kg green fodder daily for cows, 50-60 kg for buffalos",
        "Dry fodder: 6-8 kg/day for cows, 8-10 kg/day for buffalos",
        "Concentrate: 1 kg per 2.5 liters of milk production",
        "Fresh clean water: 30-50 liters/day per animal",
        "Mineral supplements and salt licks should be available",
        "Feed 3-4 times daily at regular intervals"
      ]
    },
    {
      category: "Housing",
      icon: "🏠",
      tips: [
        "Minimum space: 3.5m × 2m per cow, 4m × 2.5m per buffalo",
        "Ceiling height: minimum 3.5 meters for proper ventilation",
        "Concrete flooring with proper drainage",
        "Separate feeding and resting areas",
        "Protection from rain, sun, and extreme weather",
        "Proper waste management system"
      ]
    },
    {
      category: "Health Care",
      icon: "🏥",
      tips: [
        "Regular vaccination as per veterinary schedule",
        "Deworming every 4-6 months",
        "Daily health monitoring and record keeping",
        "Immediate isolation of sick animals",
        "Regular hoof trimming and grooming",
        "Mastitis prevention and udder care"
      ]
    },
    {
      category: "Breeding",
      icon: "🐄",
      tips: [
        "Artificial insemination for genetic improvement",
        "Heat detection and timely breeding",
        "Proper pregnancy care and monitoring",
        "Dry period management (60 days before calving)",
        "Colostrum feeding within 2 hours of birth",
        "Maintain breeding records"
      ]
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
              Comprehensive Livestock Guide
              </span>
            </div>
            <h1 className="font-playfair font-bold text-5xl md:text-7xl mb-8 bg-gradient-to-r from-emerald-200 via-green-100 to-teal-200 bg-clip-text text-transparent leading-tight">
              Complete Guide to Cattle & Buffalo
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-4xl mx-auto">
              Discover comprehensive information about cattle and buffalo breeds, their characteristics, 
              care requirements, and everything you need to know about these remarkable livestock animals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-emerald-300 rounded-full"></span>
                <span>16 Cattle Breeds</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                <span>8 Buffalo Breeds</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-teal-300 rounded-full"></span>
                <span>Expert Care Tips</span>
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
                    <span className="text-white font-semibold text-lg">8 Breeds Featured</span>
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-playfair text-emerald-800 flex items-center gap-3">
                  Cattle (Cows)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">
                  Cattle (Bos taurus) are domesticated bovines primarily raised for milk, meat, and leather. 
                  They are intelligent social animals with complex behavioral patterns and have been human companions 
                  for over 10,000 years, playing crucial roles in agriculture and food production worldwide.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50 rounded-lg p-3">
                    <div className="font-semibold text-emerald-800">Milk Production</div>
                    <div className="text-sm text-gray-600">4-30 L/day</div>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-3">
                    <div className="font-semibold text-emerald-800">Weight Range</div>
                    <div className="text-sm text-gray-600">300-700 kg</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Dairy Production</Badge>
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Meat Production</Badge>
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Draft Power</Badge>
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Leather</Badge>
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
                    <span className="text-white font-semibold text-lg">8 Breeds Featured</span>
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-playfair text-teal-800 flex items-center gap-3">
                  Water Buffalo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">
                  Water buffalo (Bubalus bubalis) are large bovines perfectly adapted to hot climates and wet conditions. 
                  They produce exceptionally rich milk with higher fat content and are excellent for dairy farming 
                  in tropical and subtropical regions around the world.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-teal-50 rounded-lg p-3">
                    <div className="font-semibold text-teal-800">Milk Production</div>
                    <div className="text-sm text-gray-600">6-20 L/day</div>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-3">
                    <div className="font-semibold text-teal-800">Weight Range</div>
                    <div className="text-sm text-gray-600">350-800 kg</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">Rich Milk (6-8% fat)</Badge>
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">Heat Tolerance</Badge>
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">Draft Work</Badge>
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">Cheese Making</Badge>
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
            <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6 text-gray-800">
              Popular Breeds Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore detailed information about the most important cattle and buffalo breeds, 
              their origins, characteristics, and performance metrics.
            </p>
          </div>
          
          <Tabs defaultValue="cattle" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-12">
              <TabsTrigger value="cattle" className="text-lg font-semibold">
              Cattle Breeds
              </TabsTrigger>
              <TabsTrigger value="buffalo" className="text-lg font-semibold">
              Buffalo Breeds
              </TabsTrigger>
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
                          <div className="text-gray-500">Weight</div>
                          <div className="font-semibold text-emerald-800">{breed.avgWeight}</div>
                        </div>
                        <div className="bg-emerald-50 rounded-lg p-2">
                          <div className="text-gray-500">Daily Yield</div>
                          <div className="font-semibold text-emerald-800">{breed.milkYield}</div>
                        </div>
                        <div className="bg-emerald-50 rounded-lg p-2">
                          <div className="text-gray-500">Fat Content</div>
                          <div className="font-semibold text-emerald-800">{breed.fatContent}</div>
                        </div>
                        <div className="bg-emerald-50 rounded-lg p-2">
                          <div className="text-gray-500">Climate</div>
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
                          <div className="text-gray-500">Weight</div>
                          <div className="font-semibold text-teal-800">{breed.avgWeight}</div>
                        </div>
                        <div className="bg-teal-50 rounded-lg p-2">
                          <div className="text-gray-500">Daily Yield</div>
                          <div className="font-semibold text-teal-800">{breed.milkYield}</div>
                        </div>
                        <div className="bg-teal-50 rounded-lg p-2">
                          <div className="text-gray-500">Fat Content</div>
                          <div className="font-semibold text-teal-800">{breed.fatContent}</div>
                        </div>
                        <div className="bg-teal-50 rounded-lg p-2">
                          <div className="text-gray-500">Climate</div>
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
            <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6 text-gray-800">
              Physical Parameters Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed comparison of physical characteristics between cattle and buffalo breeds
            </p>
          </div>
          
          <Card className="max-w-6xl mx-auto shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
              <CardTitle className="text-2xl font-inter text-center">Average Physical Measurements</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="text-left py-4 px-6 font-bold text-gray-800 text-lg">Parameter</th>
                      <th className="text-center py-4 px-6 font-bold text-emerald-700 text-lg">Cattle</th>
                      <th className="text-center py-4 px-6 font-bold text-teal-700 text-lg">Buffalo</th>
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
            <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6 text-gray-800">
              Milk Nutritional Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive comparison of milk composition and nutritional values
            </p>
          </div>
          
          <Card className="max-w-6xl mx-auto shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
              <CardTitle className="text-2xl font-inter text-center">Milk Composition Analysis</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="text-left py-4 px-6 font-bold text-gray-800 text-lg">Nutrient Component</th>
                      <th className="text-center py-4 px-6 font-bold text-emerald-700 text-lg">Cow Milk</th>
                      <th className="text-center py-4 px-6 font-bold text-teal-700 text-lg">Buffalo Milk</th>
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
                <h4 className="font-bold text-lg text-blue-800 mb-3">🔍 Key Insights</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2">
                      <strong>Buffalo milk</strong> contains significantly higher fat content (6-8% vs 3.5-4.5%), 
                      making it ideal for producing rich dairy products like ghee, cheese, and traditional sweets.
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Cow milk</strong> has a lighter consistency and milder taste, making it more suitable 
                      for direct consumption, especially for children and health-conscious consumers.
                    </p>
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
            <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6 text-gray-800">
              Complete Care & Management Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential practices for maintaining healthy and productive livestock
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

          {/* Additional Management Insights */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-800">
                  <span className="text-2xl">📊</span>
                  Production Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Monitor daily milk yield and quality</li>
                  <li>• Maintain optimal body condition score (3-3.5)</li>
                  <li>• Regular genetic evaluation and breeding</li>
                  <li>• Implement precision feeding programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <span className="text-2xl">🌡️</span>
                  Environmental Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Temperature: 18-24°C optimal range</li>
                  <li>• Humidity: 50-70% relative humidity</li>
                  <li>• Air circulation: 4-6 air changes/hour</li>
                  <li>• Lighting: 16-18 hours light/day</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-800">
                  <span className="text-2xl">💰</span>
                  Economic Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Feed cost should be ≤50% of milk revenue</li>
                  <li>• Annual replacement rate: 20-25%</li>
                  <li>• Target calving interval: 12-13 months</li>
                  <li>• Maintain detailed financial records</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnimalGuide;
