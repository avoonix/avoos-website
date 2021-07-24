import Link from "next/link";
import { getGalleryData } from "../../lib/gallery";
import styles from "../../styles/gallery.module.css";
import IconLink from "../../components/IconLink";
import { mdiArrowLeft } from "@mdi/js";
import Layout from "../../components/Layout";
import { useTranslation } from "react-i18next";
import LazyImage from "../../components/LazyImage";
import { getImageTitle } from "../../utils/i18n";
import { getSlug } from "../../utils/img";
import AspectRatio from "../../components/AspectRatio";

export default function Gallery({ allGalleryData, nsfw }) {
  const { t } = useTranslation();

  return (
    <Layout
      meta={{
        title: t("avoonixGallery"),
        description: t("galleryDescription", { count: allGalleryData.length }),
        image: "/collage.png",
      }}
    >
      <div>
        <IconLink href="/" iconPath={mdiArrowLeft} text={t("home")} />
      </div>
      <div>
        <h1>{nsfw ? t("nsfwGallery") : t("gallery")}</h1>
      </div>
      <div className={styles.grid}>
        {allGalleryData.map(({ id, path, grid, color, title, artist }) => (
          <div
            id={id}
            className={styles.gridItem}
            key={id}
            style={{
              gridColumn: `span ${grid.w}`,
              gridRow: `span ${grid.h}`,
            }}
          >
            <AspectRatio ratio={grid.h / grid.w}>
              <Link href={`/gallery/${getSlug({ path, id })}`}>
                <a title={getImageTitle({ title, artist, t })}>
                  <LazyImage loaderColor={color} src={path} />
                </a>
              </Link>
            </AspectRatio>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allGalleryData = getGalleryData({ hideNsfw: true });
  return {
    props: {
      allGalleryData,
      nsfw: false,
    },
  };
}
