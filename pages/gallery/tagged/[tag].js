import { getGalleryData, getTags, layoutGallery } from "../../../lib/gallery";
import List from "../../../components/gallery/List";
import { useTranslation } from "react-i18next";
import NarrowSection from "../../../components/common/NarrowSection";
import IconLink from "../../../components/IconLink";
import { mdiArrowLeft } from "@mdi/js";
import ImageListMeta from "../../../components/seo/ImageListMeta";

export default function Gallery({ allGalleryData, tagData }) {
  const { t } = useTranslation();

  return (
    <>
    <ImageListMeta  title={t("galleryTitle", { tag: tagData.translation })} description={t("imagesTaggedWith", { tag: tagData.translation })}  />
      <NarrowSection>
        <IconLink href="/gallery" iconPath={mdiArrowLeft} text={t("gallery")} title={t("gallery")} />
      </NarrowSection>
      <List allGalleryData={allGalleryData} title={t("imagesTaggedWith", { tag: tagData.translation })} />
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
