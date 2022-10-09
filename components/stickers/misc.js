import styled from "styled-components";
import { createSvgUrl, dividerSvg } from "../../svg";
import MaskedDiv from "../common/MaskedDiv";

export const Spacer = ({ height = 200 }) => (
  <div
    className="no-select"
    style={{
      height,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
    }}
  >
    <MaskedDiv
      style={{
        width: "max(10%, 100px)",
      }}
      maskImage={createSvgUrl(dividerSvg)}
    />
  </div>
);

export const SectionHeading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-top: 0;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MaskContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;
