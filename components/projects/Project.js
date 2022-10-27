import styled from "styled-components";
import { useIntersection } from "../common/useIntersection";
import LazyImage from "../LazyImage";

const Container = styled.article`
  display: flex;
  margin: 16px;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  opacity: ${(props) => (props.intersecting ? 1 : 0)};
  transform: ${(props) => (props.intersecting ? "" : `translateX(${props.reverse ? "" : "-"}10%)`)};
  transition: all 0.5s ease-in-out;
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
`;

export default function Project({ image, title, description, reverse, link }) {
  const { intersectingFromBottom, ref } = useIntersection();

  return (
    <Container ref={ref} reverse={reverse} intersecting={intersectingFromBottom}>
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
