import glob from "glob";
import fs from "fs";
import path from "path";
import YAML from "yaml";
import { customAlphabet } from "nanoid";
import ColorThief from "colorthief";
import prompts from "prompts";
import open from "open";

const nanoid = customAlphabet(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  3
);

const imagesDirectory = path.join(process.cwd(), "images");

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
        const color = await ColorThief.getColor(path.join("images", match));
        fileContents.gallery[match].color =
          "#" + color.map((c) => c.toString(16)).join("");
      }
      if (!fileContents.gallery[match].meta.en.title) {
        console.log(`${match} has no title!`);
      }
    }
    for (const artist of Object.keys(fileContents.artists)) {
      const p = `public/images/${artist}`;
      if (!fs.existsSync(p)) {
        fs.mkdirSync(p);
      }
    }
    const withNewPaths = {};
    let askNames = true;
    for (const [p, meta] of Object.entries(fileContents.gallery)) {
      let name = path.basename(p, path.extname(p));
      if (name.split("-").length < 3) {
        if (askNames) {
          await open(`images/${p}`, { wait: true });
          const response = await prompts({
            type: "text",
            name: "name",
            message: `New filename for ${name}`,
          });
          if (response.name && response.name.split("-").length >= 3) {
            name = response.name;
          } else {
            askNames = false;
          }
        }
      }
      const newP = path.join(path.dirname(p), `${name}${path.extname(p)}`);
      if (newP !== p) {
        fs.renameSync(`images/${p}`, `images/${newP}`);
        meta.oldPath = p;
      }
      withNewPaths[newP] = meta;
    }

    fileContents.gallery = withNewPaths;
    fs.writeFileSync("meta.yaml", YAML.stringify(fileContents), "utf8");
  }
);
