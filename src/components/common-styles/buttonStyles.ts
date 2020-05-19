import { css } from "styled-components";
import { colors } from "../../data/colors";

export const buttonStyle = css`
  text-align: center;
  margin: auto;
  border: none;
  background-color: ${colors.mainBackgroundColor};

  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;

  :active,
  :focus,
  :hover {
    text-decoration: underline;
  }
`;
