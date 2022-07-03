import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";

export default function ImageListMeta({ title, description }) {
  const { t } = useTranslation();

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
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
