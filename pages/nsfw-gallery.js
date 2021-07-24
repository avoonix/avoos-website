import { getGalleryData } from "../lib/gallery";
import Gallery from "./gallery";

export default function NsfwGallery({ ...galleryProps }) {
  return <Gallery {...galleryProps} />;
}

export async function getStaticProps() {
  const allGalleryData = getGalleryData({ hideSfw: true });
  return {
    props: {
      allGalleryData,
      nsfw: true,
    },
  };
}
