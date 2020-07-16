import React from "react";
import styled from "styled-components";
import { colors } from "../../data/colors";
import HomeNavButton from "./common/HomeNavButton";
import { Switch, Route } from "react-router-dom";
import { projectListPath } from "../../data/routes";
import { animationSpeed } from "../../animations/animations";
import { CSSTransition } from "react-transition-group";
import TransitionGroupStyled from "../common-styles/transitionGroup";
import { device } from "../../data/device";
import DeviceInfo from "../../models/deviceInfo";

const HomePageStyled = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 90% 10%;
  background-color: white;
  z-index: 10;

  @media ${device.tablet} {
    grid-template-rows: 80% 20%;
  }
`;

interface HomePageProps extends DeviceInfo {}

const HomePage = (props: HomePageProps) => {
  return (
    <HomePageStyled>
      <div>yeah front page</div>
    </HomePageStyled>
  );
};

export default HomePage;
