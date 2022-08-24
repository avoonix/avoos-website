import { NextSeo } from "next-seo";

export default function ImageListMeta({ title, description }) {
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
