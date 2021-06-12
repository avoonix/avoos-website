import { mdiBrush, mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
import { useTranslation } from "react-i18next";
import styles from "./Artist.module.css";

export default function Artist({ name, url }) {
  const { t } = useTranslation();
  return (
    <a href={url} className={styles.container} title={t("artist") + ":"}>
      <div className={styles.flexContainer}>
        <div className={styles.iconContainer}>
          <Icon path={mdiBrush} size={1} />
        </div>
        <p>
          {name} <Icon path={mdiOpenInNew} size={0.6} />
        </p>
      </div>
    </a>
  );
}
