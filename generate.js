const fs = require("fs");
const path = require("path");
const Mustache = require("mustache");

const writeFile = (filename, data) => {
  if (!fs.existsSync(path.dirname(filename))) {
    fs.mkdirSync(path.dirname(filename));
  }
  fs.writeFileSync(filename, data);
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
  },
];

const template = fs.readFileSync("./index.html", { encoding: "utf8" });

for (const language of languages) {
  const output = Mustache.render(template, language);
  writeFile(`./output/${language.path}/index.html`, output);
}
