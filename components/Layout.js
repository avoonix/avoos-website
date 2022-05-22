import Head from "next/head";
import styles from "./Layout.module.css";
import classNames from "classnames";

export default function Layout({ children, meta: { title, description, image = null}, wide = false, fullWidth = false }) {
  if (image && !image.startsWith("http")) {
    image = `https://avoonix.com${image}`;
  }

  return (
    <div className={classNames(styles.container, wide && styles.wideContainer, fullWidth && styles.fullWidth)}>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        {image && <meta property="twitter:image" content={image} />}
      </Head>
      <main>{children}</main>
    </div>
  );
}
