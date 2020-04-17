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
import { aboutPathHash, homePath, projectListPath } from "../../data/routes";
import {
  getAnimationBasedOnLocation,
  LocationAnimationMap,
} from "../../shared/dynamicAnimation";
import { colors } from "../../shared/colors";
import { Link } from "react-router-dom";
import { MainToolTip } from "../common/ToolTip";

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

  .tooltip {
    background: black;
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
  line-height: 1.7;

  p a {
    color: ${colors.mainColor};
  }

  @media ${device.tablet} {
    p {
      margin: 30px 0;
    }
  }
`;

interface AboutProps extends DeviceInfo {}

const AboutPage = (props: AboutProps) => {
  const location = getLocationToAnim(
    window.location.hash,
    useLastLocation()?.pathname,
    aboutPathHash
  );

  const getAnimationMap = () => {
    const animationMap: LocationAnimationMap = {};
    animationMap[homePath] = AnimationDirection.FromLeft;
    animationMap[projectListPath] = AnimationDirection.FromLeft;
    animationMap["default"] = AnimationDirection.FromDown;

    return animationMap;
  };

  const animationTransform = getAnimationBasedOnLocation(
    getAnimationMap(),
    location
  );

  return (
    <AboutPageAnimated transform={animationTransform}>
      {props.isDesktop ? null : <PageTitle centered>about me</PageTitle>}
      <ImageContainer>
        <MainToolTip />
        <Image
          src={image}
          alt="drawing of me and my pets by @kumamaskie"
          data-tip="drawing by @kumamaskie"
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
          I'm interested in developing any kind of software or game, regardless
          of the tech stack. I have no preferred programming language or
          framework, the software quality and the user experience are the most
          important things for me. That's why I look forward to working with
          people that have the same objectives.
        </p>
        <p>
          If you're interested in the technologies that I'm already experienced
          with, you can check my <Link to="/projects">project page</Link> for
          finished projects or my{" "}
          <a
            href="https://github.com/theGusPassos"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>{" "}
          for ongoing ones. For professional projects and experience, feel free
          to check my{" "}
          <a
            href="https://www.linkedin.com/in/theguspassos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin page
          </a>
          .
        </p>
        <p>If you need help in a project of yours feel free to contact me =)</p>
      </Bio>
      {props.isDesktop ? null : <NavigationButtons></NavigationButtons>}
    </AboutPageAnimated>
  );
};

export default AboutPage;
