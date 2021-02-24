import glob from "glob";
import fs from "fs";
import path from "path";
import YAML from "yaml";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  3
);

const imagesDirectory = path.join(process.cwd(), "public/images");

const fileContents = YAML.parse(fs.readFileSync("meta.yaml", "utf8")) || {};

fileContents.gallery = fileContents.gallery || {};

fileContents.artists = fileContents.artists || {};

glob(
  "**/*.{png,jpg}",
  {
    cwd: imagesDirectory,
  },
  (err, matches) => {
    for (const match of matches) {
      const segments = match.split("/");
      const artist =
        segments.length >= 2 ? segments[segments.length - 2] : null;
      fileContents.gallery[match] = Object.assign(
        {
          id: nanoid(),
          artist,
          meta: {
            en: {
              title: "",
              description: "",
            },
            de: {
              title: "",
              description: "",
            },
          },
        },
        fileContents.gallery[match]
      );
      fileContents.artists[artist] = Object.assign(
        { url: "" },
        fileContents.artists[artist]
      );
    }
    fs.writeFileSync("meta.yaml", YAML.stringify(fileContents), "utf8");
  }
);
