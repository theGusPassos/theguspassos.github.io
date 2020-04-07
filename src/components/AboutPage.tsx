import React from "react";
import PageTitle from "./common/PageTitle";
import styled from "styled-components";
import { GetAnimationStyle, AnimationDirection } from "../shared/animations";
import image from "../images/me/EubyKuma.png";
import { device } from "../shared/device";
import LinkButton from "./common/LinkButton";
import PageStyle from "./common/PageStyle";
import { Link } from "react-router-dom";
import ContactsButton from "./contacts/ContactsButton";
import { colors } from "../shared/colors";

const AboutPageStyled = styled(PageStyle)`
  font-size: 0.9em;

  @media ${device.tablet} {
    font-size: 1.1em;
  }
`;

const AboutPageAnimated = GetAnimationStyle(
  AboutPageStyled,
  AnimationDirection.FromLeft
);

const ImageContainer = styled.div``;

const Image = styled.img`
  display: flex;
  width: 45%;
  margin: 5% auto;

  @media ${device.tablet} {
    width: 30%;
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

  @media ${device.tablet} {
    padding: 30px;

    p {
      margin: 30px 0;
    }
  }
`;

const NavigationButtons = styled.nav`
  flex: 1;
  display: flex;
`;

const LinkContainer = styled.ul`
  margin: 0 auto;
  font-size: 1.1em;
  padding: 0;

  li {
    height: 50%;
  }

  a {
    -webkit-tap-highlight-color: transparent;
    display: block;
    text-align: center;
  }

  button {
    padding: 10px;
  }

  @media ${device.tablet} {
    font-size: 0.9em;
  }
`;

const Item = styled.li`
  text-align: center;
  list-style: none;
`;

const LinkButtonStyled = styled(LinkButton)`
  width: 100%;
  border-top: 1px solid ${colors.mainColor};
`;

const AboutPage = () => {
  return (
    <AboutPageAnimated>
      <PageTitle centered>about me</PageTitle>
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
          <Item>
            <ContactsButton></ContactsButton>
          </Item>
          <Item>
            <Link to="/">
              <LinkButtonStyled>Return</LinkButtonStyled>
            </Link>
          </Item>
        </LinkContainer>
      </NavigationButtons>
    </AboutPageAnimated>
  );
};

export default AboutPage;
