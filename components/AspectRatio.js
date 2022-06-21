import styled from "styled-components";

const Box = styled.div`
  display: block;
  width: 100%;
  padding-top: 100%;
`;

export default function AspectRatio({ children, ratio }) {
  return <Box style={{ paddingTop: `${ratio * 100}%` }}>{children}</Box>;
}
