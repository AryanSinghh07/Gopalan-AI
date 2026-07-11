import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, BookOpen, ChevronDown } from "lucide-react";
import video1Src from "@/assets/hero-video-1.mp4";
import video2Src from "@/assets/hero-video-2.mp4";
import video3Src from "@/assets/hero-video-3.mp4";
import video4Src from "@/assets/hero-video-4.mp4";

const videoSources = [video1Src, video2Src, video3Src, video4Src];

const Hero = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentVideo = videoRefs.current[currentVideoIndex];
    if (!currentVideo) return;
    currentVideo.currentTime = 0;
    videoRefs.current.forEach((video, index) => {
      if (index !== currentVideoIndex && video) {
        video.pause();
        video.currentTime = 0;
      }
    });
    currentVideo.play().catch(() => {
      // Autoplay can be blocked by the browser; the overlay still renders.
    });
  }, [currentVideoIndex]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videoSources.length);
        setIsTransitioning(false);
      }, 500);
    }, 8000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    return () => {
      videoRefs.current.forEach((video) => video?.pause());
    };
  }, []);

  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {videoSources.map((src, index) => (
          <video
            key={src}
            ref={(el) => (videoRefs.current[index] = el)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex && !isTransitioning ? "opacity-100" : "opacity-0"
            }`}
            muted
            playsInline
            loop
            preload={index === 0 ? "auto" : "metadata"}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
        {/* Readability overlay: deep green tint fading to dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/60" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/30 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-accent/30 rounded-full animate-float" style={{ animationDelay: "0.5s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm md:text-base font-medium">
              🇮🇳 Supporting the Rashtriya Gokul Mission
            </span>
          </div>

          <div className="animate-fade-in">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
              <span className="block animate-slide-in-left">Gopalan</span>
              <span className="bg-gradient-to-r from-white via-primary-glow to-accent bg-clip-text text-transparent animate-slide-in-right drop-shadow-2xl">
                AI
              </span>
            </h1>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="font-inter text-xl md:text-2xl mb-6 text-white drop-shadow-xl leading-relaxed">
              Score your cattle and check their health — with just a photo
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="font-inter text-base md:text-lg mb-12 text-white/90 drop-shadow-lg max-w-2xl mx-auto">
              Take a photo of your animal with an ArUco marker, and our AI measures it,
              scores its body condition, and helps you spot health problems early.
            </p>
          </div>

          <div className="animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="btn-lime font-inter text-lg px-8 py-6 min-h-14 rounded-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => navigate("/analyze")}
              >
                <Camera className="h-5 w-5 mr-2" />
                Analyze My Animal
              </Button>
              <Button
                variant="outline-hero"
                size="lg"
                className="font-inter text-lg px-8 py-6 min-h-14 rounded-xl transform hover:scale-105 transition-all duration-300"
                onClick={scrollToHowItWorks}
              >
                <BookOpen className="h-5 w-5 mr-2" />
                How It Works
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToHowItWorks}
        aria-label="Scroll to learn more"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <div className="flex flex-col items-center justify-center">
          <span className="text-sm mb-2 text-center">Scroll to learn more</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
