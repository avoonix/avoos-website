import Link from "next/link";
import { getImageTitle } from "../../utils/i18n";
import { getSlug } from "../../utils/img";
import AspectRatio from "../AspectRatio";
import NarrowSection from "../common/NarrowSection";
import LazyImage from "../LazyImage";
import { GridContainer, GridItem } from "./Grid";

export default function List({ allGalleryData, title }) {
  return (
    <NarrowSection>
      <div>
        <h1>{title}</h1>
      </div>
      <GridContainer>
        {allGalleryData.map(({ id, path, grid, color, title, artist }) => (
          <GridItem
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
        ))}
      </GridContainer>
    </NarrowSection>
  );
}
