import { getArtistData, getImageData } from "../../lib/gallery";
import Image from "./[id]";
import Color from "../../components/Color";

export default function Ref({ imageData, artistData }) {
  return (
    <Image imageData={imageData} artistData={artistData}>
      <Color color="#ff55c8" />
      <Color color="#ffd4f1" />
      <Color color="#316ac6" />
      <Color color="#f6d03a" />
      <Color color="#4bc04b" />
      <Color color="#f6a39f" />
      <Color color="#3b3638" />
    </Image>
  );
}

export async function getStaticProps() {
  const imageData = getImageData("ref");
  const artistData = getArtistData(imageData.artist);

  return {
    props: {
      imageData,
      artistData,
    },
  };
}
