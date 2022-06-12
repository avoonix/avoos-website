import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";
import { getImageTitle } from "../../utils/i18n";

export default function ImageMeta({ imageData, artistData }) {
  const { t } = useTranslation();

  const title = getImageTitle({
    title: imageData.title,
    artist: imageData.artist,
    t,
  });

  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          title,
          description: imageData.description,
          images: [
            {
              url: imageData.path,
            },
          ],
        }}
      />
    </>
  );
}
