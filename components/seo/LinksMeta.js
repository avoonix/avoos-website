import { NextSeo } from "next-seo";

export default function LinksMeta() {
  const title = "Links";
  const description = "Here are a bunch of links to my social media accounts and a bunch of other stuff";

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
        }}
      />
    </>
  );
}
