import classNames from "classnames";
import Link from "next/link";
import styles from "./MarkdownLink.module.css";
import Icon from "@mdi/react";
import { mdiOpenInNew, mdiPound } from "@mdi/js";

export default function MarkdownLink({ href, ...rest }) {
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} className={classNames(styles.link, styles.internal)} />
      </Link>
    );
  }

  const { children, ...props } = rest;

  if (isAnchorLink) {
    return (
      <a
        href={href}
        {...props}
        className={classNames(styles.link, styles.anchor)}
      >
        <Icon
          path={mdiPound}
          size={"1em"}
          className={styles.linkIcon}
        />
        {children}
      </a>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer nofollow"
      href={href}
      {...props}
      className={classNames(styles.link, styles.external)}
    >
      <Icon path={mdiOpenInNew} size={"1em"} className={styles.linkIcon} />
      {children}
    </a>
  );
}
