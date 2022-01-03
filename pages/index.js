import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import IconLink from "../components/IconLink";
import styles from "../styles/container.module.css";
import {
  mdiGithub,
  mdiTwitter,
  mdiImageMultiple,
  mdiSteam,
  mdiLink,
} from "@mdi/js";
import ProfileImage from "../components/ProfileImage";
import { useTranslation } from "react-i18next";
import { mdiTelegram } from "../components/icons";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout
      meta={{
        title: t("title"),
        description: t("description"),
        image: "/images/avoonix/avoo-headshot-sky.png",
      }}
    >
      <div
        className={styles.container}
        itemScope
        itemType="http://schema.org/Person"
      >
        <ProfileImage />
        <p className="text-center">{t("hiThere")}</p>
        <p className="text-center">{t("linksAndOtherStuff")}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <IconLink
            href="https://t.me/avoonix"
            iconPath={mdiTelegram}
            title={t("contactTelegram")}
            icon
            style={{ margin: "5px" }}
            rel="me"
          />
          <IconLink
            href="https://steamcommunity.com/id/avoonix"
            iconPath={mdiSteam}
            title="Steam"
            icon
            style={{ margin: "5px" }}
            rel="me"
          />
          <IconLink
            href="https://github.com/avoonix"
            iconPath={mdiGithub}
            title="GitHub"
            icon
            style={{ margin: "5px" }}
            rel="me"
          />
          <IconLink
            href="https://twitter.com/avoonix"
            iconPath={mdiTwitter}
            title="Twitter"
            icon
            style={{ margin: "5px" }}
            rel="me"
          />
        </div>

        <IconLink
          href="/socials-and-other-links"
          iconPath={mdiLink}
          text={t("socialsAndOtherLinks")}
          title={t("socialsAndOtherLinks")}
        />
        <IconLink
          href="/gallery"
          iconPath={mdiImageMultiple}
          text={t("gallery")}
          title={t("gallery")}
        />
        <IconLink
          href="/nsfw-gallery"
          iconPath={mdiImageMultiple}
          text={t("nsfwGallery")}
          title={t("nsfwGallery")}
        />

        <div className={utilStyles.hidden}>
          <span itemProp="alternateName">Avoo</span>
          <a
            itemProp="url"
            href="https://avoonix.com/"
            title="Website"
            rel="me"
          >
            https://avoonix.com/
          </a>
          <p itemProp="description">{t("itemDescription")}</p>
        </div>
      </div>
    </Layout>
  );
}
