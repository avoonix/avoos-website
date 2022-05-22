import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";

export default function DefaultMeta() {
  const router = useRouter();
  const pathWithoutHash = router.asPath.replace(/#.*/g, "");

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ff55c8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </Head>
      <DefaultSeo
        canonical={`https://avoonix.com${pathWithoutHash}`}
        languageAlternates={[
          { href: `https://avoonix.com${pathWithoutHash}`, hrefLang: "x-default" },
          { href: `https://avoonix.com${pathWithoutHash}`, hrefLang: "en" },
          { href: `https://de.avoonix.com${pathWithoutHash}`, hrefLang: "de" },
        ]}
        openGraph={{
          url: `https://avoonix.com${pathWithoutHash}`,
        }}
        twitter={{
          site: "@avoonix",
        }}
      />
    </>
  );
}
