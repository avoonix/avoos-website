import { mdiBrush, mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
import styles from "./Artist.module.css";

export default function Artist({ name, url }) {
  return (
    <a href={url} className={styles.container} target="_blank">
      <div className={styles.flexContainer}>
        <div className={styles.iconContainer}>
          <Icon path={mdiBrush} size={1} />
        </div>
        <p>
          <span className="sr-only">Artist: </span>
          {name} <Icon path={mdiOpenInNew} size={0.8} className={styles.icon} />
        </p>
      </div>
    </a>
  );
}
