import Layout from "../components/Layout";
import IconLink from "../components/IconLink";
import {
  mdiGithub,
  mdiPawOutline,
  mdiTwitter,
  mdiImageMultiple,
  mdiSteam,
  mdiHexagon,
  mdiAccountHeart,
  mdiPost,
  mdiDogSide,
  mdiArrowLeft,
  mdiReddit,
} from "@mdi/js";
import { useTranslation } from "react-i18next";
import { mdiTelegram } from "../components/icons";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout
      meta={{
        title: t("links"),
        description: t("socialsDescription"),
        image: "/images/avoonix/avoo-headshot-sky.png",
      }}
    >
      <div>
        <IconLink href="/" iconPath={mdiArrowLeft} text={t("home")} />
      </div>
      <div>
        <h1>{t("socialsAndOtherLinksHeading")}</h1>
      </div>

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
        href="https://www.f-list.net/c/avoonix"
        iconPath={mdiDogSide}
        text="F-list"
        title={`f-list.net ${t("profile")}`}
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
        href="https://www.reddit.com/user/avoonix"
        iconPath={mdiReddit}
        text="Reddit"
        title={`Reddit ${t("profile")}`}
      />
      <IconLink
        href="https://material-e621.vercel.app/#/posts?tags=fav:Avoonix"
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
      <IconLink
        href="/nsfw-gallery"
        iconPath={mdiImageMultiple}
        text={t("nsfwGallery")}
        title={t("nsfwGallery")}
      />
      <IconLink
        href="/blog"
        iconPath={mdiPost}
        text={t("blog")}
        title={t("blog")}
      />
    </Layout>
  );
}
