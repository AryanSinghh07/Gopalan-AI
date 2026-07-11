import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cowBreeds, buffaloBreeds } from "@/data/breeds";
import cattleOverviewImage from "@/assets/animals/cattle.jpg";
import buffaloOverviewImage from "@/assets/animals/water-buffalo.jpg";

const AnimalGuide = () => {
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
      tips: ["Provide 40-50 kg green fodder daily for cows, 50-60 kg for buffalos", "Dry fodder: 6-8 kg/day for cows, 8-10 kg/day for buffalos", "Concentrate: 1 kg per 2.5 liters of milk production", "Fresh clean water: 30-50 liters/day per animal", "Mineral supplements and salt licks should be available", "Feed 3-4 times daily at regular intervals"]
    },
    {
      category: "Housing",
      icon: "🏠",
      tips: ["Minimum space: 3.5m × 2m per cow, 4m × 2.5m per buffalo", "Ceiling height: minimum 3.5 meters for proper ventilation", "Concrete flooring with proper drainage", "Separate feeding and resting areas", "Protection from rain, sun, and extreme weather", "Proper waste management system"]
    },
    {
      category: "Health Care",
      icon: "🏥",
      tips: ["Regular vaccination as per veterinary schedule", "Deworming every 4-6 months", "Daily health monitoring and record keeping", "Immediate isolation of sick animals", "Regular hoof trimming and grooming", "Mastitis prevention and udder care"]
    },
    {
      category: "Breeding",
      icon: "🐄",
      tips: ["Artificial insemination for genetic improvement", "Heat detection and timely breeding", "Proper pregnancy care and monitoring", "Dry period management (60 days before calving)", "Colostrum feeding within 2 hours of birth", "Maintain breeding records"]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute -top-20 -right-16 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-float" aria-hidden="true"></div>
        <div className="absolute -bottom-24 -left-12 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse-soft" aria-hidden="true"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <ScrollReveal variant="fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-emerald-100 text-sm font-semibold tracking-wide mb-6">
                Complete Livestock Guide
              </span>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={100}>
              <h1 className="font-display font-bold text-4xl md:text-6xl mb-8 text-white leading-tight">
                Complete Guide to <span className="bg-gradient-to-r from-emerald-200 via-green-100 to-amber-200 bg-clip-text text-transparent">Cattle &amp; Buffalo</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={200}>
              <p className="text-lg md:text-xl text-emerald-50/90 mb-10 leading-relaxed max-w-3xl mx-auto">
                Learn about cattle and buffalo breeds — their traits, milk yield, and how to care for them.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={300}>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="rounded-2xl bg-white/10 px-6 py-4 min-w-[8rem]">
                  <AnimatedCounter end={16} className="text-3xl font-display font-bold text-white" />
                  <p className="text-sm text-emerald-100 mt-1">Cattle Breeds</p>
                </div>
                <div className="rounded-2xl bg-white/10 px-6 py-4 min-w-[8rem]">
                  <AnimatedCounter end={8} className="text-3xl font-display font-bold text-white" />
                  <p className="text-sm text-emerald-100 mt-1">Buffalo Breeds</p>
                </div>
                <div className="rounded-2xl bg-white/10 px-6 py-4 min-w-[8rem]">
                  <AnimatedCounter end={4} className="text-3xl font-display font-bold text-white" />
                  <p className="text-sm text-emerald-100 mt-1">Expert Care Areas</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-badge mb-4">Know Your Animals</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Cattle &amp; <span className="gradient-text">Buffalo</span> at a Glance
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Two great dairy animals — each with its own strengths.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ScrollReveal variant="slide-left">
              <div className="group h-full rounded-2xl border border-border bg-card shadow-card card-lift overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cattleOverviewImage}
                    alt="Cattle overview"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-primary/90 backdrop-blur-sm rounded-full px-4 py-2 text-white font-semibold">
                      8 Breeds Featured
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-6">
                  <h3 className="text-3xl font-display font-bold text-foreground">Cattle (Cows)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cattle (Bos taurus) are kept mainly for milk, meat, and leather. They are intelligent, social animals and have worked beside humans for over 10,000 years, playing a big role in farming and food across the world.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-3">
                      <div className="font-semibold text-primary">Milk Production</div>
                      <div className="text-sm text-muted-foreground">4-30 L/day</div>
                    </div>
                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-3">
                      <div className="font-semibold text-primary">Weight Range</div>
                      <div className="text-sm text-muted-foreground">300-700 kg</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Dairy Production</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Meat Production</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Draft Power</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Leather</Badge>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slide-right" delay={100}>
              <div className="group h-full rounded-2xl border border-border bg-card shadow-card card-lift overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={buffaloOverviewImage}
                    alt="Buffalo overview"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-accent/90 backdrop-blur-sm rounded-full px-4 py-2 text-accent-foreground font-semibold">
                      8 Breeds Featured
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-6">
                  <h3 className="text-3xl font-display font-bold text-foreground">Water Buffalo</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Water buffalo (Bubalus bubalis) are large animals well suited to hot, wet climates. Their milk is very rich, with higher fat content, which makes them excellent for dairy farming in tropical regions.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-accent/10 border border-accent/20 rounded-xl p-3">
                      <div className="font-semibold text-accent">Milk Production</div>
                      <div className="text-sm text-muted-foreground">6-20 L/day</div>
                    </div>
                    <div className="bg-accent/10 border border-accent/20 rounded-xl p-3">
                      <div className="font-semibold text-accent">Weight Range</div>
                      <div className="text-sm text-muted-foreground">350-800 kg</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-accent/15 text-accent hover:bg-accent/25 border-0">Rich Milk (6-8% fat)</Badge>
                    <Badge className="bg-accent/15 text-accent hover:bg-accent/25 border-0">Heat Tolerance</Badge>
                    <Badge className="bg-accent/15 text-accent hover:bg-accent/25 border-0">Draft Work</Badge>
                    <Badge className="bg-accent/15 text-accent hover:bg-accent/25 border-0">Cheese Making</Badge>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Breed Information with Tabs */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-badge mb-4">Breed Encyclopedia</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Popular <span className="gradient-text">Breeds</span> Collection
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore the most important cattle and buffalo breeds — their origins, traits, and milk performance.
              </p>
            </div>
          </ScrollReveal>

          <Tabs defaultValue="cattle" className="w-full">
            <ScrollReveal variant="zoom">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-12">
                <TabsTrigger value="cattle" className="text-lg font-semibold">Cattle Breeds</TabsTrigger>
                <TabsTrigger value="buffalo" className="text-lg font-semibold">Buffalo Breeds</TabsTrigger>
              </TabsList>
            </ScrollReveal>

            <TabsContent value="cattle" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {cowBreeds.map((breed, index) => (
                  <ScrollReveal key={breed.name} delay={(index % 4) * 100}>
                    <Link to={`/breeds/${breed.slug}`} className="group block h-full rounded-2xl border border-border bg-card shadow-card card-lift overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={breed.image}
                          alt={breed.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-primary/90 text-white border-0">{breed.origin}</Badge>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <span className="inline-block bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-semibold text-foreground">
                            {breed.specialty}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 space-y-4">
                        <h3 className="text-xl font-bold text-primary">{breed.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{breed.characteristics}</p>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="bg-primary/5 border border-primary/10 rounded-lg p-2">
                            <div className="text-muted-foreground">Weight</div>
                            <div className="font-semibold text-primary">{breed.avgWeight}</div>
                          </div>
                          <div className="bg-primary/5 border border-primary/10 rounded-lg p-2">
                            <div className="text-muted-foreground">Daily Yield</div>
                            <div className="font-semibold text-primary">{breed.milkYield}</div>
                          </div>
                          <div className="bg-accent/10 border border-accent/20 rounded-lg p-2">
                            <div className="text-muted-foreground">Fat Content</div>
                            <div className="font-semibold text-accent">{breed.fatContent}</div>
                          </div>
                          <div className="bg-accent/10 border border-accent/20 rounded-lg p-2">
                            <div className="text-muted-foreground">Climate</div>
                            <div className="font-semibold text-accent truncate">{breed.climate}</div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Lactation yield: <span className="font-semibold text-foreground">{breed.lactationYield}</span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                          View details <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="buffalo" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {buffaloBreeds.map((breed, index) => (
                  <ScrollReveal key={breed.name} delay={(index % 4) * 100}>
                    <Link to={`/breeds/${breed.slug}`} className="group block h-full rounded-2xl border border-border bg-card shadow-card card-lift overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={breed.image}
                          alt={breed.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-accent/90 text-accent-foreground border-0">{breed.origin}</Badge>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <span className="inline-block bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-semibold text-foreground">
                            {breed.specialty}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 space-y-4">
                        <h3 className="text-xl font-bold text-primary">{breed.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{breed.characteristics}</p>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="bg-primary/5 border border-primary/10 rounded-lg p-2">
                            <div className="text-muted-foreground">Weight</div>
                            <div className="font-semibold text-primary">{breed.avgWeight}</div>
                          </div>
                          <div className="bg-primary/5 border border-primary/10 rounded-lg p-2">
                            <div className="text-muted-foreground">Daily Yield</div>
                            <div className="font-semibold text-primary">{breed.milkYield}</div>
                          </div>
                          <div className="bg-accent/10 border border-accent/20 rounded-lg p-2">
                            <div className="text-muted-foreground">Fat Content</div>
                            <div className="font-semibold text-accent">{breed.fatContent}</div>
                          </div>
                          <div className="bg-accent/10 border border-accent/20 rounded-lg p-2">
                            <div className="text-muted-foreground">Climate</div>
                            <div className="font-semibold text-accent truncate">{breed.climate}</div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Lactation yield: <span className="font-semibold text-foreground">{breed.lactationYield}</span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                          View details <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Physical Parameters */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-badge mb-4">Body Comparison</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Physical <span className="gradient-text">Parameters</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Compare body measurements of cattle and buffalo side by side.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="zoom" delay={100}>
            <div className="max-w-6xl mx-auto rounded-2xl border border-border bg-card shadow-elegant overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-800 to-green-700 text-white py-5 px-6">
                <h3 className="text-2xl font-display font-bold text-center">Average Physical Measurements</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[36rem]">
                  <thead>
                    <tr className="bg-muted/50 border-b border-border">
                      <th className="text-left py-4 px-6 font-bold text-foreground text-lg">Parameter</th>
                      <th className="text-center py-4 px-6 font-bold text-primary text-lg">Cattle</th>
                      <th className="text-center py-4 px-6 font-bold text-accent text-lg">Buffalo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {physicalParams.map((param, index) => (
                      <tr key={index} className="border-b border-border hover:bg-muted/40 transition-colors duration-200">
                        <td className="py-4 px-6 font-semibold text-foreground">{param.parameter}</td>
                        <td className="py-4 px-6 text-center bg-primary/5 font-medium text-primary">{param.cow}</td>
                        <td className="py-4 px-6 text-center bg-accent/5 font-medium text-accent">{param.buffalo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Nutritional Comparison */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-badge mb-4">Milk Quality</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Milk <span className="gradient-text-warm">Nutrition</span> Compared
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                See what is inside cow milk and buffalo milk, side by side.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="zoom" delay={100}>
            <div className="max-w-6xl mx-auto rounded-2xl border border-border bg-card shadow-elegant overflow-hidden">
              <div className="bg-gradient-to-r from-green-700 to-amber-600 text-white py-5 px-6">
                <h3 className="text-2xl font-display font-bold text-center">Milk Composition Analysis</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[36rem]">
                  <thead>
                    <tr className="bg-muted/50 border-b border-border">
                      <th className="text-left py-4 px-6 font-bold text-foreground text-lg">Nutrient Component</th>
                      <th className="text-center py-4 px-6 font-bold text-primary text-lg">Cow Milk</th>
                      <th className="text-center py-4 px-6 font-bold text-accent text-lg">Buffalo Milk</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nutritionalData.map((nutrient, index) => (
                      <tr key={index} className="border-b border-border hover:bg-muted/40 transition-colors duration-200">
                        <td className="py-4 px-6 font-semibold text-foreground">{nutrient.nutrient}</td>
                        <td className="py-4 px-6 text-center bg-primary/5 font-medium text-primary">{nutrient.cow}</td>
                        <td className="py-4 px-6 text-center bg-accent/5 font-medium text-accent">{nutrient.buffalo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="m-6 p-6 bg-accent/10 rounded-xl border-l-4 border-accent">
                <h4 className="font-bold text-lg text-accent mb-3">🔍 Key Insights</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>
                    <p className="mb-2">Buffalo milk has much more fat (6-8% vs 3.5-4.5%). This makes it ideal for rich dairy products like ghee, cheese, and traditional sweets.</p>
                  </div>
                  <div>
                    <p>Cow milk is lighter and milder in taste. It is better for direct drinking, especially for children and health-conscious families.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Care & Management */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-badge mb-4">Daily Care</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Care &amp; <span className="gradient-text">Management</span> Guide
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Simple daily practices to keep your animals healthy and productive.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementTips.map((section, index) => (
              <ScrollReveal key={section.category} delay={index * 100}>
                <div className="group h-full rounded-2xl border border-border bg-card shadow-card card-lift p-6">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {section.icon}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground">
                      {section.category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnimalGuide;
