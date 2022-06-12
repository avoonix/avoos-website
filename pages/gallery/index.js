import { mdiArrowLeft, mdiTag } from "@mdi/js";
import { useTranslation } from "react-i18next";
import NarrowSection from "../../components/common/NarrowSection";
import IconLink from "../../components/IconLink";
import TagListMeta from "../../components/seo/TagListMeta";
import { getTags } from "../../lib/gallery";

export default function Tags({ tags }) {
  const { t } = useTranslation();

  return (
    <>
      <TagListMeta />
      <NarrowSection>
        <IconLink href="/" iconPath={mdiArrowLeft} text={t("home")} />
      </NarrowSection>
      <NarrowSection as="main">
        <h1>{t("gallery")}</h1>
        {tags.map(({ id, translation }) => (
          <IconLink key={id} href={`/gallery/tagged/${id}`} iconPath={mdiTag} text={translation} title={translation} />
        ))}
      </NarrowSection>
    </>
  );
}

export async function getStaticProps() {
  const tags = getTags();

  return {
    props: {
      tags,
    },
  };
}
