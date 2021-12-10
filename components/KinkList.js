import { useTranslation } from "react-i18next";
import styles from "./KinkList.module.css";

const colors = {
  "false": "red",
  0: "#ffb875",
  4: "#baff7d",
  5: "#06ff00"
}

export const getColor = (rating) => colors[rating];

export default function KinkList({ kinks }) {
  const { t } = useTranslation();
  const getName = (rating) => (rating === false ? t("kinks.hard-limit") : rating === 0 ? t("kinks.soft-limit") : typeof rating === "number" ? t(`kinks.numbered.${rating}`) : "-");

  return (
    <div>
      {kinks.categories.map((category) => (
        <section key={category.name}>
          <h2>{category.name}</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Preference</th>
              </tr>
            </thead>
            <tbody>
              {category.items.map((item) => (
                <tr key={item.name} className={styles.invertOnHover}>
                  <td>{item.name}</td>
                  {item.rating.map((rating) => (
                    <th className={styles.small} key={rating} style={{ color: getColor(rating) }}>
                      {getName(rating)}
                    </th>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
}
