import React from "react";
import { GetAnimator, AnimationDirection } from "../../animations/animations";
import { useLastLocation } from "react-router-last-location";
import PageTitle from "../common-components/PageTitle";
import pageStyle from "../common-styles/pageStyle";
import CarouselContent from "./carousel/CarouselContent";
import {
  LocationAnimationMap,
  getAnimationBasedOnLocation,
} from "../../animations/dynamicAnimation";
import { aboutPath, projectListPath, homePathHash } from "../../data/routes";
import { getLocationToAnim } from "../../animations/locationToAnim";
import { device } from "../../data/device";
import styled from "styled-components";
import Menu from "./Menu";
import DeviceInfo from "../../models/deviceInfo";

const HomePageStyled = styled(pageStyle)`
  @media ${device.desktop} {
    position: relative;
    margin: auto;
    width: 75%;
    height: unset;
    max-width: 850px;
  }
`;

const HomePageAnimated = GetAnimator(HomePageStyled);

interface HomeProps extends DeviceInfo {}

const HomePage = (props: HomeProps) => {
  const location = getLocationToAnim(
    window.location.hash,
    useLastLocation()?.pathname,
    homePathHash
  );

  const getAnimationMap = () => {
    const animationMap: LocationAnimationMap = {};
    animationMap[aboutPath] = AnimationDirection.FromRight;
    animationMap[projectListPath] = AnimationDirection.FromLeft;
    animationMap["default"] = AnimationDirection.FromDown;

    return animationMap;
  };

  const animationTransform = getAnimationBasedOnLocation(
    getAnimationMap(),
    location
  );

  return (
    <HomePageAnimated transform={animationTransform}>
      <PageTitle>some of the projects I've worked on</PageTitle>
      <CarouselContent isDesktop={props.isDesktop}></CarouselContent>
      {props.isDesktop ? null : <Menu></Menu>}
    </HomePageAnimated>
  );
};

export default HomePage;
