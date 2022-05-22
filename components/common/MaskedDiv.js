import styled from "styled-components";

const Masked = styled.div`
  background-color: var(--light-pink);
  mask-composite: exclude;
  mask-origin: content;
  mask-repeat: no-repeat;
  mask-position: 0px 0px;
  mask-size: 100% 100%;
`;

export default function MaskedDiv({ style, maskImage }) {
  return <Masked style={{ ...style, maskImage, WebkitMaskImage: maskImage }} />;
}
