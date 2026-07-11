import { Link } from "react-router-dom";
import { Camera, ArrowRight } from "lucide-react";
import gopalanLogo from "@/assets/gopalan-logo.png";

const exploreLinks = [
  { name: "Analyze an Animal", href: "/analyze" },
  { name: "Breed Guide", href: "/animal-guide" },
  { name: "Health & Diseases", href: "/medical-support" },
  { name: "Photo Guide", href: "/guide" },
];

const supportLinks = [
  { name: "Help & FAQ", href: "/help" },
  { name: "About Us", href: "/about" },
  { name: "Login", href: "/login" },
  { name: "Sign Up", href: "/signup" },
];

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden bg-gradient-hero text-white">
      {/* Ambient glow accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-0 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-16">
        <div className="max-w-6xl mx-auto">
          {/* CTA band */}
          <div className="glass rounded-2xl p-8 md:p-10 mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                Ready to score your animal?
              </h3>
              <p className="text-white/75">Upload one photo and get results in seconds.</p>
            </div>
            <Link
              to="/analyze"
              className="btn-lime inline-flex items-center gap-2 min-h-12 px-7 rounded-xl whitespace-nowrap"
            >
              <Camera className="h-5 w-5" />
              Analyze Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-5">
                <img src={gopalanLogo} alt="Gopalan AI logo" className="h-10 w-auto" loading="lazy" />
                <h3 className="font-display text-2xl font-bold text-white">
                  Gopalan<span className="text-accent"> AI</span>
                </h3>
              </div>
              <p className="text-white/75 mb-6 leading-relaxed max-w-md">
                AI-powered cattle and buffalo scoring using ArUco markers — helping Indian farmers
                measure, score, and care for their animals. Proudly supporting the Rashtriya Gokul Mission.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-full bg-white/10 text-white/80">Government of India</span>
                <span className="px-3 py-1.5 rounded-full bg-white/10 text-white/80">Rashtriya Gokul Mission</span>
                <span className="px-3 py-1.5 rounded-full bg-white/10 text-white/80">AI-Powered</span>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold mb-5 text-white">Explore</h4>
              <ul className="space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-white/75 hover:text-accent transition-colors inline-flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full transition-transform group-hover:scale-150" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold mb-5 text-white">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-white/75 hover:text-accent transition-colors inline-flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full transition-transform group-hover:scale-150" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/15 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>© {new Date().getFullYear()} Gopalan AI. Advancing agricultural technology for a better tomorrow.</p>
            <p>Made for the farmers of India 🇮🇳</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
