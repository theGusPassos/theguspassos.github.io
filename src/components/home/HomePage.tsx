import React from "react";
import Menu from "../Menu";
import CarouselContent from "../Carousel/CarouselContent";
import styled from "styled-components";
import {
  GetTranslateFromTransform,
  Transform,
  animationSpeed,
} from "../../shared/animations";
import { useLastLocation } from "react-router-last-location";
import { getCurrentAnimation } from "./homeAnimation";
import PageTitle from "../PageTitle";

interface HomePageProps {
  transform: Transform;
}

const HomePageStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

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
      <PageTitle
        centered={false}
        title={"some of the projects I've worked on"}
      ></PageTitle>
      <CarouselContent></CarouselContent>
      <Menu></Menu>
    </HomePageStyled>
  );
};

export default HomePage;
