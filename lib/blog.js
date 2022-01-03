import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";
import getAllFilesRecursively from "../utils/files";
import mdxComponents from "../components/mdxComponents";
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const root = process.cwd();

export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, "");
}

export function dateSortDesc(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

export async function getAllFilesFrontMatter(folder) {
  const prefixPaths = path.join(root, folder);

  const files = getAllFilesRecursively(prefixPaths);

  const allFrontMatter = [];

  files.forEach((file) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, "/");
    // Remove Unexpected File
    if (path.extname(fileName) !== ".md" && path.extname(fileName) !== ".mdx") {
      return;
    }
    const source = fs.readFileSync(file, "utf8");
    const { data } = matter(source);
    allFrontMatter.push({ ...data, slug: formatSlug(fileName) });
  });

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date));
}

export function getFiles(type) {
  const prefixPaths = path.join(root, type);
  const files = getAllFilesRecursively(prefixPaths);
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files
    .map((file) => file.slice(prefixPaths.length + 1).replace(/\\/g, "/"))
    .filter(
      (file) => path.extname(file) === ".md" || path.extname(file) === ".mdx"
    );
}

export async function getFileBySlug(type, slug) {
  const mdxPath = path.join(root, type, `${slug}.mdx`);
  const mdPath = path.join(root, type, `${slug}.md`);
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, "utf8")
    : fs.readFileSync(mdPath, "utf8");

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    components: mdxComponents,
    mdxOptions: {
      remarkPlugins: [
        // imgToJsx,
      ],
      inlineNotes: true,
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        // () => {
        //   return (tree) => {
        //     visit(tree, 'element', (node, index, parent) => {
        //       let [token, type] = node.properties.className || []
        //       if (token === 'token') {
        //         node.properties.className = [tokenClassNames[type]]
        //       }
        //     })
        //   }
        // },
      ],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      readingTime: readingTime(content),
      slug: slug || null,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...data,
    },
  };
}
