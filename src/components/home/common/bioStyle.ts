import styled from "styled-components";
import { defaultPadding, sectionWithText } from "../../common-styles/styles";
import { device } from "../../../data/device";

const Bio = styled.div`
  font-size: 1.2em;
  margin: auto;

  ${defaultPadding};
  ${sectionWithText};

  @media ${device.tablet} {
    font-size: 1.4em;
  }
`;

export default Bio;
