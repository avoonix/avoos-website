import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";

export default function NotFoundPageMeta() {
  const { t } = useTranslation();

  return (
    <NextSeo
      noindex
      title={t("pageNotFound")}
      openGraph={{
        title: t("title"),
      }}
    />
  );
}
