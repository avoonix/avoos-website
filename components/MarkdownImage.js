import LazyImage from "./LazyImage";

export default function MarkdownImage({ src, title, alt, ...rest }) {
  const isRelative = src && /^\./.test(src);

  if (isRelative) {
    src = `/images/blog/${src}`;
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
          loaderColor={"#000000"}
          src={src}
          style={{ position: "relative" }}
        />
      </a>
    </div>
  );
}
