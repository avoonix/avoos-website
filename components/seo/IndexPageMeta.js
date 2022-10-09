import { NextSeo, SocialProfileJsonLd } from "next-seo";

export default function IndexPageMeta() {
  const title = "Avoonix the Pink Fox"
  const description = "A pink fluffy foxo, gamer and software engineer from Austria who is learning how to draw and stream UwU"
  return (
    <>
      <NextSeo
        title={title}
        titleTemplate="%s"
        description={description}
        openGraph={{
          type: "profile",
          title,
          description,
          profile: {
            firstName: "Avoonix",
            username: "avoonix",
          },
          images: [
            {
              url: "https://avoonix.com/images/avoonix/avoo-headshot-happy.png",
              alt: "Avoonix profile picture",
            },
          ],
        }}
      />
      <SocialProfileJsonLd description={description} alternateName="Avoo" twitter="@avoonix" type="Person" name="Avoonix" url="https://avoonix.com/" sameAs={["https://twitter.com/avoonix", "https://t.me/avoonix", "https://github.com/avoonix", "https://steamcommunity.com/id/avoonix"]} />
    </>
  );
}
