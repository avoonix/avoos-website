import utilStyles from "../styles/utils.module.css";
import IconLink from "../components/IconLink";
import styles from "../styles/container.module.css";
import { mdiGithub, mdiTwitter, mdiImageMultiple, mdiSteam, mdiLink } from "@mdi/js";
import ProfileImage from "../components/ProfileImage";
import { useTranslation } from "react-i18next";
import { mdiTelegram } from "../components/icons";
import WideHeader from "../components/common/WideHeader";
import NarrowSection from "../components/common/NarrowSection";
import IndexPageMeta from "../components/seo/IndexPageMeta";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
    <IndexPageMeta />
      <WideHeader
        title="Avoonix"
        description={
          <>
            <ProfileImage />
            <p className="text-center">{t("hiThere")}</p>
          </>
        }
        hidePaw
      />
      <NarrowSection as="main">
        <div className={styles.container}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <IconLink href="https://t.me/avoonix" iconPath={mdiTelegram} title={t("contactTelegram")} icon style={{ margin: "5px" }} rel="me" />
            <IconLink href="https://steamcommunity.com/id/avoonix" iconPath={mdiSteam} title="Steam" icon style={{ margin: "5px" }} rel="me" />
            <IconLink href="https://github.com/avoonix" iconPath={mdiGithub} title="GitHub" icon style={{ margin: "5px" }} rel="me" />
            <IconLink href="https://twitter.com/avoonix" iconPath={mdiTwitter} title="Twitter" icon style={{ margin: "5px" }} rel="me" />
          </div>

          <IconLink href="/socials-and-other-links" iconPath={mdiLink} text={t("socialsAndOtherLinks")} title={t("socialsAndOtherLinks")} />
          <IconLink href="/gallery" iconPath={mdiImageMultiple} text={t("gallery")} title={t("gallery")} />
          <IconLink href="/nsfw-gallery" iconPath={mdiImageMultiple} text={t("nsfwGallery")} title={t("nsfwGallery")} />
        </div>
      </NarrowSection>
    </>
  );
}
