import { getArtistData, getGalleryData, getImageData, shuffle } from "../../lib/gallery";
import IconLink from "../../components/IconLink";
import { mdiArrowLeft, mdiBrush } from "@mdi/js";
import Artist from "../../components/Artist";
import { useTranslation } from "react-i18next";
import { getImageTitle } from "../../utils/i18n";
import LazyImage from "../../components/LazyImage";
import Tags from "../../components/Tags";
import NarrowSection from "../../components/common/NarrowSection";
import { getSlug } from "../../utils/img";
import List from "../../components/gallery/List";
import Color from "../../components/Color";
import ImageMeta from "../../components/seo/ImageMeta";

export default function Image({ imageData, artistData, allGalleryData }) {
  const { t } = useTranslation();

  return (
    <>
      <ImageMeta imageData={imageData} artistData={artistData} />
      <NarrowSection>
        <IconLink href="/gallery" iconPath={mdiArrowLeft} text={t("gallery")} />
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
      {imageData.id === "ref" && (
        <NarrowSection>
          <Color color="#ff55c8" />
          <Color color="#ffd4f1" />
          <Color color="#316ac6" />
          <Color color="#f6d03a" />
          <Color color="#4bc04b" />
          <Color color="#f6a39f" />
          <Color color="#3b3638" />
          <div>Or get the <a href="https://i.avoonix.com/palette/avoonix-color-palette.gpl" download>color palette for GIMP, Krita, Inkscape, etc</a></div>
        </NarrowSection>
      )}

      {allGalleryData.length ? <List allGalleryData={allGalleryData} title={t("imagesBy", { artist: artistData.name })} /> : null}
      <NarrowSection>
        <IconLink href={`/gallery/by/${artistData.id}`} iconPath={mdiBrush} text={t("moreImagesBy", { artist: artistData.name })} />
      </NarrowSection>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getGalleryData().map((info) => ({
    params: { id: getSlug(info) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const imageData = getImageData(params.id.split("-")[0]);
  const artistData = getArtistData(imageData.artist);
  const allGalleryData = shuffle(
    getGalleryData({ artist: imageData.artist })
      .filter((im) => im.id !== imageData.id)
      .map((id) => ({ ...id, grid: { w: 1, h: 1 } }))
  );

  const maxShown = 4;

  return {
    props: {
      imageData,
      artistData,
      allGalleryData: allGalleryData.slice(0, maxShown),
      galleryOmitted: Math.max(0, allGalleryData.length - maxShown),
    },
  };
}
