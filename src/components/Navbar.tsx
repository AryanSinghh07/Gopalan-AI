import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";
import gopalanLogo from "@/assets/gopalan-logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Analyze", href: "/analyze" },
  { name: "Breeds", href: "/animal-guide" },
  { name: "Health", href: "/medical-support" },
  { name: "Guide", href: "/guide" },
  { name: "Help", href: "/help" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pages without a dark hero need dark nav text from the start
  const darkHero = pathname === "/";
  const solid = isScrolled || !darkHero;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-background/95 backdrop-blur-md shadow-elegant border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer" aria-label="Go to Home">
            <img
              src={gopalanLogo}
              alt="Gopalan AI logo"
              className="h-8 w-auto md:h-10 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="font-display font-bold text-xl md:text-2xl">
              <span className={solid ? "text-foreground" : "text-white"}>Gopalan</span>
              <span className="text-primary ml-1">AI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`${
                    active
                      ? "text-primary"
                      : solid
                        ? "text-foreground/80"
                        : "text-white/80"
                  } hover:text-primary font-inter font-medium transition-colors duration-200 relative group`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              className={`font-inter ${solid ? "text-foreground" : "text-white hover:bg-white/10 hover:text-white"}`}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              className="btn-lime font-inter rounded-xl px-5 hover:scale-105"
              onClick={() => navigate("/analyze")}
            >
              <Camera className="h-4 w-4 mr-1.5" />
              Analyze
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${solid ? "text-foreground/80" : "text-white/80"} hover:text-primary transition-colors`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute top-0 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 top-2.5" : ""
                }`}
              ></span>
              <span
                className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`absolute top-5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 top-2.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-border/20">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block rounded-lg px-3 py-3 text-base font-inter font-medium transition-colors duration-200 ${
                    active
                      ? "bg-primary/10 text-primary"
                      : solid
                        ? "text-foreground/80 hover:bg-muted"
                        : "text-white/80 hover:bg-white/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 space-y-3 border-t border-border/20">
              <Button
                className="btn-lime w-full min-h-12 font-inter rounded-xl"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/analyze");
                }}
              >
                <Camera className="h-4 w-4 mr-1.5" />
                Analyze My Animal
              </Button>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 min-h-12 font-inter rounded-xl"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 min-h-12 font-inter rounded-xl"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate("/signup");
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
