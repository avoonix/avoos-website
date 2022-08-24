import { mdiArrowLeft } from "@mdi/js";
import NarrowSection from "../../../components/common/NarrowSection";
import List from "../../../components/gallery/List";
import IconLink from "../../../components/IconLink";
import ImageListMeta from "../../../components/seo/ImageListMeta";
import { getArtistData, getArtists, getGalleryData } from "../../../lib/gallery";

export default function ByArtist({ allGalleryData, artistData }) {
  const imagesBy = `Art by ${artistData.name}`;
  return (
    <>
      <ImageListMeta title={imagesBy} description="" />
      <NarrowSection>
        <IconLink href="/gallery" iconPath={mdiArrowLeft} text="Gallery" />
      </NarrowSection>
      <List allGalleryData={allGalleryData} title={imagesBy} />;
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
