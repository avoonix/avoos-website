import { createRef, useEffect, useState } from "react";
import styles from "./LazyImage.module.css";
import classNames from "classnames";

export default function LazyImage({ loaderColor, src, ...rest }) {
  const [visible, setVisible] = useState(false);

  const img = createRef();

  useEffect(() => {
    if (img.current.complete) {
      setVisible(true);
    } else {
      img.current.onLoad = () => setVisible(true);
    }
  }, [img, img.current]);

  return (
    <>
      <div
        className={classNames(
          styles.loader,
          visible ? styles.invisible : styles.visible
        )}
        style={{ backgroundColor: loaderColor }}
      />
      <img
        ref={img}
        onLoad={() => setVisible(true)}
        className={classNames(
          styles.image,
          visible ? styles.visible : styles.invisible
        )}
        src={src}
        {...rest}
      />
    </>
  );
}
