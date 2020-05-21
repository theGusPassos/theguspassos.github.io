import styled from "styled-components";
import { sectionWithText } from "../../common-styles/sectionWithText";
import { defaultPadding } from "./defaultPaddingStyles";
import { colors } from "../../../data/colors";

const Bio = styled.div`
  font-size: 1.3em;
  margin: auto;

  ${defaultPadding};
  ${sectionWithText};

  a {
    color: ${colors.mainBackgroundColor} !important;
  }
`;

export default Bio;
