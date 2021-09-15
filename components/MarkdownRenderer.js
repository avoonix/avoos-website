import mdxComponents from "./mdxComponents";
import { MDXRemote } from "next-mdx-remote";

export default function MarkdownRenderer({ source }) {
  return <MDXRemote {...source} components={mdxComponents} />;
}
