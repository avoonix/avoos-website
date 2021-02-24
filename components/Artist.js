import { mdiBrush } from "@mdi/js";
import Icon from "@mdi/react";
import styles from "./Artist.module.css";

export default function artist({ name, url }) {
  return (
    <a href={url} className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.iconContainer}>
          <Icon path={mdiBrush} size={1} />
        </div>
        <p>{name}</p>
      </div>
    </a>
  );
}
