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
import NameCard from "./specifics/NameSection";
import BioSection from "./specifics/BioSection";

const HomePageStyled = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
`;

const Image = styled.img`
  width: 60%;
  margin: 0px auto 10px auto;
`;

interface HomePageProps extends DeviceInfo {}

const HomePage = (props: HomePageProps) => {
  return (
    <HomePageStyled>
      <Image src="images/eubykuma.png"></Image>
      <NameCard></NameCard>
      <BioSection></BioSection>
    </HomePageStyled>
  );
};

export default HomePage;
