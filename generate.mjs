import glob from "glob";
import fs from "fs";
import path from "path";
import YAML from "yaml";
import { customAlphabet } from "nanoid";
import ColorThief from "colorthief";
import prompts from "prompts";
import open from "open";
import jimp from "jimp";

const nanoid = customAlphabet(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  3
);

const imagesDirectory = path.join(process.cwd(), "images");

const fileContents = YAML.parse(fs.readFileSync("meta.yaml", "utf8")) || {};

fileContents.gallery = fileContents.gallery || {};

fileContents.artists = fileContents.artists || {};

fileContents.tags = fileContents.tags || {};

const prompt = async (path, message) => {
  await open(`images/${path}`, { wait: true });
  const response = await prompts({
    type: "text",
    name: "name",
    message: message,
  });
  return response.name;
};

const promptTags = async (path) => {
  const p = await Promise.all([
    open(`images/${path}`, { wait: true }),
    await prompts({
      type: "autocompleteMultiselect",
      name: "tags",
      message: "Tags",
      choices: Object.entries(fileContents.tags).map(([tag, translations]) => ({
        title: translations.en,
        value: tag,
      })),
    }),
  ]);
  return p[1].tags;
};

const titles = {};

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
      if (
        !fileContents.gallery[match].tags ||
        !fileContents.gallery[match].tags.length
      ) {
        fileContents.gallery[match].tags = await promptTags(match);
      }
      if (!fileContents.gallery[match].color) {
        const color = await ColorThief.getColor(path.join("images", match));
        fileContents.gallery[match].color =
          "#" + color.map((c) => c.toString(16)).join("");
      }
      if (!fileContents.gallery[match].width) {
        const img = await jimp.read(path.join("images", match));
        fileContents.gallery[match].width = img.getWidth();
        fileContents.gallery[match].height = img.getHeight();
      }
      if (!fileContents.gallery[match].meta.en.title) {
        console.log(`${match} has no title!`);
      }
      const meta = fileContents.gallery[match].meta;
      if (titles[meta.en.title]) {
        console.log("duplicate title: ", meta.en.title);
      }
      titles[meta.en.title] = true;
      if (titles[meta.de.title]) {
        console.log("duplicate title: ", meta.de.title);
      }
      titles[meta.de.title] = true;
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
          const newName = prompt(p, `New filename for ${name}`);
          if (newName && newName.split("-").length >= 3) {
            name = newName;
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
