import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Camera, Target, BarChart3, Upload, ArrowRight, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      description: "Position your animal in a clean, well-lit environment for optimal photo quality",
      icon: Camera,
      image: girImage,
      details: [
        "Ensure good natural lighting or use proper artificial lighting",
        "Position the animal on level ground with clear background",
        "Make sure the animal is calm and standing naturally",
        "Remove any obstructions or distracting elements from the background",
        "Add a Aruco marker for scale reference image for accurate measurements"
      ],
      tips: (
        <>
          Best results are achieved during daylight hours with the animal standing relaxed.<br />
          <Button
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => setShowArucoPopup(true)}
          >
            Show Aruco Marker
          </Button>
          {showArucoPopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
                <img
                  src={arucoImage}
                  alt="Aruco Marker"
                  className="w-full h-auto mb-4 rounded"
                />
                <p className="mb-4 text-sm text-gray-600">
                  Add a Aruco marker for scale reference image for accurate measurements
                </p>
                <div className="flex justify-between gap-2">
                  <a
                    href={arucoImage}
                    download="aruco-marker.jpg"
                    className="btn btn-primary px-4 py-2 rounded bg-primary text-white"
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
      title: "Capture Three Angle Photos",
      description: "Take clear photos from front, side, and rear angles for comprehensive analysis",
      icon: Target,
      image: angleImage,
      details: [
        "Front View: Capture head-on shot showing face and front body structure",
        "Side View: Take a profile shot showing the complete side body structure",
        "Rear View: Photograph from behind showing hindquarters and rear structure",
        "Place the Aruco marker in each shot for scale measurements",
        "Maintain consistent distance (3-5 meters) for all three shots"
      ],
      tips: "Keep the camera at the same height as the animal's midsection for accurate proportions."
    },
    {
      id: 3,
      title: "Upload Images",
      description: "Upload your three photos using the mobile interface",
      icon: Upload,
      image: uploadiImage,
      details: [
        "Open the Gopalan AI ",
        "Navigate to the 'New Classification' section",
        "Upload photos in the correct sequence: Front → Side → Rear",
        "Ensure each image is clear and properly oriented"
      ],
      tips: "Images should be at least 1024x768 pixels for best analysis results."
    },
    {
      id: 4,
      title: "Mark Measurement Points",
      description: "Place two reference points on each image for accurate measurements",
      icon: Target,
      image: mesurepointImage,
      details: [
        "Tap on the image to place the first measurement point",
        "Place the second point to create a reference measurement line",
        "Common reference points: shoulder height, body length, chest girth",
        "Follow the on-screen guidance for optimal point placement"
      ],
      tips: "Use anatomical landmarks like shoulder blade or hip bone for consistent measurements."
    },
    {
      id: 5,
      title: "Review Classification Results",
      description: "Analyze the AI-generated breed classification and scoring results",
      icon: BarChart3,
      image: scoreImage,
      details: [
        "View breed identification with confidence percentage",
        "Check body condition scoring and measurements",
        "Review genetic trait analysis and recommendations",
        "Save results to your animal records database"
      ],
      tips: "Results accuracy improves with better photo quality and proper measurement point placement."
    }
  ];

  const requirements = [
    "Mobile device with good camera (minimum 8MP)",
    "Stable internet connection for image processing",
    "Well-lit environment for photography",
    "Calm animal for clear photo capture"
  ];

  const tips = [
    "Take photos during golden hour (early morning/late afternoon) for best lighting",
    "Use a tripod or stabilizer for consistent framing",
    "Allow 2-3 minutes between shots for animal to relax",
    "Keep backup photos in case of blurry images"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
<section className="pt-20 pb-20 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white relative overflow-hidden">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto text-center">
      <Badge variant="secondary" className="mb-4">
        Step-by-Step Guide
      </Badge>
      <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-white">
        How to Use Animal Classification
      </h1>
      <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
        Follow this comprehensive guide to accurately classify and score your animals using our AI-powered system.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="shadow-elegant">
          <Camera className="w-5 h-5 mr-2" />
          Start Classification
        </Button>
        <Button variant="outline" size="lg" className="text-black border-black hover:bg-black hover:text-white hover:border-white transition-colors duration-200">
          Watch Tutorial
        </Button>
      </div>
    </div>
  </div>
</section>

      {/* Requirements Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                    Pro Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Classification Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow these detailed steps to ensure accurate animal classification and scoring results.
              </p>
            </div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-32 bg-border/50 hidden lg:block"></div>
                  )}

                  <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <step.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <Badge variant="outline" className="mb-2">
                              {`Step ${step.id}`}
                            </Badge>
                            <h3 className="text-2xl font-playfair font-bold mb-2">
                              {step.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4 mb-6">
                          <h4 className="font-semibold">
                            Detailed Instructions:
                          </h4>
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-3">
                                <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 bg-muted/50 rounded-lg">
                          <p className="text-sm font-medium text-primary mb-1">
                            💡 Pro Tip:
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {step.tips}
                          </p>
                        </div>
                      </div>

                      <div className="lg:p-8 p-6 bg-muted/20 flex items-center justify-center">
                        <div className="relative overflow-hidden rounded-lg shadow-card max-w-sm w-full">
                          <img
                            src={step.image}
                            alt={`Step ${step.id} illustration`}
                            loading="lazy"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
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
