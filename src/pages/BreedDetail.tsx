import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Droplets,
  Scale,
  Thermometer,
  MapPin,
  Award,
  Sparkles,
  ArrowRight,
  HeartPulse,
} from "lucide-react";
import { getBreed, getRelatedBreeds } from "@/data/breeds";

const BreedDetail = () => {
  const { breedId } = useParams<{ breedId: string }>();
  const breed = breedId ? getBreed(breedId) : undefined;

  if (!breed) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-24 container mx-auto px-6 text-center">
          <div className="text-7xl mb-6">🐄</div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-3">Breed not found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find that breed. Browse the full guide instead.
          </p>
          <Button asChild className="btn-lime min-h-12 rounded-xl px-6">
            <Link to="/animal-guide">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Breed Guide
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const related = getRelatedBreeds(breed);
  const stats = [
    { icon: Droplets, label: "Milk Yield", value: breed.milkYield },
    { icon: Scale, label: "Average Weight", value: breed.avgWeight },
    { icon: Award, label: "Fat Content", value: breed.fatContent },
    { icon: Thermometer, label: "Best Climate", value: breed.climate },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-10 right-10 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-float" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/animal-guide"
            className="inline-flex items-center gap-2 text-white/80 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all breeds
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal variant="slide-left">
              <div className="overflow-hidden rounded-2xl border border-white/15 shadow-elegant">
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-72 md:h-96 object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slide-right">
              <div>
                <span className="glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 capitalize">
                  {breed.type === "cow" ? "🐄 Cattle Breed" : "🐃 Buffalo Breed"}
                </span>
                <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">{breed.name}</h1>
                <p className="flex items-center gap-2 text-white/80 mb-4">
                  <MapPin className="h-5 w-5 text-accent" />
                  {breed.origin}
                </p>
                <p className="text-lg text-white/85 leading-relaxed mb-6">{breed.characteristics}.</p>
                <div className="glass rounded-xl p-4 flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <p className="text-white/90">
                    <span className="font-semibold">Known for:</span> {breed.specialty}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key stats */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={stat.label} delay={index * 90}>
                  <div className="bg-card rounded-2xl border border-border shadow-card p-6 text-center card-lift h-full">
                    <div className="rounded-xl bg-primary/10 text-primary p-3 inline-flex mb-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="font-display font-bold text-foreground">{stat.value}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Detail rows */}
          <div className="max-w-4xl mx-auto mt-14 grid md:grid-cols-2 gap-6">
            <ScrollReveal variant="slide-left">
              <div className="bg-card rounded-2xl border border-border shadow-card p-8 h-full">
                <h2 className="font-display text-2xl font-bold text-foreground mb-5">Production Details</h2>
                <dl className="space-y-4">
                  {[
                    { label: "Daily milk yield", value: breed.milkYield },
                    { label: "Per lactation", value: breed.lactationYield },
                    { label: "Milk fat content", value: breed.fatContent },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                      <dt className="text-muted-foreground">{row.label}</dt>
                      <dd className="font-semibold text-foreground">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slide-right">
              <div className="bg-card rounded-2xl border border-border shadow-card p-8 h-full">
                <h2 className="font-display text-2xl font-bold text-foreground mb-5">Physical & Climate</h2>
                <dl className="space-y-4">
                  {[
                    { label: "Average weight", value: breed.avgWeight },
                    { label: "Origin", value: breed.origin },
                    { label: "Suited climate", value: breed.climate },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between border-b border-border pb-3 last:border-0 gap-4">
                      <dt className="text-muted-foreground shrink-0">{row.label}</dt>
                      <dd className="font-semibold text-foreground text-right">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </ScrollReveal>
          </div>

          {/* Health CTA */}
          <ScrollReveal>
            <div className="max-w-4xl mx-auto mt-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-border p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-accent/15 text-primary p-3 shrink-0">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    Keep your {breed.name} healthy
                  </h3>
                  <p className="text-muted-foreground">
                    Learn the common health conditions and how to prevent them.
                  </p>
                </div>
              </div>
              <Button asChild variant="outline" className="min-h-12 rounded-xl whitespace-nowrap">
                <Link to="/medical-support">
                  Health Guide
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related breeds */}
      {related.length > 0 && (
        <section className="section-padding bg-muted/40">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                Related {breed.type === "cow" ? "Cattle" : "Buffalo"} Breeds
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {related.map((rel, index) => (
                <ScrollReveal key={rel.slug} delay={index * 100}>
                  <Link
                    to={`/breeds/${rel.slug}`}
                    className="group block bg-card rounded-2xl border border-border shadow-card overflow-hidden card-lift h-full"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={rel.image}
                        alt={rel.name}
                        loading="lazy"
                        className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold text-foreground mb-1">{rel.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{rel.origin}</p>
                      <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                        View breed <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BreedDetail;
