import React from "react";
import Menu from "./Menu";
import { GetAnimator } from "../../shared/animations";
import { useLastLocation } from "react-router-last-location";
import { getCurrentAnimation } from "./homeAnimation";
import PageTitle from "../common/PageTitle";
import PageStyle from "../common/PageStyle";
import CarouselContent from "./carousel/CarouselContent";

const HomePageStyled = GetAnimator(PageStyle);

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
