import { css } from "styled-components";
import { colors } from "../../data/colors";

export const buttonNoDefaultStyle = css`
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
`;

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

export const buttonOnHover = css`
  cursor: pointer;
  transition: background-color 1s ease;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  :hover {
    background-color: #00000055;
  }
`;
