import { css } from "styled-components";
import { colors } from "../../data/colors";

export const sectionWithText = css`
  letter-spacing: 2px;
  line-height: 1.5;

  p a,
  ul li a {
    color: ${colors.mainColor};
  }

  abbr {
    text-decoration: none;
  }
`;
