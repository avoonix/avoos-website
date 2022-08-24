import { mdiArrowLeft, mdiTag } from "@mdi/js";
import NarrowSection from "../../components/common/NarrowSection";
import IconLink from "../../components/IconLink";
import TagListMeta from "../../components/seo/TagListMeta";
import { getTags } from "../../lib/gallery";

export default function Tags({ tags }) {

  return (
    <>
      <TagListMeta />
      <NarrowSection>
        <IconLink href="/" iconPath={mdiArrowLeft} text="Home" />
      </NarrowSection>
      <NarrowSection as="main">
        <h1>Gallery</h1>
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
