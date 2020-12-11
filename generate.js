const fs = require("fs");
const path = require("path");
const Mustache = require("mustache");

const writeFile = (filename, data) => {
  if (!fs.existsSync(path.dirname(filename))) {
    fs.mkdirSync(path.dirname(filename));
  }
  fs.writeFileSync(filename, data);
};

const copyFile = (source, destination) => {
  const data = fs.readFileSync(source);
  writeFile(destination, data);
};

const copyFiles = (source, destination) => {
  const files = fs.readdirSync(source);
  for (const file of files) {
    copyFile(`${source}/${file}`, `${destination}/${file}`);
  }
};

const languages = [
  {
    path: "",
    lang: "en",
    title: "Avoonix the Fox",
    description: "Hewwo! I'm Avoonix, a pink furry fox from Austria :3",
    profile: "Profile",
    contact: "Contact",
    itemDescription: "A pink furry fox",
  },
  {
    path: "de",
    lang: "de",
    title: "Avoonix der Fuchs",
    description: "Hewwo! Ich bin Avoonix, ein pinker Fuchs aus Österreich :3",
    profile: "Profil",
    contact: "Kontakt",
    itemDescription: "Ein pinker Fuchs",
    additionalTags: `
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "de"
          }]
        }
      </script>
      `,
  },
];

const common = {
  profilePictureUrl: "https://avoonix.com/images/day.webp",
  additionalTags: "",
};

const template = fs.readFileSync("./index.html", { encoding: "utf8" });

for (const language of languages) {
  const output = Mustache.render(template, { ...common, ...language });
  writeFile(`./output/${language.path}/index.html`, output);
}

copyFiles("./public", "./output");

const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

imagemin(["images/*.{jpg,png}"], {
  destination: "output/images",
  plugins: [imageminWebp({ preset: "drawing" })],
});
