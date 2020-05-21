import { css } from "styled-components";
import { colors } from "../../data/colors";

export const sectionWithText = css`
  line-height: 1.7;

  p a,
  ul li a {
    color: ${colors.mainColor};
  }

  abbr {
    text-decoration: none;
  }
`;
