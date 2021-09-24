import Link from "next/link";
import styles from "./IconLink.module.css";
import Icon from "@mdi/react";
import classNames from "classnames";

export default function IconLink({
  href,
  title,
  iconPath,
  text,
  inverted,
  dense,
  icon,
  ...rest
}) {
  return (
    <Link href={href}>
      <a
        title={title}
        className={classNames(
          styles.link,
          inverted && styles.inverted,
          dense && styles.dense,
          icon ? styles.icon : "rounded"
        )}
        {...rest}
      >
        <Icon path={iconPath} />
        <span>{text}</span>
      </a>
    </Link>
  );
}
