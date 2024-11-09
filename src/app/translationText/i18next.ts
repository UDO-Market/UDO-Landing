import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources";

const userLanguage = navigator.language
const lng = userLanguage.startsWith('ru') ? 'ru' : 'en'

i18n.use(initReactI18next).init({
  resources,
  lng: lng,
  interpolation: {
    escapeValue: false,
  },
});
