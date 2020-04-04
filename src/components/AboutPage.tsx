import React from "react";
import PageTitle from "./PageTitle";
import styled from "styled-components";
import { GetAnimationStyle, AnimationDirection } from "../shared/animations";
import image from "../images/me/EubyKuma.png";
import { device } from "../shared/device";
import LinkButton from "./common/LinkButton";

const AboutPageStyled = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-size: 0.9em;
`;

const AboutPageAnimated = GetAnimationStyle(
  AboutPageStyled,
  AnimationDirection.FromLeft
);

const AboutContent = styled.section`
  height: 100%;
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  display: flex;
  width: 50%;
  margin: 5% auto;
`;

const Info = styled.div`
  margin: 0 10%;

  span {
    display: block;
    text-align: center;
  }
`;

const Bio = styled.div`
  padding: 10% 20px;

  @media ${device.tablet} {
    padding: 30px;
  }
`;

const NavigationButtons = styled.div`
  flex: 1;
  display: flex;
`;

const LinkContainer = styled.div`
  margin: auto;
`;

const AboutPage = () => {
  return (
    <AboutPageAnimated>
      <PageTitle centered title="about me"></PageTitle>
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
      </Bio>
      <NavigationButtons>
        <LinkContainer>
          <LinkButton to="/">My Contacts</LinkButton>
          <LinkButton to="/">Return</LinkButton>
        </LinkContainer>
      </NavigationButtons>
    </AboutPageAnimated>
  );
};

export default AboutPage;
