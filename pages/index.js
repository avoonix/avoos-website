import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import IconLink from "../components/IconLink";
import styles from "../styles/container.module.css";
import {
  mdiGithub,
  mdiPawOutline,
  mdiTwitter,
  mdiTelegram,
  mdiImageMultiple,
  mdiSteam,
  mdiHexagonOutline,
  mdiHexagon,
  mdiAccountHeart,
} from "@mdi/js";
import ProfileImage from "../components/ProfileImage";
import { useTranslation } from "react-i18next";

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

        <IconLink
          href="https://steamcommunity.com/id/avoonix"
          iconPath={mdiSteam}
          text="Steam"
          title={`Steam ${t("profile")}`}
        />
        <IconLink
          href="https://github.com/avoonix"
          iconPath={mdiGithub}
          text="GitHub"
          title={`GitHub ${t("profile")}`}
        />
        <IconLink
          href="https://www.furaffinity.net/user/avoonix"
          iconPath={mdiPawOutline}
          text="Fur Affinity"
          title={`Fur Affinity ${t("profile")}`}
        />
        <IconLink
          href="https://twitter.com/avoonix"
          iconPath={mdiTwitter}
          text="Twitter"
          title={`Twitter ${t("profile")}`}
        />
        <IconLink
          href="https://t.me/avoonix"
          iconPath={mdiTelegram}
          text="Telegram"
          title={t("contact")}
        />
        <IconLink
          href="https://e621.net/posts?tags=fav:Avoonix"
          iconPath={mdiHexagon}
          text={t("e6favorites")}
          title={t("e6favorites")}
        />
        <IconLink
          href="/gallery/ref-avoonix-reference-sheet"
          iconPath={mdiAccountHeart}
          text={t("reference")}
          title={t("reference")}
        />
        <IconLink
          href="/gallery"
          iconPath={mdiImageMultiple}
          text={t("gallery")}
          title={t("gallery")}
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
          <a href="https://de.avoonix.com/">German</a>
          <a href="https://avoonix.com/">English</a>
        </div>
      </div>
    </Layout>
  );
}
