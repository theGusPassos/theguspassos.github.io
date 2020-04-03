import React from "react";
import Menu from "./Menu";
import CarouselContent from "./Carousel/CarouselContent";
import styled from "styled-components";
import { useLastLocation } from "react-router-last-location";

const HomePageStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  &.animation-enter {
    transform: translateX(100%);
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
    transform: translateX(100%);
    transition-timing-function: ease-in-out;
    transition: transform 400ms;
  }
`;

const HomePage = () => {
  return (
    <HomePageStyled>
      <CarouselContent></CarouselContent>
      <Menu></Menu>
    </HomePageStyled>
  );
};

export default HomePage;
