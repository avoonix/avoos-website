import { getGalleryData, getTags, layoutGallery } from "../../../lib/gallery";
import List from "../../../components/gallery/List";
import NarrowSection from "../../../components/common/NarrowSection";
import IconLink from "../../../components/IconLink";
import { mdiArrowLeft } from "@mdi/js";
import ImageListMeta from "../../../components/seo/ImageListMeta";

export default function Gallery({ allGalleryData, tagData }) {
  const imagesTaggedWith = `Art Containing ${tagData.translation}`;
  return (
    <>
      <ImageListMeta title={`${tagData.translation} - Gallery`} description={imagesTaggedWith} />
      <NarrowSection>
        <IconLink href="/gallery" iconPath={mdiArrowLeft} text="Gallery" />
      </NarrowSection>
      <List allGalleryData={allGalleryData} title={imagesTaggedWith} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const { tag } = params;
  const allGalleryData = layoutGallery(getGalleryData({ tag }), tag);
  const tagData = getTags().find((t) => t.id === tag);
  return {
    props: {
      allGalleryData,
      tagData,
    },
  };
}

export async function getStaticPaths() {
  const tags = getTags();
  const paths = tags.map((tag) => ({
    params: { tag: tag.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
