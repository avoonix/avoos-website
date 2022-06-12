import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";

export default function TagListMeta() {
  const { t } = useTranslation();

  const title = t("gallery");

  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          title,
          images: [
            {
              url: "https://i.avoonix.com/collage.png",
              alt: "Collage",
            },
          ],
        }}
      />
    </>
  );
}
