import React, { useEffect } from "react";
import styled from "styled-components";
import NameCard from "../common-components/NameSection";
import BioSection from "./specifics/BioSection";
import ButtonToInternalPage from "../common-components/ButtonToInternalPage";
import ContactIcons from "../contacts/ContactIcons";
import MyImage from "./specifics/MyImage";
import TransitionOnEnter from "../../animations/TransitionOnEnter";
import { maxWidthStyle } from "../common-styles/maxWidthStyle";
import { device } from "../../data/device";
import { pageMarginStyle } from "../common-styles/pageMarginStyle";

const HomePageStyled = styled.section`
  width: 100%;
  height: 100%;

  ${maxWidthStyle};
  ${pageMarginStyle};

  @media ${device.tablet} {
    grid-template-rows: 35% 7% 5% auto auto;
  }

  @media ${device.desktop} {
    margin: auto;
  }
`;

const ContactIconWidth = styled.div`
  width: 60%;
  margin: 5% auto;

  @media ${device.tablet} {
    width: 30%;
  }
`;

const SeeMyProjectsButton = styled.div`
  width: 70%;
  margin: 5% auto;

  @media ${device.tablet} {
    width: 35%;
  }
`;

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomePageStyled>
      <TransitionOnEnter transitionDuration={1000} delayToStart={0}>
        <MyImage></MyImage>
      </TransitionOnEnter>

      <TransitionOnEnter transitionDuration={2000} delayToStart={1000}>
        <NameCard></NameCard>
      </TransitionOnEnter>

      <ContactIconWidth>
        <TransitionOnEnter transitionDuration={2000} delayToStart={1000}>
          <ContactIcons></ContactIcons>
        </TransitionOnEnter>
      </ContactIconWidth>

      <TransitionOnEnter transitionDuration={2000} delayToStart={1000}>
        <BioSection></BioSection>
      </TransitionOnEnter>

      <SeeMyProjectsButton>
        <TransitionOnEnter transitionDuration={2000} delayToStart={1000}>
          <ButtonToInternalPage path="/projects">
            see my projects
          </ButtonToInternalPage>
        </TransitionOnEnter>
      </SeeMyProjectsButton>
    </HomePageStyled>
  );
};

export default HomePage;
