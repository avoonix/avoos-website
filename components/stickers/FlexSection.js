import classNames from "classnames";
import styles from "./FlexSection.module.css";

export default function FlexSection({ left = null, right = null, center, padded = false }) {
  return (
    <div className={styles.container}>
      <div className={classNames("no-select", styles.side)}>{left}</div>
      <div className={classNames(padded && styles.padded, styles.middle)}>{center}</div>
      <div className={classNames("no-select", styles.side)}>{right}</div>
    </div>
  );
}
