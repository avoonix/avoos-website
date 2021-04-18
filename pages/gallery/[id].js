import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllImageIds, getArtistData, getImageData } from "../../lib/gallery";
import IconLink from "../../components/IconLink";
import { mdiArrowLeft } from "@mdi/js";
import Artist from "../../components/Artist";
import { useTranslation } from "react-i18next";

export default function Image({ imageData, artistData, children }) {
  const { t } = useTranslation();
  return (
    <Layout
      meta={{
        title: imageData.title,
        description: imageData.description,
        image: imageData.path,
      }}
      wide={true}
    >
      <div>
        <IconLink
          href={`/gallery#${imageData.id}`}
          iconPath={mdiArrowLeft}
          text={t("gallery")}
        />
      </div>
      <article>
        <article href={imageData.path} target="_blank">
          <a rel="nofollow" href={imageData.path}>
            <img
              src={imageData.path}
              style={{ width: "100%" }}
              alt={imageData.description}
              title={imageData.title}
            />
          </a>
        </article>
        <h1>{imageData.title}</h1>
        <Artist name={artistData.name} url={artistData.url} />
        <p style={{ whiteSpace: "pre-wrap" }}>{imageData.description}</p>
      </article>
      {children}
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
  const imageData = getImageData(params.id);
  const artistData = getArtistData(imageData.artist);

  return {
    props: {
      imageData,
      artistData,
    },
  };
}
