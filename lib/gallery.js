import fs from "fs";
import path from "path";
import seedrandom from "seedrandom";
import YAML from "yaml";
import { getSlug } from "../utils/img";

const getMeta = () => {
  const fileContents = YAML.parse(fs.readFileSync(path.join(process.cwd(), "meta.yaml"), "utf8"));
  for (const image of Object.values(fileContents.gallery)) {
    image.title = image.meta[process.env.NEXT_PUBLIC_I18N_LOCALE].title;
    image.description = image.meta[process.env.NEXT_PUBLIC_I18N_LOCALE].description;
    image.alt = image.meta[process.env.NEXT_PUBLIC_I18N_LOCALE].alt;
    delete image.meta;
  }
  return fileContents;
};

export function getGalleryData({ tag = null, artist = null } = {}) {
  const meta = getMeta();
  return Object.entries(meta.gallery)
    .filter(([path, info]) => !tag || info.tags.indexOf(tag) !== -1)
    .filter(([path, info]) => !artist || info.artist.indexOf(artist) !== -1)
    .map(([path, info]) => ({
      ...info,
      path: `/images/${path}`,
      tags: info.tags.map((t) => ({ id: t, translation: meta.tags[t][process.env.NEXT_PUBLIC_I18N_LOCALE] })),
    }));
}

export function getImageData(id) {
  return getGalleryData().find((g) => g.id === id);
}

export function getArtistData(id) {
  const data = getMeta().artists[id];
  if (!data) {
    throw new Error(`unknown artist ${id}`);
  }
  return { ...data, id };
}

export function getTags() {
  return Object.entries(getMeta().tags).map(([tag, translations]) => ({
    id: tag,
    translation: translations[process.env.NEXT_PUBLIC_I18N_LOCALE],
  }));
}

export function getArtists() {
  return Object.entries(getMeta().artists).map(([artist, { url, name }]) => ({
    id: artist,
    url,
    name,
  }));
}

function getAndRemoveImageThatMatches(pool, w, h) {
  for (const image of pool) {
    if (image.grid.w <= w && image.grid.h <= h) {
      pool.splice(pool.indexOf(image), 1);
      return image;
    }
  }
}

function place(placed, pool, { w, h }) {
  if (w <= 0 || h <= 0) return;
  // we have to fill the w and h of the space as efficiently as possible

  let heightPlaced = 0;
  while (heightPlaced < h && pool.length) {
    const nextMatch = getAndRemoveImageThatMatches(pool, w, h - heightPlaced);
    if (!nextMatch) {
      return;
    }
    placed.push(nextMatch);
    heightPlaced += nextMatch.grid.h;
    // fill the remaining width
    place(placed, pool, { w: w - nextMatch.grid.w, h: nextMatch.grid.h });
  }
}

export function layoutGallery(images, seed) {
  const areaImportance = 0.5; // 0-1 - the more important large areas are, the more likely they end up at the beginning
  const random = seedrandom(seed);
  const pool = shuffle(images, seed).sort((a, b) => (random() < areaImportance ? b.grid.w * b.grid.h - a.grid.w * a.grid.h : random() - 0.5));
  if (pool.length === 0) throw new Error("gallery doesn't contain images");
  const placed = [];

  place(placed, pool, { w: 4, h: Infinity });

  return placed;
}

export function shuffle(arr, seed) {
  const random = seedrandom(seed);
  return arr.sort(() => random() - 0.5);
}
