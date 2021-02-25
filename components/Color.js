import styles from "./Color.module.css";
import copy from "copy-to-clipboard";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Color({ color }) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [tm, setTm] = useState(0);
  const copyColor = () => {
    copy(color, {
      format: "text/plain",
    });
    setCopied(true);
    clearTimeout(tm);
    setTm(setTimeout(() => setCopied(false), 1000));
  };
  return (
    <div className={styles.container} onClick={copyColor}>
      <div className={styles.text}>{color}</div>
      <div className={styles.color} style={{ backgroundColor: color }}>
        {copied && t("copied")}
      </div>
    </div>
  );
}
