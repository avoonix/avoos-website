import fs from "fs";
import prompts from "prompts";

(async () => {
  const response = await prompts({
    type: "text",
    name: "title",
    message: "Title"
  });

  const title = response.title;

  const fileName = title
  .toLowerCase()
  .replace(/[^a-zA-Z0-9 ]/g, '')
  .replace(/ /g, '-')
  .replace(/-+/g, '-')

  const d = new Date();
  const date = [
    d.getFullYear(),
    ("0" + (d.getMonth() + 1)).slice(-2),
    ("0" + d.getDate()).slice(-2),
  ].join("-");

  const frontMatter = `---
title: ${title}
date: '${date}'
tags: []
summary:
images: []
---
`;

  fs.writeFileSync(`blog/${fileName}.mdx`, frontMatter);
})();
