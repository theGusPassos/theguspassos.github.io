import { css } from "styled-components";
import { colors } from "../../data/colors";

export const buttonNoDefaultStyle = css`
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  cursor: pointer;
`;

export const buttonForImage = css`
  ${buttonNoDefaultStyle};
  background-color: ${colors.mainBackgroundColor};
  border: none;
  margin: auto;
`;

export const buttonStyle = css`
  font-size: 1.2em;
  letter-spacing: 4px;
  border: none;
  border-right: 6px solid ${colors.secondColor};
  border-bottom: 6px solid ${colors.secondColor};
  color: ${colors.mainTextColor};
  background-color: ${colors.mainBackgroundColor};
  padding: 10px 5px;
  width: 100%;
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
