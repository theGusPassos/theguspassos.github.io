import React from "react";
import styled, { css } from "styled-components";
import HomeNavButton from "./common/HomeNavButton";
import Bio from "./common/bioStyle";
import {
  GetAnimator,
  AnimationDirection,
  GetAnimationTransform,
} from "../../animations/animations";
import { requiredForAnimation } from "../common-styles/requiredForAnimation";
import ContactsModal from "../contacts/ContactsModal";
import ContactsButton from "../contacts/ContactsButton";

const AboutPageStyled = styled.section`
  display: grid;
  height: 100%;
  grid-template-rows: 90% 10%;
  ${requiredForAnimation};
`;

const AboutPageAnimated = GetAnimator(AboutPageStyled);
const AnimationTransform = GetAnimationTransform(AnimationDirection.FromRight);

const AboutPage = () => {
  return (
    <AboutPageAnimated transform={AnimationTransform}>
      <Bio>
        <p>
          I’m a 22 years old developer who’s been programming professionally for
          5 years in brazillian companies.
        </p>
        <p>
          I'm interested in developing any kind of software or game, regardless
          of the tech stack. The software quality and the user experience are
          the most important things to me.
        </p>
        <p>If you need help in a project of yours feel free to contact me =)</p>
      </Bio>
      <ContactsButton></ContactsButton>
    </AboutPageAnimated>
  );
};

export default AboutPage;
