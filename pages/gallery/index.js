import Link from "next/link";
import { getGalleryData } from "../../lib/gallery";
import styles from "../../styles/gallery.module.css";
import IconLink from "../../components/IconLink";
import { mdiArrowLeft } from "@mdi/js";
import Layout from "../../components/Layout";
import { useTranslation } from "react-i18next";

export default function Gallery({ allGalleryData }) {
  const { t } = useTranslation();

  return (
    <Layout
      meta={{
        title: t("avoonixGallery"),
        description: t("galleryDescription", { count: allGalleryData.length }),
        image: "/images/avoonix/day.png",
      }}
    >
      <div>
        <IconLink href="/" iconPath={mdiArrowLeft} text={t("home")} />
      </div>
      <div className={styles.grid}>
        {allGalleryData.map(({ id, date, title, ...rest }) => (
          <div id={id} className={styles.gridItem} key={id}>
            <Link href={`/gallery/${id}`}>
              <a>
                <img src={rest.path} className={styles.gridImage} />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allGalleryData = getGalleryData();
  return {
    props: {
      allGalleryData,
    },
  };
}
