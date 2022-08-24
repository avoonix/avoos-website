import { NextSeo } from "next-seo";

export default function TagListMeta() {
  const title = "Gallery";

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
