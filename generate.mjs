import glob from "glob";
import fs from "fs";
import path from "path";
import YAML from "yaml";
import { customAlphabet } from "nanoid";
import ColorThief from "colorthief";

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
  async (err, matches) => {
    for (const match of matches) {
      const segments = match.split("/");
      const artist =
        segments.length >= 2 ? segments[segments.length - 2] : null;
      fileContents.gallery[match] = Object.assign(
        {
          id: nanoid(),
          artist,
          grid: {
            w: 1,
            h: 1,
          },
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
      if (!fileContents.gallery[match].color) {
        const color = await ColorThief.getColor(
          path.join("public/images", match)
        );
        fileContents.gallery[match].color =
          "#" + color.map((c) => c.toString(16)).join("");
      }
    }
    fs.writeFileSync("meta.yaml", YAML.stringify(fileContents), "utf8");
  }
);
