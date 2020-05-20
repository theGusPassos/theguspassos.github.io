import React from "react";
import styled from "styled-components";
import HomeNavButton from "./common/HomeNavButton";
import { defaultPadding } from "../common-styles/styles";
import Bio from "./common/bioStyle";
import {
  GetAnimator,
  GetAnimationTransform,
  AnimationDirection,
} from "../../animations/animations";
import { requiredForAnimation } from "../common-styles/requiredForAnimation";

const FrontPageStyled = styled.section`
  display: grid;
  grid-template-rows: 20% 70% 10%;
  height: 100%;
  ${requiredForAnimation};
`;

const FrontPageAnimated = GetAnimator(FrontPageStyled);
const AnimationTransform = GetAnimationTransform(AnimationDirection.FromLeft);

const Info = styled.div`
  ${defaultPadding};

  h1 {
    font-size: 2.3em;
    margin: 0;
  }

  span {
    font-size: 1.8em;
  }
`;

const FrontPage = () => {
  return (
    <FrontPageAnimated transform={AnimationTransform}>
      <Info>
        <h1>Gustavo Passos</h1>
        <span>Software and Game Developer</span>
      </Info>
      <Bio>
        <p>
          I’m a 22 years old developer who’s been programming professionally for
          5 years in brazillian companies.
        </p>
      </Bio>
      <HomeNavButton link="/about">more about me</HomeNavButton>
    </FrontPageAnimated>
  );
};

export default FrontPage;
