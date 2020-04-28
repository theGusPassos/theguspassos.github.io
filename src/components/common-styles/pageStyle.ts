import styled from "styled-components";
import { device } from "../../data/device";
import { maxWidthInDesktop } from "../../data/sizes";

const pageStyle = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;

  @media ${device.desktop} {
    max-width: ${maxWidthInDesktop}px;
    width: 90%;
    margin: auto;
  }
`;

export const pageStyleFullWidth = styled(pageStyle)`
  @media ${device.desktop} {
    max-width: unset !important;
    width: 100% !important;
    margin: auto;
  }
`;

export default pageStyle;
