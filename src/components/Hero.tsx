import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video11Ref = useRef<HTMLVideoElement>(null);
  const video22Ref = useRef<HTMLVideoElement>(null);
  
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { t } = useTranslation();

  const videos = [
    { ref: video1Ref, src: "src/assets/video1.mp4", opacity: "opacity 30" },
    { ref: video2Ref, src: "src/assets/video2.mp4", opacity: "opacity 30" },
    { ref: video11Ref, src: "src/assets/video11.mp4", opacity: "opacity 30" },
    { ref: video22Ref, src: "src/assets/video22.mp4", opacity: "opacity 30" }
  ];

  useEffect(() => {
    const playCurrentVideo = async () => {
      const currentVideo = videos[currentVideoIndex].ref.current;
      
      if (currentVideo) {
        try {
          // Reset video to start
          currentVideo.currentTime = 0;
          
          // Ensure all other videos are paused
          videos.forEach((video, index) => {
            if (index !== currentVideoIndex && video.ref.current) {
              video.ref.current.pause();
              video.ref.current.currentTime = 0;
            }
          });

          await currentVideo.play();
        } catch (error) {
          console.log(`Video ${currentVideoIndex + 1} failed to play:`, error);
        }
      }
    };

    playCurrentVideo();
  }, [currentVideoIndex]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsTransitioning(true);
      
      // Brief transition effect
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => 
          prevIndex === videos.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500);
      
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(slideInterval);
  }, [videos.length]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      videos.forEach(video => {
        if (video.ref.current) {
          video.ref.current.pause();
        }
      });
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Container */}
      <div className="absolute inset-0">
        {videos.map((video, index) => (
          <video
            key={index}
            ref={video.ref}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? video.opacity : 'opacity-0'
            } ${isTransitioning ? 'opacity-0' : ''}`}
            muted
            playsInline
            loop
            preload="metadata"
          >
            <source src={video.src} type="video/mp4" />
          </video>
        ))}
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
              <span className="block animate-slide-in-left">{t('brand')}</span>
              <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent animate-slide-in-right drop-shadow-2xl">
                {t('brandSuffix')}
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="font-inter text-xl md:text-2xl mb-8 text-white drop-shadow-xl leading-relaxed">
              {t('hero.tagline')}
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="font-inter text-lg mb-12 text-white drop-shadow-lg max-w-3xl mx-auto">
              {t('hero.subtagline')}
            </p>
          </div>
          
          <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="font-inter text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/technical-details'}
              >
                {t('hero.ctaExplore')}
              </Button>
              <Button variant="outline-hero" size="lg" className="font-inter text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300">
                {t('hero.ctaDemo')}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 center-translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center justify-center">
          <span className="text-sm mb-2 text-center">{t('hero.scroll')}</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-center justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;