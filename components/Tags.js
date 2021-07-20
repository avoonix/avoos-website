import { mdiBrush, mdiTag } from "@mdi/js";
import Icon from "@mdi/react";
import { useTranslation } from "react-i18next";
import styles from "./Artist.module.css";
import tagStyles from "./Tags.module.css";

export default function Tags({ tags }) {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.iconContainer}>
          <Icon path={mdiTag} size={1} />
        </div>
        <div>
          <span className="sr-only">{t("tags")}: </span>
          {tags.map((t) => (
            <span key={t}>
              <div className={tagStyles.badge}>{t}</div><span className="sr-only">, </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
