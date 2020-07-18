import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../data/colors";
import { buttonNoDefaultStyle } from "../common-styles/buttonStyles";
import { CSSTransition } from "react-transition-group";

const animationTime = 1000;

const fadeAnimation = css`
  &.animation-enter {
    opacity: 0;
  }

  &.animation-enter-active {
    opacity: 1;
    transition: opacity ${animationTime}ms;
  }
`;

const ButtonStyled = styled.button`
  background-color: ${colors.mainBackgroundColor};
  border: none;
  border-right: 6px solid ${colors.secondColor};
  border-bottom: 6px solid ${colors.secondColor};
  color: ${colors.mainTextColor};
  font-size: 1.2em;
  letter-spacing: 4px;
  padding: 10px 5px;
  cursor: pointer;

  ${buttonNoDefaultStyle};
  ${fadeAnimation};

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
