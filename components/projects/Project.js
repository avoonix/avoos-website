import styled from "styled-components";
import LazyImage from "../LazyImage";
import { useInView } from "react-intersection-observer";

const threshold = new Array(101).fill(null).map((_, idx) => idx / 100);

const Container = styled.div`
  display: flex;
  margin: 16px;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  /* flex-grow: 1; */
  width: 60%;
  height: 60vh;
  @media (max-width: 800px) {
    height: 40vh;
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 2em;
  margin-top: 0;
`;

const TextContainer = styled.div`
  padding: 8px;
  margin-bottom: 24px;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.reverse ? "end" : "start")};
  justify-content: center;
  @media (max-width: 800px) {
    width: 100%;
    align-items: start;
  }
`;

const Link = styled.a`
  text-decoration: none;
`

export default function Project({ image, title, description, reverse, link }) {
  const { ref, entry } = useInView({
    threshold,
  });

  const bottom = entry?.boundingClientRect?.bottom > entry?.boundingClientRect?.height;
  const progress = Math.min(1, entry?.intersectionRatio * 2);
  const dir = reverse ? -1 : 1;

  return (
    <Container
      as="article"
      ref={ref}
      reverse={reverse}
      style={
        bottom
          ? {
              opacity: progress,
              transform: `translate(${(1 - progress) * 10 * dir}vw)`,
            }
          : {}
      }
    >
      <ImageContainer as="a" href={link} target="_blank">
        <LazyImage src={image} />
      </ImageContainer>
      <TextContainer reverse={reverse}>
        <Link href={link} target="_blank">
          <Title>{title}</Title>
          <div>{description}</div>
        </Link>
      </TextContainer>
    </Container>
  );
}
