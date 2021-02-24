import Head from "next/head";
import styles from "./Layout.module.css";

import { useRouter } from "next/router";

export default function Layout({
  children,
  meta: { title, description, image = null },
}) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        <link rel="canonical" href={`https://avoonix.com${router.asPath}`} />
        <link
          rel="alternate"
          href={`https://avoonix.com${router.asPath}`}
          hrefLang="en"
        />
        <link
          rel="alternate"
          href={`https://de.avoonix.com${router.asPath}`}
          hrefLang="de"
        />
        <link
          rel="alternate"
          href={`https://avoonix.com${router.asPath}`}
          hrefLang="x-default"
        />

        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#f066c2" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://avoonix.com${router.asPath}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && (
          <meta property="og:image" content={`https://avoonix.com${image}`} />
        )}

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://avoonix.com${router.asPath}`}
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        {image && (
          <meta
            property="twitter:image"
            content={`https://avoonix.com${image}`}
          />
        )}
        <meta property="twitter:site" content="@avoonix" />
        <meta property="twitter:creator" content="@avoonix" />
      </Head>
      <main>{children}</main>
    </div>
  );
}
