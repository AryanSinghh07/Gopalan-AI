import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import bundled resources (will be replaced by dynamic JSON if needed)
import en from "./locales/en/translation.json";
import hi from "./locales/hi/translation.json";

// Read persisted language from localStorage if available
const persistedLanguage = typeof window !== 'undefined' 
  ? (window.localStorage.getItem('i18nextLng') || 'en') 
  : 'en';

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
    },
    lng: persistedLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
  });

// Persist language changes and keep <html lang> in sync for SEO/screen readers
if (typeof window !== 'undefined') {
  document.documentElement.lang = persistedLanguage;
  i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
    try {
      window.localStorage.setItem('i18nextLng', lng);
    } catch (_) {
      // ignore persistence errors
    }
  });
}

export default i18n;


