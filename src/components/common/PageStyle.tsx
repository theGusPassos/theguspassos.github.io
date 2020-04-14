import styled from "styled-components";
import { device } from "../../shared/device";

const PageStyle = styled.section`
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
    width: 800px;
    margin: auto;
  }
`;

export default PageStyle;
