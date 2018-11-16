import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import backend from "i18next-xhr-backend";
import detector from "i18next-browser-languagedetector";
import translationEN from './locales/en/translation.json';
import translationZH from './locales/zh/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  zh: {
    translation: translationZH
  }
};

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "zh",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
export default i18n;