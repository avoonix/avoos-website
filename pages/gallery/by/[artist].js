import { mdiArrowLeft } from "@mdi/js";
import { useTranslation } from "react-i18next";
import NarrowSection from "../../../components/common/NarrowSection";
import List from "../../../components/gallery/List";
import IconLink from "../../../components/IconLink";
import ImageListMeta from "../../../components/seo/ImageListMeta";
import { getArtistData, getArtists, getGalleryData } from "../../../lib/gallery";

export default function ByArtist({ allGalleryData, artistData }) {
  const { t } = useTranslation();

  return (
    <>
      <ImageListMeta title={t("imagesBy", { artist: artistData.name })} />
      <NarrowSection>
        <IconLink href="/gallery" iconPath={mdiArrowLeft} text={t("gallery")} title={t("gallery")} />
      </NarrowSection>
      <List allGalleryData={allGalleryData} title={t("imagesBy", { artist: artistData.name })} />;
    </>
  );
}

export async function getStaticProps({ params }) {
  const { artist } = params;
  const allGalleryData = getGalleryData({ artist });
  const artistData = getArtistData(artist);

  return {
    props: {
      allGalleryData,
      artistData,
    },
  };
}

export async function getStaticPaths() {
  const artists = getArtists();
  const paths = artists.map((artist) => ({
    params: { artist: artist.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
