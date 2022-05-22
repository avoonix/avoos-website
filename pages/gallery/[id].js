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
import NarrowSection from "../../components/common/NarrowSection";

export default function Image({ imageData, artistData, children }) {
  const { t } = useTranslation();

  const back = imageData.isNsfw ? `/nsfw-gallery#${imageData.id}` : `/gallery#${imageData.id}`;
  const backText = imageData.isNsfw ? t("nsfwGallery") : t("gallery");

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
      <NarrowSection>
        <IconLink href={back} iconPath={mdiArrowLeft} text={backText} />
      </NarrowSection>
      <article>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a rel="nofollow" href={`https://i.avoonix.com${imageData.path}`} target="_blank" style={{ position: "relative" }}>
            <LazyImage
              loaderColor={imageData.color}
              src={imageData.path}
              style={{
                position: "relative",
                maxWidth: `${imageData.width}px`,
                maxHeight: "100vh",
                objectFit: "contain",
              }}
              alt={imageData.alt || imageData.description}
              title={imageData.title}
            />
          </a>
        </div>

        <NarrowSection>
          <h1>{imageData.title}</h1>
          <Artist name={artistData.name} url={artistData.url} />
          <p style={{ whiteSpace: "pre-wrap" }}>{imageData.description}</p>
          <Tags tags={imageData.tags} />
          {/* <Characters /> */}
        </NarrowSection>
      </article>
      <NarrowSection>{children}</NarrowSection>
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
