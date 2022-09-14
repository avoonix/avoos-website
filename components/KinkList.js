import styles from "./KinkList.module.css";

const colors = {
  "false": "red",
  0: "#ffb875",
  4: "#baff7d",
  5: "#06ff00"
}

const names = {
  1: "Meh",
  2: "Okay",
  3: "Neutral",
  4: "Enjoy",
  5: "UwU~",
}

export const getName = (rating) => (rating === false ? "Hard Limit" : rating === 0 ? "Soft Limit" : typeof rating === "number" ? names[rating] : "-");

export const getColor = (rating) => colors[rating];

export default function KinkList({ kinks }) {

  return (
    <div>
      {kinks.categories.map((category) => (
        <section key={category.name}>
          <h2>{category.name}</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>IRL</th>
                <th>RP</th>
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
