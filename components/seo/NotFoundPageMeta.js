import { NextSeo } from "next-seo";

export default function NotFoundPageMeta() {
  return (
    <NextSeo
      noindex
      title="Page not found"
      openGraph={{
        title: "Page not found",
      }}
    />
  );
}
