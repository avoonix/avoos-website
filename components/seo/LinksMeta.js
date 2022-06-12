import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";

export default function LinksMeta() {
  const { t } = useTranslation();
  const title = t("links");
  const description = t("socialsDescription");

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
