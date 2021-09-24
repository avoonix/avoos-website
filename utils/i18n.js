import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../lang/en.json";
import de from "../lang/de.json";

if (["en", "de"].indexOf(process.env.NEXT_PUBLIC_I18N_LOCALE) === -1) {
  throw new Error("invalid NEXT_PUBLIC_I18N_LOCALE");
}

export const getImageTitle = ({ title, artist, t }) => {
  if (title) {
    return t("imageTitle", {
      artist,
      title,
    });
  }
  throw new Error("no title");
};

const resources =
  process.env.NEXT_PUBLIC_I18N_LOCALE === "de"
    ? { de: { translation: de } }
    : { en: { translation: en } };

i18n.use(initReactI18next).init({
  resources,
  lng: process.env.NEXT_PUBLIC_I18N_LOCALE,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  detection: false,
  preload: ["de", "en"],
  load: ["de", "en"],
  // fallbackLng: "en",
});

export default i18n;
