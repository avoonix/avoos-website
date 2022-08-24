import IconLink from "../../components/IconLink";
import { mdiArrowLeft, mdiPageNext } from "@mdi/js";
import Layout from "../../components/Layout";
import { getAllFilesFrontMatter } from "../../lib/blog";
import { formatPostDate } from "../../utils/post";
import classNames from "classnames";

export default function Posts({ posts }) {

  return (
    <Layout
      meta={{
        title: "Blog",
        description: "Thoughts and stuff",
        image: "/collage.png",
      }}
    >
      <div>
        <IconLink href="/" iconPath={mdiArrowLeft} text="Home" />
      </div>
      <div>
        <h1>Blog</h1>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((frontMatter) => (
          <li key={frontMatter.slug}>
            <article style={{marginBottom: 12 * 2, border: "4px solid var(--light-pink)", padding: 8}} className={classNames("rounded")} >
              <h2 style={{marginTop: 0, marginBottom: 8}}>{frontMatter.title}</h2>
              {/* <time dateTime={frontMatter.date}>
                {formatPostDate(frontMatter.date)}
              </time> */}
              <div>{frontMatter.summary}</div>
              <IconLink
                href={`/blog/${frontMatter.slug}`}
                iconPath={mdiPageNext}
                text="Read More"
                title={frontMatter.title}
                style={{margin: 0, marginTop: 8}}
              />
            </article>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");
  return { props: { posts } };
}
