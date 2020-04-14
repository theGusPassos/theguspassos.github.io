import React from "react";
import PageTitle from "../common/PageTitle";
import styled from "styled-components";
import { AnimationDirection, GetAnimator } from "../../shared/animations";
import image from "../../images/me/EubyKuma.png";
import { device } from "../../shared/device";
import PageStyle from "../common/PageStyle";
import NavigationButtons from "./NavigationButtons";
import DeviceInfo from "../../shared/deviceInfo";
import { getLocationToAnim } from "../../shared/locationToAnim";
import { useLastLocation } from "react-router-last-location";
import { aboutPathHash, homePath, projectListPath } from "../../models/routes";
import {
  getAnimationBasedOnLocation,
  LocationAnimationMap,
} from "../../shared/dynamicAnimation";

const AboutPageStyled = styled(PageStyle)`
  font-size: 0.9em;

  @media ${device.tablet} {
    font-size: 1.1em;
  }
`;

const AboutPageAnimated = GetAnimator(AboutPageStyled);

const ImageContainer = styled.div``;

const Image = styled.img`
  display: flex;
  width: 45%;
  margin: 5% auto;

  @media ${device.tablet} {
    width: 25%;
    min-width: 250px;
  }
`;

const Info = styled.div`
  margin: 0 10%;

  span {
    display: block;
    text-align: center;
  }
`;

const Bio = styled.div`
  padding: 3% 20px;
  height: 70%;

  @media ${device.tablet} {
    p {
      margin: 30px 0;
    }
  }
`;

const getAnimationMap = () => {
  const animationMap: LocationAnimationMap = {};
  animationMap[homePath] = AnimationDirection.FromLeft;
  animationMap[projectListPath] = AnimationDirection.FromLeft;
  animationMap["default"] = AnimationDirection.FromDown;

  return animationMap;
};

interface AboutProps extends DeviceInfo {}

const AboutPage = (props: AboutProps) => {
  const location = getLocationToAnim(
    window.location.hash,
    useLastLocation()?.pathname,
    aboutPathHash
  );

  const animationTransform = getAnimationBasedOnLocation(
    getAnimationMap(),
    location
  );

  return (
    <AboutPageAnimated transform={animationTransform}>
      {props.isDesktop ? null : <PageTitle centered>about me</PageTitle>}
      <ImageContainer>
        <Image
          src={image}
          alt={"drawing of me and my pets by @kumamaskie"}
        ></Image>
        <Info>
          <span>Gustavo Passos, 22 years old, Brazillian</span>
          <span>currently working @ lambda3</span>
        </Info>
      </ImageContainer>
      <Bio>
        <p>
          I’ve been programming for 5 years now, 4 of those as a professional
          software developer in brazillian companies.
        </p>
        <p>
          I’m always studying and developing new projects with different
          technologies, specially games my defin
        </p>
        <p>
          I’m always studying and developing new projects with different
          technologies, specially games my defin
        </p>
      </Bio>
      {props.isDesktop ? null : <NavigationButtons></NavigationButtons>}
    </AboutPageAnimated>
  );
};

export default AboutPage;
