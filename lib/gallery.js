import fs from "fs";
import path from "path";
import YAML from "yaml";
import i18n from "../utils/i18n";

const getMeta = () => {
  const fileContents = YAML.parse(
    fs.readFileSync(path.join(process.cwd(), "meta.yaml"), "utf8")
  );
  for (const image of Object.values(fileContents.gallery)) {
    image.title = image.meta[process.env.NEXT_PUBLIC_I18N_LOCALE].title;
    image.description =
      image.meta[process.env.NEXT_PUBLIC_I18N_LOCALE].description;
    if (!image.description) {
      image.description = i18n.t("fallbackDescription", {
        artist: image.artist,
        title: image.title || i18n.t("drawing"),
      });
    }
    delete image.meta;
  }
  return fileContents;
};

export function getGalleryData() {
  return Object.entries(getMeta().gallery).map(([path, info]) => ({
    ...info,
    path: `/images/${path}`,
  }));
}

export function getAllImageIds(excluded = []) {
  return getGalleryData()
    .filter((info) => excluded.indexOf(info.id) === -1)
    .map((info) => ({
      params: { id: info.id },
    }));
}

export function getImageData(id) {
  return getGalleryData().find((g) => g.id === id);
}

export function getArtistData(name) {
  const data = getMeta().artists[name];
  if (!data) {
    throw new Error(`unknown artist ${name}`);
  }
  return { ...data, name };
}
