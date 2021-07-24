const fs = require("fs");
const globby = require('globby')
const YAML = require("yaml");
const path = require("path");
const prettier = require("prettier")

const getSlug = ({ path, id }) => {
  const parts = path.split("/");
  const base = parts[parts.length - 1];
  const baseParts = base.split(".");
  const baseWithoutExt = baseParts[0];
  return `${id}-${baseWithoutExt}`;
};

const prefix =
  process.env.NEXT_PUBLIC_I18N_LOCALE === "de"
    ? "https://de.avoonix.com"
    : "https://avoonix.com";

async function generateSiteMap() {
  const meta = YAML.parse(
    fs.readFileSync(path.join(process.cwd(), "meta.yaml"), "utf8")
  );

  const pages = [
    "/",
    "/gallery",
    "/nsfw-gallery",
    "/blog",
    ...Object.entries(meta.gallery).map(
      ([path, g]) => `/gallery/${getSlug({ path, id: g.id })}`
    ),
  ];

   const blogPages = (await globby([
    'blog/**/*.mdx',
    'blog/**/*.md',
  ])).map(path => path.replace(/\.mdx?/, "").replace(/^([^/])/, "/$1"))

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${[...pages, ...blogPages]
            .map(
              (page) =>
                `
                      <url>
                          <loc>${prefix}${page}</loc>
                      </url>
                  `
            )
            .join("")}
      </urlset>
  `;

  fs.writeFileSync(
    "public/_redirects",
    [
      "/de https://de.avoonix.com",
      "/en https://avoonix.com",
      "/reference /gallery/ref-avoonix-reference-sheet",
      "/ref /gallery/ref-avoonix-reference-sheet",
      "/collage.png https://i.avoonix.com/collage.png",
      "/collage.avif https://i.avoonix.com/collage.avif",
      "/collage.webp https://i.avoonix.com/collage.webp",
      ...Object.entries(meta.gallery).map(
        ([path, g]) => `/gallery/${g.id} /gallery/${getSlug({ path, id: g.id })}`
      ),
      ...Object.entries(meta.gallery).map(
        ([path, g]) => `/${g.id} /gallery/${getSlug({ path, id: g.id })}`
      ),
      ...Object.entries(meta.gallery).map(
        ([path, g]) => `/images/${g.oldPath} https://i.avoonix.com/images/${path}`
      ),
      ...Object.entries(meta.gallery).map(
        ([path, g]) => `/images/${path} https://i.avoonix.com/images/${path}`
      ),
    ].join("\n")
  );

  fs.writeFileSync("public/sitemap.xml", prettier.format(sitemap, {
    parser: "html"
  }));
}

generateSiteMap();
