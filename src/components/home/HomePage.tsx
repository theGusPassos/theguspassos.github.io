import React from "react";
import Menu from "./Menu";
import styled from "styled-components";
import {
  GetTranslateFromTransform,
  Transform,
  animationSpeed,
} from "../../shared/animations";
import { useLastLocation } from "react-router-last-location";
import { getCurrentAnimation } from "./homeAnimation";
import PageTitle from "../common/PageTitle";
import PageStyle from "../common/PageStyle";
import CarouselContent from "./carousel/CarouselContent";

interface HomePageProps {
  transform: Transform;
}

const HomePageStyled = styled(PageStyle)`
  &.animation-enter {
    transform: ${(props: HomePageProps) =>
      GetTranslateFromTransform(props.transform)};
  }

  &.animation-enter-active {
    transform: translateX(0);
    transition-timing-function: ease-in-out;
    transition: transform ${animationSpeed}ms;
  }

  &.animation-exit {
    transform: translateX(0);
  }

  &.animation-exit-active {
    transform: ${(props: HomePageProps) =>
      GetTranslateFromTransform(props.transform)};
    transition-timing-function: ease-in-out;
    transition: transform ${animationSpeed}ms;
  }
`;

const HomePage = () => {
  const currentLocation = window.location.hash;
  const lastLocation = useLastLocation();

  const animationDirection = getCurrentAnimation(
    currentLocation,
    lastLocation?.pathname
  );

  return (
    <HomePageStyled transform={animationDirection}>
      <PageTitle>some of the projects I've worked on</PageTitle>
      <CarouselContent></CarouselContent>
      <Menu></Menu>
    </HomePageStyled>
  );
};

export default HomePage;
