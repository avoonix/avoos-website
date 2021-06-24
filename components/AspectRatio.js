import styles from "./AspectRatio.module.css";

export default function AspectRatio({ children, ratio }) {
  return (
    <div
      className={styles.AspectRatioBox}
      style={{ paddingTop: `${ratio * 100}%` }}
    >
      {children}
    </div>
  );
}
