import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllImageIds, getArtistData, getImageData } from "../../lib/gallery";
import IconLink from "../../components/IconLink";
import { mdiArrowLeft } from "@mdi/js";
import Artist from "../../components/Artist";
import { useTranslation } from "react-i18next";
import { getImageTitle } from "../../utils/i18n";
import LazyImage from "../../components/LazyImage";
import Tags from "../../components/Tags";
import blogStyles from "../../styles/blog.module.css";

export default function Image({ imageData, artistData, children }) {
  const { t } = useTranslation();
  return (
    <Layout
      meta={{
        title:
          getImageTitle({
            title: imageData.title,
            artist: imageData.artist,
            t,
          }) + " - Avoonix",
        description: imageData.description,
        image: imageData.path,
      }}
      fullWidth
    >
      <div className={blogStyles.narrowSection}>
        <IconLink
          href={`/gallery#${imageData.id}`}
          iconPath={mdiArrowLeft}
          text={t("gallery")}
        />
      </div>
      <article>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            rel="nofollow"
            href={`https://i.avoonix.com${imageData.path}`}
            target="_blank"
            style={{ position: "relative" }}
          >
            <LazyImage
              loaderColor={imageData.color}
              src={imageData.path}
              style={{
                position: "relative",
                maxWidth: `${imageData.width}px`,
                maxHeight: "100vh",
              }}
              alt={imageData.alt || imageData.description}
              title={imageData.title}
            />
          </a>
        </div>

        <div className={blogStyles.narrowSection}>
          <h1>{imageData.title}</h1>
          <Artist name={artistData.name} url={artistData.url} />
          <p style={{ whiteSpace: "pre-wrap" }}>{imageData.description}</p>
          <Tags tags={imageData.tags} />
        </div>
      </article>
      <div className={blogStyles.narrowSection}>{children}</div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllImageIds(["ref"]);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const imageData = getImageData(params.id.split("-")[0]);
  const artistData = getArtistData(imageData.artist);

  return {
    props: {
      imageData,
      artistData,
    },
  };
}
