import { mdiHome, mdiImageMultiple } from "@mdi/js";
import { useTranslation } from "react-i18next";
import IconLink from "../components/IconLink";
import Layout from "../components/Layout";

export default function Custom404() {
  const { t } = useTranslation();
  return (
    <Layout
      meta={{
        title: "404 - Avoonix",
        description: t("pageNotFound"),
      }}
    >
      <h1>404 - {t("pageNotFound")}</h1>
      <p>Try some of these places instead</p>
      <IconLink href="/" iconPath={mdiHome} text={t("home")} />
      <IconLink
        href="/gallery"
        iconPath={mdiImageMultiple}
        text={t("gallery")}
        title={t("gallery")}
      />
    </Layout>
  );
}
