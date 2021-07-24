import fs from "fs";
import path from "path";
import YAML from "yaml";
import { getSlug } from "../utils/img";

const getMeta = () => {
  const fileContents = YAML.parse(
    fs.readFileSync(path.join(process.cwd(), "meta.yaml"), "utf8")
  );
  for (const image of Object.values(fileContents.gallery)) {
    image.title = image.meta[process.env.NEXT_PUBLIC_I18N_LOCALE].title;
    image.description =
      image.meta[process.env.NEXT_PUBLIC_I18N_LOCALE].description;
    image.alt = image.meta[process.env.NEXT_PUBLIC_I18N_LOCALE].alt;
    delete image.meta;
  }
  return fileContents;
};

export function getGalleryData({hideSfw = false, hideNsfw = false} = {}) {
  const meta = getMeta();
  return Object.entries(meta.gallery).filter(([path, info]) => {
    if(hideSfw) return info.tags.indexOf("sfw") === -1;
    if(hideNsfw) return info.tags.indexOf("sfw") !== -1;
    return true;
  }).map(([path, info]) => ({
    ...info,
    path: `/images/${path}`,
    tags: info.tags.map(
      (t) => meta.tags[t][process.env.NEXT_PUBLIC_I18N_LOCALE]
    ),
    isNsfw: info.tags.indexOf("sfw") === -1,
  }));
}

export function getAllImageIds(excluded = []) {
  return getGalleryData()
    .filter((info) => excluded.indexOf(info.id) === -1)
    .map((info) => ({
      params: { id: getSlug(info) },
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
