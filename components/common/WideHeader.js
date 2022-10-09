import styled from "styled-components";
import { createSvgUrl, headerPawSvg, headerSvg } from "../../svg";
import MaskedDiv from "./MaskedDiv";
import NarrowSection from "./NarrowSection";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const Centered = styled.div`
  text-align: center;
`;

const SvgContainer = styled.div`
  user-select: none;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

export default function WideHeader({ title, description, hidePaw = false }) {
  const svgs = hidePaw ? [headerSvg] : [headerSvg, headerPawSvg];
  return (
    <Container>
      <div className="invert-background">
        <Centered>
          <Title>{title}</Title>
          <NarrowSection>
            <div>{description}</div>
          </NarrowSection>
        </Centered>
      </div>
      <SvgContainer>
        <MaskedDiv
          style={{
            width: "100%",
            height: "100px",
          }}
          maskImage={createSvgUrl(...svgs)}
        />
      </SvgContainer>
    </Container>
  );
}
