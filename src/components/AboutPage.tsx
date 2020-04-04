import React from "react";
import PageTitle from "./PageTitle";
import styled from "styled-components";
import { GetAnimationStyle, AnimationDirection } from "../shared/animations";

const AboutPageStyled = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const AboutPageAnimated = GetAnimationStyle(
  AboutPageStyled,
  AnimationDirection.FromLeft
);

const AboutPage = () => {
  return (
    <AboutPageAnimated>
      <PageTitle centered title="about me"></PageTitle>
    </AboutPageAnimated>
  );
};

export default AboutPage;
