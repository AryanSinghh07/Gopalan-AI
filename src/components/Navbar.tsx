import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import gopalanLogo from "@/assets/Gopalan Logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  const navLinks = [
		{ name: t('nav.home'), href: '/' },
		{ name: t('nav.guide'), href: '/guide' },
		{ name: t('nav.animalGuide'), href: '/animal-guide' },
		{ name: t('nav.medicalSupport'), href: '/medical-support' },
  ];

  // Choose your preferred language selector component
  const LanguageSelector = ({ isScrolled, currentLanguage, onLanguageChange }) => {
    // Option 1: Toggle Switch (recommended)
    return (
      <div className="relative">
        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
          <button
            onClick={() => onLanguageChange('en')}
            className={`
              relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ease-in-out
              ${currentLanguage === 'en' 
                ? 'bg-primary text-white shadow-lg transform scale-105' 
                : `${isScrolled ? 'text-foreground/70' : 'text-white/70'} hover:text-primary`
              }
            `}
            aria-label="Switch to English"
          >
            {t('langFull.en')}
          </button>
          <button
            onClick={() => onLanguageChange('hi')}
            className={`
              relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ease-in-out
              ${currentLanguage === 'hi' 
                ? 'bg-primary text-white shadow-lg transform scale-105' 
                : `${isScrolled ? 'text-foreground/70' : 'text-white/70'} hover:text-primary`
              }
            `}
            aria-label="Switch to Hindi"
          >
            {t('langFull.hi')}
          </button>
        </div>
      </div>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-elegant border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 group cursor-pointer"
            aria-label={t('aria.goHome')}
          >
            <img 
              src={gopalanLogo} 
              alt="Gopalan Logo" 
              className="h-8 w-auto md:h-10"
            />
            <div className="font-playfair font-bold text-xl md:text-2xl">
              <span className={isScrolled ? "text-foreground" : "text-white"}>{t('brand')}</span>
              <span className="text-primary ml-1">{t('brandSuffix')}</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${isScrolled ? "text-foreground/80" : "text-white/80"} hover:text-primary font-inter font-medium transition-colors duration-200 relative group`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Improved Language Selector */}
            <LanguageSelector 
              isScrolled={isScrolled}
              currentLanguage={i18n.language}
              onLanguageChange={handleLanguageChange}
            />
            
            <Button
              variant="ghost"
              className={`font-inter ${isScrolled ? "text-foreground" : "text-white"}`}
              onClick={() => window.location.href = "/signup"}
            >
              {t('auth.signUp')}
            </Button>
            <Button
              variant="default"
              className="font-inter shadow-card hover:shadow-elegant"
              onClick={() => window.location.href = "/login"}
            >
              {t('auth.login')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? "text-foreground/80" : "text-white/80"} hover:text-primary transition-colors`}
            aria-label={t('aria.toggleMenu')}
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute top-0 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 top-2.5' : ''
              }`}></span>
              <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute top-5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 top-2.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-border/20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block ${isScrolled ? "text-foreground/80" : "text-white/80"} hover:text-primary font-inter font-medium transition-colors duration-200 py-2`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-3 border-t border-border/20">
              {/* Mobile Language Selector */}
              <LanguageSelector 
                isScrolled={isScrolled}
                currentLanguage={i18n.language}
                onLanguageChange={handleLanguageChange}
              />
              
              <Button variant="ghost" className={`w-full font-inter ${isScrolled ? "text-foreground" : "text-white"}`}>
                {t('auth.signIn')}
              </Button>
              <Button variant="default" className="w-full font-inter">
                {t('auth.login')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
