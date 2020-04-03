import React from "react";
import PageTitle from "./PageTitle";
import styled from "styled-components";

const AboutPageStyled = styled.div`
  position: absolute;
  top: 0;
  width: 100%;

  &.animation-enter {
    transform: translateX(-100%);
  }

  &.animation-enter-active {
    transform: translateX(0);
    transition-timing-function: ease-in-out;
    transition: transform 400ms;
  }

  &.animation-exit {
    transform: translateX(0);
  }

  &.animation-exit-active {
    transform: translateX(-100%);
    transition-timing-function: ease-in-out;
    transition: transform 400ms;
  }
`;

const AboutPage = () => {
  return (
    <AboutPageStyled>
      <PageTitle centered title="about me"></PageTitle>
    </AboutPageStyled>
  );
};

export default AboutPage;
