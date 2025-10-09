import gopalanLogo from "@/assets/Gopalan Logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer id="contact" className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-16 relative overflow-hidden">
      {/* Subtle background pattern matching hero section */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.05),transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={gopalanLogo} 
                  alt="Gopalan Logo" 
                  className="h-10 w-auto"
                />
                <h3 className="font-playfair text-3xl font-bold text-white">{t('brand')} {t('brandSuffix')}</h3>
              </div>
              <p className="font-inter text-white/80 mb-6 leading-relaxed">
                {t('footer.description')}
              </p>
              <div className="space-y-2 text-sm font-inter text-white/70">
                <p>{t('footer.points.conservation')}</p>
                <p>{t('footer.points.breeding')}</p>
                <p>{t('footer.points.cvPowered')}</p>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-playfair text-xl font-semibold mb-6 text-white">{t('footer.keyFeatures')}</h4>
              <ul className="space-y-3 font-inter text-white/80">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  {t('footer.features.measurement')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  {t('footer.features.scoring')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  {t('footer.features.bpa')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  {t('footer.features.realtime')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  {t('footer.features.mobile')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  {t('footer.features.offline')}
                </li>
              </ul>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h4 className="font-playfair text-xl font-semibold mb-6 text-white">{t('footer.missionSupport')}</h4>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                  <h5 className="font-inter font-semibold mb-2 text-white">{t('footer.mission.gokul.title')}</h5>
                  <p className="font-inter text-sm text-white/70">{t('footer.mission.gokul.desc')}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                  <h5 className="font-inter font-semibold mb-2 text-white">{t('footer.mission.excellence.title')}</h5>
                  <p className="font-inter text-sm text-white/70">{t('footer.mission.excellence.desc')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="font-inter text-white/60 mb-4">{t('footer.copyright')}</p>
            <div className="flex justify-center space-x-8 text-sm font-inter">
              <span className="text-white/70">{t('footer.badges.gov')}</span>
              <span className="text-white/70">•</span>
              <span className="text-white/70">{t('footer.badges.gokul')}</span>
              <span className="text-white/70">•</span>
              <span className="text-white/70">{t('footer.badges.ai')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
