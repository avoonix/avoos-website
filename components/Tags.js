import { mdiBrush, mdiTag } from "@mdi/js";
import Icon from "@mdi/react";
import { useTranslation } from "react-i18next";
import styles from "./Artist.module.css";
import tagStyles from "./Tags.module.css";

export default function Tags({ tags }) {
  const { t } = useTranslation();
  return (
    <div className={styles.container} title={t("tags") + ":"}>
      <div className={styles.flexContainer}>
        <div className={styles.iconContainer}>
          <Icon path={mdiTag} size={1} />
        </div>
        <div>
          {tags.map((t) => (
            <>
              <div className={tagStyles.badge}>{t}</div>{" "}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
