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
    font-size: 2em;
    margin: 0;
  }

  span {
    font-size: 1.6em;
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
          I’m interested in developing any kind of software regardless of the
          tech stack.
        </p>
        <p>
          The software quality and user experience are the most important things
          for me. I look forward to working with people that value the same =)
        </p>
      </Bio>
      <HomeNavButton link="/about">more about me</HomeNavButton>
    </FrontPageAnimated>
  );
};

export default FrontPage;