import React from "react";
import styled from "styled-components";
import Bio from "./common/bioStyle";
import {
  GetAnimator,
  AnimationDirection,
  GetAnimationTransform,
} from "../../animations/animations";
import { requiredForAnimation } from "../common-styles/requiredForAnimation";
import { colors } from "../../data/colors";
import ContactChooser from "../contacts/ContactChooser";
import DeviceInfo from "../../models/deviceInfo";

const AboutPageStyled = styled.section`
  display: grid;
  height: 100%;
  grid-template-rows: 90% 10%;
  ${requiredForAnimation};

  button {
    color: ${colors.mainTextColor};
    background-color: ${colors.mainColor} !important;
  }
`;

const AboutPageAnimated = GetAnimator(AboutPageStyled);
const AnimationTransform = GetAnimationTransform(AnimationDirection.FromRight);

interface AboutPageProps extends DeviceInfo {}

const AboutPage = (props: AboutPageProps) => {
  return (
    <AboutPageAnimated transform={AnimationTransform}>
      <Bio>
        <p>
          I'm interested in developing any kind of software or game, regardless
          of the tech stack.
        </p>
        <p>
          The software quality and user experience are the most important things
          to me. I look forward to working with people that value the same.
        </p>
        <p>If you need help in a project of yours feel free to contact me =)</p>
      </Bio>{" "}
      <ContactChooser deviceType={props.deviceType}></ContactChooser>
    </AboutPageAnimated>
  );
};

export default AboutPage;
