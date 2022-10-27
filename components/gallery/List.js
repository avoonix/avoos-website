import NarrowSection from "../common/NarrowSection";
import { GridContainer } from "./Grid";
import ImageItem from "./ImageItem";

export default function List({ allGalleryData, title }) {
  return (
    <NarrowSection>
      <div>
        <h1>{title}</h1>
      </div>
      <GridContainer>
        {allGalleryData.map(({ id, path, grid, color, title, artist }) => (
          <ImageItem key={id} id={id} path={path} grid={grid} color={color} title={title} artist={artist} />
        ))}
      </GridContainer>
    </NarrowSection>
  );
}
