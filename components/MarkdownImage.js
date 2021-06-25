import LazyImage from "./LazyImage";

export default function MarkdownImage({ src, title, alt, ...rest }) {
  const isRelative = src && /^\./.test(src);

  if (isRelative) {
    src = `https://i.avoonix.com/images/blog/${src}`;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <a
        rel="nofollow"
        href={src}
        target="_blank"
        style={{ position: "relative" }}
      >
        <LazyImage
          {...rest}
          title={alt}
          alt={alt}
          loaderColor={"#ffd4f1"}
          src={src}
          style={{ position: "relative" }}
        />
      </a>
    </div>
  );
}
