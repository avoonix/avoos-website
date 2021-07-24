import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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

const resources = {
  en: {
    translation: {
      title: "Avoonix the Pink Fox",
      profile: "Profile",
      contact: "Contact",
      itemDescription: "A pink furry fox",
      description:
        "Hewwo! I'm Avoonix, a pink furry fox from Austria :3. Among other things, I am passionate about programming, and love hugs and collars. ",
      gallery: "Gallery (sfw)",
      nsfwGallery: "Gallery (nsfw)",
      avoonixGallery: "Avoonix' Gallery",
      galleryDescription:
        "A collection of {{count}} drawings of Avoo. Some of these may be yiff :3",
      home: "Home",
      e6favorites: "e6 Favorites",
      reference: "Reference",
      back: "Back",
      artist: "Artist",
      copied: "Copied to clipboard!",
      imageTitle: "{{title}} by {{artist}}",
      pageNotFound: "Page not found",
      tags: "Tags",
      blog: "Blog",
      blogTitle: "Blog",
      blogDescription: "Thoughts and stuff",
      readMore: "Read More",
      minutesRead: "minutes read",
      continueReading: "Continue Reading",
    },
  },
  de: {
    translation: {
      title: "Avoonix der pinke Fuchs",
      profile: "Profil",
      contact: "Kontakt",
      itemDescription: "Ein pinker Fuchs",
      description:
        "Hewwo! Ich bin Avoonix, ein pinker Fuchs aus Österreich :3. Unter anderem programmiere ich leidenschaftlich und liebe Umarmungen und Halsbänder. ",
      gallery: "Galerie (sfw)",
      nsfwGallery: "Galerie (nsfw)",
      avoonixGallery: "Avoonix' Galerie",
      galleryDescription:
        "Eine Sammlung von {{count}} Bildern von Avoo. Etwas Yiff ist auch dabei :3",
      home: "Startseite",
      e6favorites: "e6 Favoriten",
      reference: "Referenz",
      back: "Zurück",
      artist: "Künstler",
      copied: "In Zwischenablage kopiert!",
      imageTitle: "{{title}} von {{artist}}",
      pageNotFound: "Seite wurde nicht gefunden",
      tags: "Tags",
      blog: "Blog",
      blogTitle: "Blog",
      blogDescription: "Gedanken und Stuff",
      readMore: "Weiterlesen",
      minutesRead: "Minuten Lesedauer",
      continueReading: "Weitere Posts",
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
