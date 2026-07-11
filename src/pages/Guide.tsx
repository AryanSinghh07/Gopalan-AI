import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Camera, Target, BarChart3, Upload, ArrowRight, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import girImage from "@/assets/animals/gir.jpg";
import angleImage from "@/assets/animals/angle-photos.jpg";
import uploadiImage from "@/assets/animals/upload-interface.jpg";
import mesurepointImage from "@/assets/animals/measure-points.jpg";
import scoreImage from "@/assets/animals/score.png";
import React, { useState } from "react";
import arucoImage from "@/assets/animals/aruco-marker.jpg";

const Guide = () => {
  const [showArucoPopup, setShowArucoPopup] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Prepare Your Animal",
      description: "Stand your animal in a clean, bright place so the photos come out clear",
      icon: Camera,
      image: girImage,
      details: [
        "Use good daylight, or bright lights if indoors",
        "Stand the animal on flat ground with a clear background",
        "Make sure the animal is calm and standing naturally",
        "Move away anything blocking or cluttering the background",
        "Add an ArUco marker in the photo — it works as a scale for accurate measurements"
      ],
      tips: (
        <>
          Best results come in daylight, with the animal standing relaxed.<br />
          <Button
            variant="outline"
            size="sm"
            className="mt-3"
            onClick={() => setShowArucoPopup(true)}
          >
            Show ArUco Marker
          </Button>
          {showArucoPopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
              <div className="bg-card border border-border rounded-2xl shadow-elegant p-6 max-w-sm w-full relative animate-fade-up">
                <img
                  src={arucoImage}
                  alt="Aruco Marker"
                  className="w-full h-auto mb-4 rounded-xl border border-border"
                />
                <p className="mb-4 text-sm text-muted-foreground">
                  Print this ArUco marker and place it near the animal. It works as a scale for accurate measurements.
                </p>
                <div className="flex justify-between gap-2">
                  <a
                    href={arucoImage}
                    download="aruco-marker.jpg"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Download Image
                  </a>
                  <Button
                    variant="outline"
                    onClick={() => setShowArucoPopup(false)}
                  >
                    Close
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
      title: "Take Photos from 3 Angles",
      description: "Take clear photos from the front, side, and back of the animal",
      icon: Target,
      image: angleImage,
      details: [
        "Front View: stand in front — show the face and front body",
        "Side View: stand at the side — show the full side of the body",
        "Rear View: stand behind — show the back body and hindquarters",
        "Keep the ArUco marker visible in every photo for scale",
        "Stay at the same distance (3-5 meters) for all three photos"
      ],
      tips: "Hold the camera at the same height as the animal's belly. This keeps body proportions correct."
    },
    {
      id: 3,
      title: "Upload the Photos",
      description: "Upload your three photos from your phone",
      icon: Upload,
      image: uploadiImage,
      details: [
        "Open the Gopalan AI",
        "Go to the 'New Classification' section",
        "Upload photos in this order: Front → Side → Rear",
        "Check each photo is clear and the right way up"
      ],
      tips: "Photos should be at least 1024x768 pixels for the best results."
    },
    {
      id: 4,
      title: "Mark Measurement Points",
      description: "Tap two points on each photo so the app can measure your animal",
      icon: Target,
      image: mesurepointImage,
      details: [
        "Tap the photo to place the first point",
        "Tap again to place the second point — this makes a measuring line",
        "Common points: shoulder height, body length, chest girth",
        "Follow the on-screen guide for the best point placement"
      ],
      tips: "Use fixed body landmarks like the shoulder blade or hip bone. This keeps measurements consistent."
    },
    {
      id: 5,
      title: "See Your Results",
      description: "Read the AI breed result and body score for your animal",
      icon: BarChart3,
      image: scoreImage,
      details: [
        "See the breed name with a confidence percentage",
        "Check the body condition score and measurements",
        "Read the genetic trait analysis and advice",
        "Save the results to your animal records"
      ],
      tips: "Better photos and careful point placement give more accurate results."
    }
  ];

  const requirements = [
    "Mobile phone with a good camera (at least 8MP)",
    "Stable internet connection to process the photos",
    "Bright, well-lit place for photography",
    "Calm animal so the photos are not blurry"
  ];

  const tips = [
    "Take photos in early morning or late afternoon light for the best photos",
    "Rest the phone on something steady, or use a tripod",
    "Wait 2-3 minutes between shots so the animal relaxes",
    "Take extra photos in case some come out blurry"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white relative overflow-hidden">
        {/* Soft floating glows */}
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-float" aria-hidden="true"></div>
        <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl animate-pulse-soft" aria-hidden="true"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal variant="fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-emerald-100 text-sm font-semibold tracking-wide mb-4">
                Step-by-Step Guide
              </span>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={100}>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                How to Photograph &amp; Score Your Animal
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={200}>
              <p className="text-lg text-emerald-50/90 mb-8 max-w-2xl mx-auto">
                Follow this simple guide to classify and score your animals with our AI system.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={300}>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="shadow-elegant">
                  <Camera className="w-5 h-5 mr-2" />
                  Start Classification
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white/60 hover:bg-white hover:text-emerald-900 transition-colors duration-200"
                >
                  Watch Tutorial
                </Button>
              </div>
            </ScrollReveal>

            {/* Quick stats */}
            <ScrollReveal variant="fade-up" delay={400}>
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="rounded-2xl bg-white/10 px-4 py-3">
                  <AnimatedCounter end={5} className="text-3xl font-display font-bold text-white" />
                  <p className="text-xs text-emerald-100 mt-1">Easy Steps</p>
                </div>
                <div className="rounded-2xl bg-white/10 px-4 py-3">
                  <AnimatedCounter end={3} className="text-3xl font-display font-bold text-white" />
                  <p className="text-xs text-emerald-100 mt-1">Photo Angles</p>
                </div>
                <div className="rounded-2xl bg-white/10 px-4 py-3">
                  <AnimatedCounter end={2} className="text-3xl font-display font-bold text-white" />
                  <p className="text-xs text-emerald-100 mt-1">Points per Photo</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="section-badge mb-4">Before You Start</span>
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                  What You <span className="gradient-text">Need</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Keep these things ready before you take the photos.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal variant="slide-left">
                <div className="h-full rounded-2xl border border-border bg-card shadow-card card-lift p-8">
                  <h3 className="flex items-center gap-3 text-xl font-display font-bold mb-6">
                    <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </span>
                    Requirements
                  </h3>
                  <ul className="space-y-4">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slide-right" delay={100}>
                <div className="h-full rounded-2xl border border-border bg-card shadow-card card-lift p-8">
                  <h3 className="flex items-center gap-3 text-xl font-display font-bold mb-6">
                    <span className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-5 h-5 text-accent" />
                    </span>
                    Pro Tips
                  </h3>
                  <ul className="space-y-4">
                    {tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="section-badge mb-4">5 Simple Steps</span>
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                  Classification <span className="gradient-text">Process</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Follow these steps for accurate classification and scoring of your animal.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <ScrollReveal
                  key={step.id}
                  variant={index % 2 === 0 ? "slide-left" : "slide-right"}
                >
                  <div className="relative rounded-2xl border border-border bg-card shadow-card card-lift overflow-hidden">
                    {/* Big step numeral */}
                    <span
                      className="absolute top-2 right-6 font-display font-bold text-[7rem] md:text-[9rem] leading-none text-primary/10 select-none pointer-events-none"
                      aria-hidden="true"
                    >
                      {step.id}
                    </span>

                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className={`p-8 relative z-10 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center flex-shrink-0 shadow-glow">
                            <step.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <Badge variant="outline" className="mb-2 border-primary/30 text-primary">
                              {`Step ${step.id}`}
                            </Badge>
                            <h3 className="text-2xl font-display font-bold mb-2">
                              {step.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4 mb-6">
                          <h4 className="font-semibold">
                            What to do:
                          </h4>
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-3">
                                <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 bg-accent/10 border border-accent/20 rounded-xl">
                          <p className="text-sm font-semibold text-accent mb-1">
                            💡 Pro Tip:
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {step.tips}
                          </p>
                        </div>
                      </div>

                      <div className={`lg:p-8 p-6 bg-muted/40 flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                        <div className="relative overflow-hidden rounded-2xl shadow-card max-w-sm w-full group">
                          <img
                            src={step.image}
                            alt={`Step ${step.id} illustration`}
                            loading="lazy"
                            className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
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
