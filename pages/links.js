import IconLink from "../components/IconLink";
import { mdiInstagram, mdiGithub, mdiPawOutline, mdiTwitter, mdiImageMultiple, mdiSteam, mdiHexagon, mdiAccountHeart, mdiPost, mdiDogSide, mdiArrowLeft, mdiReddit } from "@mdi/js";
import { mdiTelegram } from "../components/icons";
import NarrowSection from "../components/common/NarrowSection";
import LinksMeta from "../components/seo/LinksMeta";
import { mdiMastodon } from "@mdi/js";
import { mdiPatreon } from "@mdi/js";

export default function Home() {
  return (
    <>
      <LinksMeta />
      <NarrowSection>
        <div>
          <IconLink href="/" iconPath={mdiArrowLeft} text="Home" />
        </div>
        <div>
          <h1>Socials and Other Links</h1>
        </div>

        <IconLink href="https://www.furtrack.com/user/Avoonix/fursuiting" iconPath={mdiPawOutline} text="FurTrack Gallery" title="Fursuit Pictures on FurTrack" />
        <IconLink href="https://steamcommunity.com/id/avoonix" iconPath={mdiSteam} text="Steam" title="Steam Profile" />
        <IconLink href="https://github.com/avoonix" iconPath={mdiGithub} text="GitHub" title="GitHub Profile" />
        <IconLink href="https://e621.net/artists/71584" iconPath={mdiHexagon} text="e621" title="e6 Profile" />
        <IconLink href="https://www.furaffinity.net/user/avoonix" iconPath={mdiPawOutline} text="Fur Affinity" title="Fur Affinity Profile" />
        <IconLink href="https://www.f-list.net/c/avoonix" iconPath={mdiDogSide} text="F-list" title="f-list.net Profile" />
        <IconLink href="https://twitter.com/avoonix" iconPath={mdiTwitter} text="Twitter" title="Twitter Profile" />
        <IconLink href="https://t.me/avoonix" iconPath={mdiTelegram} text="Telegram" title="Contact" />
        <IconLink href="https://patreon.com/avoonix" iconPath={mdiPatreon} text="Patreon" title="Support Me" />
        <IconLink href="https://www.reddit.com/user/avoonix" iconPath={mdiReddit} text="Reddit" title="Reddit Profile" />
        <IconLink href="https://www.instagram.com/avoonix.foxo/" iconPath={mdiInstagram} text="Instagram" title="Instagram Profile" />
        <IconLink href="https://yiff.life/@avoonix" iconPath={mdiMastodon} text="Mastodon Profile (yiff.life)" />
        <IconLink href="https://meow.social/@avoonix" iconPath={mdiMastodon} text="Mastodon Profile (meow.social)" />
        <IconLink href="https://material-e621.vercel.app/#/posts?tags=fav:Avoonix" iconPath={mdiHexagon} text="e6 Favorites" title="e6 Favorites" />
        <IconLink href="/gallery/ref-avoonix-reference-sheet" iconPath={mdiAccountHeart} text="Reference" />
        <IconLink href="/gallery" iconPath={mdiImageMultiple} text="Gallery" />
        <IconLink href="https://github.com/avoonix/material-e621#readme" iconPath={mdiGithub} text="Material e621 (Project)" />
        <IconLink href="https://github.com/avoonix/the-furry-dictionary#readme" iconPath={mdiGithub} text="Furry Dictionary (Project)" />
        <IconLink href="/blog" iconPath={mdiPost} text="Blog" />
      </NarrowSection>
    </>
  );
}
