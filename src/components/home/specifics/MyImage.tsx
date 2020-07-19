import styled, { css } from "styled-components";
import React from "react";
import { device } from "../../../data/device";
import { MainToolTip } from "../../common-components/ToolTip";
import {
  goToExternalPage,
  goToExternalPageOnKeyDown,
} from "../../../common-functions/goToExternalPage";

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
  cursor: pointer;
`;

const MyImageStyled = styled.img`
  width: 65%;
  margin: 0px auto 0 auto;
  padding-top: 10px;

  @media ${device.tablet} {
    width: 35%;
    padding-top: 40px;
  }
`;

const MyImage = () => {
  return (
    <ImageContainer>
      <MainToolTip></MainToolTip>
      <MyImageStyled
        tabIndex={1}
        src="images/eubykuma.png"
        data-tip="this drawing was made by @kumamaskie, check her instagram"
        alt="drawing of me and my cats made by @kumamaskie, click to go to her instagram"
        onClick={() =>
          goToExternalPage("https://www.instagram.com/kumamaskie/")
        }
        onKeyDown={(e) =>
          goToExternalPageOnKeyDown(e, "https://www.instagram.com/kumamaskie/")
        }
      ></MyImageStyled>
      ;
    </ImageContainer>
  );
};

export default MyImage;
