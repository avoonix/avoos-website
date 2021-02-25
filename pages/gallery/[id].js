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
        title: imageData.metaTitle,
        description: imageData.metaDescription,
        image: imageData.path,
      }}
    >
      <div>
        <IconLink
          href={`/gallery#${imageData.id}`}
          iconPath={mdiArrowLeft}
          text={t("gallery")}
        />
      </div>
      <a href={imageData.path} target="_blank">
        <img
          src={imageData.path}
          style={{ width: "100%" }}
          alt={imageData.metaDescription}
          title={imageData.metaTitle}
        />
      </a>
      <Artist name={artistData.name} url={artistData.url} />
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
