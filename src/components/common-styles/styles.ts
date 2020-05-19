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

export const defaultPadding = css`
  padding: 10%;
`;

export const buttonOnHover = css`
  cursor: pointer;
  transition: background-color 1s ease;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  :hover {
    background-color: #00000055;
  }
`;
