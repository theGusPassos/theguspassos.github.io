import { css } from "styled-components";
import { colors } from "../../shared/colors";

export const sectionWithText = css`
  line-height: 1.7;

  p a,
  ul li a {
    color: ${colors.mainColor};
  }
`;
