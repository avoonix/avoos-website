import i18n from "i18next";
import { initReactI18next } from "react-i18next";

if (["en", "de"].indexOf(process.env.NEXT_PUBLIC_I18N_LOCALE) === -1) {
  throw new Error("invalid NEXT_PUBLIC_I18N_LOCALE");
}

const resources = {
  en: {
    translation: {
      title: "Avoonix the Fox",
      profile: "Profile",
      contact: "Contact",
      itemDescription: "A pink furry fox",
      description: "Hewwo! I'm Avoonix, a pink furry fox from Austria :3",
      gallery: "Gallery",
      avoonixGallery: "Avoonix' Gallery",
      galleryDescription: "{{count}} fox images",
      home: "Home",
      e6favorites: "e6 Favorites",
      reference: "Reference",
      back: "Back",
      artist: "Artist",
      copied: "Copied to clipboard!",
      fallbackDescription: "\"{{title}}\" by {{artist}}",
      drawing: "Drawing",
    },
  },
  de: {
    translation: {
      title: "Avoonix der Fuchs",
      profile: "Profil",
      contact: "Kontakt",
      itemDescription: "Ein pinker Fuchs",
      description: "Hewwo! Ich bin Avoonix, ein pinker Fuchs aus Österreich :3",
      gallery: "Galerie",
      avoonixGallery: "Avoonix' Galerie",
      galleryDescription: "{{count}} Bilder",
      home: "Startseite",
      e6favorites: "e6 Favoriten",
      reference: "Referenz",
      back: "Zurück",
      artist: "Künstler",
      copied: "In Zwischenablage kopiert!",
      fallbackDescription: "\"{{title}}\" von {{artist}}",
      drawing: "Zeichnung",
    },
  },
};

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
});

export default i18n;
