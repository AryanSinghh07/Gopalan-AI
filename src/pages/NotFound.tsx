import { Link } from "react-router-dom";
import { Home, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <div className="flex min-h-screen items-center justify-center px-6">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative z-10 text-center max-w-lg animate-fade-in">
          <div className="text-8xl md:text-9xl mb-4 animate-float">🐄</div>
          <h1 className="font-display text-7xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl">
            404
          </h1>
          <p className="text-2xl font-semibold text-white mb-3">
            This page has wandered off
          </p>
          <p className="text-lg text-white/80 mb-10 max-w-md mx-auto">
            The page you are looking for does not exist. Let us take you back to safe pasture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="min-h-14 px-8 rounded-xl bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-glow font-semibold"
            >
              <Link to="/">
                <Home className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-14 px-8 rounded-xl border-white/40 bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <Link to="/guide">
                <Camera className="h-5 w-5 mr-2" />
                How It Works
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
