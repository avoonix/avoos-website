import IconLink from "../IconLink";
import {  mdiTwitter } from "@mdi/js";
import { mdiTelegram } from "../icons";

export const Contact = ({ dense = true }) => {
  return (
    <>
      <IconLink
        href="https://t.me/avoonix"
        iconPath={mdiTelegram}
        text="Telegram"
        inverted
        dense={dense}
      />
    </>
  );
};
