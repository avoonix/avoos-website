import { createRef, useEffect, useState } from "react";
import styles from "./LazyImage.module.css";
import classNames from "classnames";
import { imgPathToAvif, imgPathToWebp } from "../utils/img";

export default function LazyImage({ loaderColor, src, loaderBorderRadius = 0, className = null, rounded = true, ...rest }) {
  if (src && src.startsWith("/images")) {
    src = `https://i.avoonix.com${src}`;
  }

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
      <span
        className={classNames(styles.loader, visible ? styles.invisible : styles.visible)}
        style={{
          backgroundColor: loaderColor,
          borderRadius: loaderBorderRadius,
          display: "block",
        }}
      />
      <picture>
        <source srcSet={imgPathToAvif(src)} type="image/avif" />
        <source srcSet={imgPathToWebp(src)} type="image/webp" />
        <img loading="lazy" ref={img} onLoad={() => setVisible(true)} className={classNames(styles.image, visible ? styles.visible : styles.invisible, className, rounded && "rounded")} src={src} {...rest} />
      </picture>
    </>
  );
}
