import styled, { css } from "styled-components";
import React from "react";

const animationTime = 1000;

const transformAnimation = css`
  &.animation-enter {
    img {
      transform: translate(0, -100%);
    }
  }
  &.animation-enter-active {
    img {
      transform: translate(0, 0);
      transition-timing-function: ease-in-out;
      transition: transform ${animationTime}ms;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  ${transformAnimation};
`;

const MyImageStyled = styled.img`
  height: 90%;
  margin: 0px auto 0 auto;
  padding-top: 10px;
`;

const MyImage = () => {
  return (
    <ImageContainer>
      <MyImageStyled src="images/eubykuma.png"></MyImageStyled>;
    </ImageContainer>
  );
};

export default MyImage;
