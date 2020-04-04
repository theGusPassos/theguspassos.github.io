import React from "react";
import Menu from "./Menu";
import CarouselContent from "./Carousel/CarouselContent";
import styled from "styled-components";
import {
  GetTranslateFromTransform,
  Transform,
  animationSpeed,
  GetEnterStartPosition,
  AnimationDirection,
} from "../shared/animations";
import { useLastLocation } from "react-router-last-location";

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

const getAnimationBasedOnNewLocation = (newLocation: string) => {
  if (newLocation == "#/about")
    return GetEnterStartPosition(AnimationDirection.FromRight);
  return GetEnterStartPosition(AnimationDirection.FromUp);
};

const getAnimationBasedOnLastLocation = (
  lastLocation: string | undefined
): Transform => {
  if (lastLocation == "/about")
    return GetEnterStartPosition(AnimationDirection.FromRight);
  return GetEnterStartPosition(AnimationDirection.FromUp);
};

const getAnimation = (
  currentLocation: string,
  lastLocation: string | undefined
) => {
  console.log(currentLocation);
  if (currentLocation == "#/")
    return getAnimationBasedOnLastLocation(lastLocation);
  else return getAnimationBasedOnNewLocation(currentLocation);
};

const HomePage = () => {
  const currentLocation = window.location.hash;
  const lastLocation = useLastLocation();

  const animationDirection = getAnimation(
    currentLocation,
    lastLocation?.pathname
  );

  return (
    <HomePageStyled transform={animationDirection}>
      <CarouselContent></CarouselContent>
      <Menu></Menu>
    </HomePageStyled>
  );
};

export default HomePage;
