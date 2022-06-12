import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";

export default function ImageListMeta({ title }) {
  const { t } = useTranslation();

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
