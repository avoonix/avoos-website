import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`;

export const GridItem = styled.div`
  position: relative;
  opacity: ${(props) => (props.intersecting ? 1 : 0)};
  transform: ${(props) => (props.intersecting ? "" : `translateY(10%)`)};
  transition: all 0.5s ease-in-out;
`;
