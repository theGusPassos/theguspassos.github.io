import React from "react";
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
import { device } from "../../shared/device";
import styled from "styled-components";
import Menu from "./Menu";
import DeviceInfo from "../../shared/deviceInfo";

const HomePageStyled = styled(PageStyle)`
  @media ${device.desktop} {
    position: relative;
    margin: auto;
    width: 85%;
    height: unset;
    max-width: 800px;
  }
`;

const HomePageAnimated = GetAnimator(HomePageStyled);

const getAnimationMap = () => {
  const animationMap: LocationAnimationMap = {};
  animationMap[aboutPath] = AnimationDirection.FromRight;
  animationMap[projectListPath] = AnimationDirection.FromLeft;
  animationMap["default"] = AnimationDirection.FromDown;

  return animationMap;
};

interface HomeProps extends DeviceInfo {}

const HomePage = (props: HomeProps) => {
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
    <HomePageAnimated transform={animationTransform}>
      <PageTitle>some of the projects I've worked on</PageTitle>
      <CarouselContent isDesktop={props.isDesktop}></CarouselContent>
      {props.isDesktop ? null : <Menu></Menu>}
    </HomePageAnimated>
  );
};

export default HomePage;
