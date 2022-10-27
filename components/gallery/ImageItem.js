import Link from "next/link";
import { getImageTitle } from "../../utils/i18n";
import { getSlug } from "../../utils/img";
import AspectRatio from "../AspectRatio";
import { useIntersection } from "../common/useIntersection";
import LazyImage from "../LazyImage";
import { GridItem } from "./Grid";

export default function ImageItem({ id, path, grid, color, title, artist }) {
  const { intersectingFromBottom, ref } = useIntersection();

  return (
    <GridItem
      ref={ref}
      intersecting={intersectingFromBottom}
      id={id}
      key={id}
      style={{
        gridColumn: `span ${grid.w}`,
        gridRow: `span ${grid.h}`,
      }}
    >
      <AspectRatio ratio={grid.h / grid.w}>
        <Link href={`/gallery/${getSlug({ path, id })}`}>
          <a title={getImageTitle({ title, artist })}>
            <LazyImage loaderColor={color} src={path} />
          </a>
        </Link>
      </AspectRatio>
    </GridItem>
  );
}
