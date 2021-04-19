const Jimp = require("jimp");
const fs = require("fs");
const YAML = require("yaml");
const path = require("path");

const meta = YAML.parse(
  fs.readFileSync(path.join(process.cwd(), "meta.yaml"), "utf8")
);

(async () => {
  const collage = new Jimp(1024, 1024, "#ffd4f1");
  const start = Date.now();
  const jimpImages = await Promise.all(
    Object.keys(meta.gallery)
      .reverse()
      .map((p) => Jimp.read(path.join("public/images", p)))
  );

  const drawGrid = (offset) => {
    for (let i = 0; i < 8; ++i) {
      for (let j = 0; j < 8; ++j) {
        const clone = jimpImages[
          Math.floor(Math.random() * jimpImages.length)
        ].clone();
        clone.cover(128, 128);
        collage.blit(clone, i * 128 + offset, j * 128 + offset);
      }
    }
  };
  drawGrid(0);
  drawGrid(-64);
  drawGrid(64);
  for (let i = 0; i < 3; ++i) {
    for (const image of jimpImages) {
      const size = 100 + 100 * Math.random();
      const clone = image.clone();
      clone.rotate(-20 + 40 * Math.random());
      clone.contain(size, size);
      collage.blit(
        clone,
        1024 * Math.random() - size / 2,
        1024 * Math.random() - size / 2
      );
    }
  }
  const duration = Date.now() - start;
  console.log(`${duration / 1000}s`);
  await collage.writeAsync("./public/collage.png");
})();
