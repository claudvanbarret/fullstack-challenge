import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptBR from "./ptBR.json";
import enUS from "./enUS.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      pt: {
        translation: ptBR
      },
      en: {
        translation: enUS
      }
    },
    lng: "pt",
    fallbackLng: "pt",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
