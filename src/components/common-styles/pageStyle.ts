import styled from "styled-components";
import { device } from "../../data/device";

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
    max-width: 800px;
    width: 90%;
    margin: auto;
  }
`;

export default pageStyle;
