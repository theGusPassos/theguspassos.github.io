import React from "react";
import styled from "styled-components";
import { colors } from "../../data/colors";
import { buttonNoDefaultStyle } from "../common-styles/buttonStyles";

const ButtonStyled = styled.button`
  background-color: ${colors.mainBackgroundColor};
  border: none;
  border-right: 6px solid ${colors.secondColor};
  border-bottom: 6px solid ${colors.secondColor};
  color: ${colors.mainTextColor};
  font-size: 1.2em;
  letter-spacing: 4px;
  width: 100%;
  padding: 10px 5px;
  cursor: pointer;

  ${buttonNoDefaultStyle};

  span {
    width: 100%;
  }

  :hover {
    color: ${colors.secondColor};
  }
`;

const ButtonToInternalPage = () => {
  return (
    <ButtonStyled>
      <span>see my projects</span>
    </ButtonStyled>
  );
};

export default ButtonToInternalPage;
