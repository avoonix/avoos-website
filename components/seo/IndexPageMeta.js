import { NextSeo, SocialProfileJsonLd } from "next-seo";
import { useTranslation } from "react-i18next";

export default function IndexPageMeta() {
  const { t } = useTranslation();

  return (
    <>
      <NextSeo
        title={t("title")}
        titleTemplate="%s"
        description={t("description")}
        openGraph={{
          type: "profile",
          title: t("title"),
          description: t("description"),
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
      <SocialProfileJsonLd description={t("description")} alternateName="Avoo" twitter="@avoonix" type="Person" name="Avoonix" url="https://avoonix.com/" sameAs={["https://twitter.com/avoonix", "https://t.me/avoonix", "https://github.com/avoonix", "https://steamcommunity.com/id/avoonix"]} />
    </>
  );
}
