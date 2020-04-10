import React from "react";
import Menu from "./Menu";
import { GetAnimator, AnimationDirection } from "../../shared/animations";
import { useLastLocation } from "react-router-last-location";
import PageTitle from "../common/PageTitle";
import PageStyle from "../common/PageStyle";
import CarouselContent from "./carousel/CarouselContent";
import {
  LocationAnimationMap,
  getAnimationBasedOnLocation,
} from "../../shared/dynamicAnimation";
import { aboutPath, projectListPath, homePathHash } from "../../models/routes";
import { getLocationToAnim } from "../../shared/locationToAnim";

const HomePageStyled = GetAnimator(PageStyle);

const getAnimationMap = () => {
  const animationMap: LocationAnimationMap = {};
  animationMap[aboutPath] = AnimationDirection.FromRight;
  animationMap[projectListPath] = AnimationDirection.FromLeft;
  animationMap["default"] = AnimationDirection.FromDown;

  return animationMap;
};

const HomePage = () => {
  const location = getLocationToAnim(
    window.location.hash,
    useLastLocation()?.pathname,
    homePathHash
  );

  const animationTransform = getAnimationBasedOnLocation(
    getAnimationMap(),
    location
  );

  return (
    <HomePageStyled transform={animationTransform}>
      <PageTitle>some of the projects I've worked on</PageTitle>
      <CarouselContent></CarouselContent>
      <Menu></Menu>
    </HomePageStyled>
  );
};

export default HomePage;
