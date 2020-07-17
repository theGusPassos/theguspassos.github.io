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
  width: 100%;
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
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  });

  return (
    <CSSTransition
      unmountOnExit
      in={inProp}
      classNames="animation"
      timeout={animationTime}
    >
      <ButtonStyled>
        <span>see my projects</span>
      </ButtonStyled>
    </CSSTransition>
  );
};

export default ButtonToInternalPage;
