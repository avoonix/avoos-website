import IconLink from "../../components/IconLink";
import { mdiArrowLeft, mdiPageNext } from "@mdi/js";
import Layout from "../../components/Layout";
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from "../../lib/blog";
import { formatPostDate } from "../../utils/post";
import LazyImage from "../../components/LazyImage";
import AspectRatio from "../../components/AspectRatio";
import Link from "next/link";
import styles from "../../styles/blog.module.css";
import MarkdownRenderer from "../../components/MarkdownRenderer";
import NarrowSection from "../../components/common/NarrowSection";

export default function Post({ post: { mdxSource, frontMatter }, prev, next }) {

  return (
    <Layout
      fullWidth
      meta={{
        title: `${frontMatter.title} - Avoonix`,
        description: frontMatter.summary,
        image: frontMatter?.images?.[0] || undefined,
      }}
    >
      <NarrowSection>
        <IconLink href="/blog" iconPath={mdiArrowLeft} text="Blog" />
      </NarrowSection>

      <div style={{ height: "80vh", position: "relative" }}>
        <LazyImage width="100" height="100" alt="low poly background" loaderColor="#e47ec5" src={frontMatter?.images?.[0] || "/images/blog/lowpoly.png"} rounded={false} className={styles.postImage} />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <NarrowSection>
            <div>
              <div>
                {Math.ceil(frontMatter.readingTime.minutes)} minutes read
              </div>
              <div>
                {frontMatter.tags.map((tag, idx) => (
                  <span key={idx}>
                    {idx ? <>&bull;</> : ""} {` ${tag} `}
                  </span>
                ))}
              </div>
            </div>
            <h1 style={{ fontSize: "3rem" }}>{frontMatter.title}</h1>
            <div style={{ display: "flex", marginBottom: 8 }}>
              <div style={{ position: "relative", width: 48 }}>
                <AspectRatio ratio={1}>
                  <Link href="/">
                    <a title="Avoonix">
                      <LazyImage alt="Avoonix" width="100" height="100" title="Avoonix" loaderColor="#ffd4f1" src="/images/avoonix/avoo-headshot-happy.png" loaderBorderRadius="50%" className={styles.authorImage} />
                    </a>
                  </Link>
                </AspectRatio>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  paddingLeft: 8,
                }}
              >
                <div>
                  <Link href="/">
                    <a title="Avoonix">Avoonix</a>
                  </Link>
                </div>
                <div>
                  <time dateTime={frontMatter.date}>{formatPostDate(frontMatter.date)}</time>{" "}
                </div>
              </div>
            </div>
          </NarrowSection>
        </div>
      </div>

      <NarrowSection as="article">
        <MarkdownRenderer source={mdxSource} />
      </NarrowSection>

      {prev || next ? (
        <NarrowSection>
          <h3>Other Posts</h3>
          {prev && <IconLink href={`/blog/${prev.slug}`} iconPath={mdiPageNext} text={prev.title} title={prev.title} />}
          {next && <IconLink href={`/blog/${next.slug}`} iconPath={mdiPageNext} text={next.title} title={next.title} />}
        </NarrowSection>
      ) : null}
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = getFiles("blog");
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split("/"),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter("blog");
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join("/"));
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = await getFileBySlug("blog", params.slug.join("/"));

  // TODO: rss
  //   // rss
  //   const rss = generateRss(allPosts)
  //   fs.writeFileSync('./public/index.xml', rss)

  return { props: { post, prev, next } };
}
