import fs from "fs";
import path from "path";
import YAML from "yaml";

const getMeta = () => {
  const fileContents = YAML.parse(
    fs.readFileSync(path.join(process.cwd(), "meta.yaml"), "utf8")
  );
  return fileContents.map((i) => ({
    ...i,
    metaTitle: i.meta[process.env.NEXT_PUBLIC_I18N_LOCALE].title,
    metaDescription: i.meta[process.env.NEXT_PUBLIC_I18N_LOCALE].description,
  }));
};

export function getGalleryData() {
  return Object.entries(getMeta().gallery).map(([path, info]) => ({
    ...info,
    path: `/images/${path}`,
  }));
}

export function getAllImageIds() {
  return getGalleryData().map((info) => ({
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
