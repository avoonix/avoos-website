import Link from "next/link";
import styles from "./IconLink.module.css";
import Icon from "@mdi/react";

export default function IconLink({ href, title, iconPath, text }) {
  return (
    <Link href={href}>
      <a title={title} className={styles.link}>
        <Icon path={iconPath} />
        <span>{text}</span>
      </a>
    </Link>
  );
}
