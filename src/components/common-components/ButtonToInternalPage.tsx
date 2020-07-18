import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../data/colors";
import {
  buttonNoDefaultStyle,
  buttonStyle,
} from "../common-styles/buttonStyles";
import { CSSTransition } from "react-transition-group";
import { useHistory } from "react-router-dom";

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
  ${buttonStyle};
  ${buttonNoDefaultStyle};
  ${fadeAnimation};

  span {
    width: 100%;
  }

  :hover {
    color: ${colors.secondColor};
  }
`;

export interface ButtonToInternalPageProps {
  children: string;
  path: string;
}

const ButtonToInternalPage = (props: ButtonToInternalPageProps) => {
  const history = useHistory();

  const onCardClick = () => {
    history.push(props.path);
  };

  const onCardKeyDown = (e: any) => {
    if (e.keyCode === 13 || e.charCode === 13) history.push(props.path);
  };

  return (
    <ButtonStyled
      onClick={() => onCardClick()}
      onKeyDown={(e) => onCardKeyDown(e)}
    >
      <span>{props.children}</span>
    </ButtonStyled>
  );
};

export default ButtonToInternalPage;
