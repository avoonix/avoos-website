import { NextSeo } from "next-seo";
import { getImageTitle } from "../../utils/i18n";

export default function ImageMeta({ imageData, artistData }) {
  const title = getImageTitle({
    title: imageData.title,
    artist: imageData.artist,
  });

  return (
    <>
      <NextSeo
        title={title}
        twitter={{
          cardType: "summary_large_image",
        }}
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
