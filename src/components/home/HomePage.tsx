import React from "react";
import styled from "styled-components";
import DeviceInfo from "../../models/deviceInfo";
import NameCard from "./specifics/NameSection";
import BioSection from "./specifics/BioSection";
import ButtonToInternalPage from "../common-components/ButtonToInternalPage";
import ContactIcons from "../contacts/ContactIcons";
import MyImage from "./specifics/MyImage";
import TransitionOnEnter from "../../animations/TransitionOnEnter";
import { maxWidthStyle } from "../common-styles/maxWidthStyle";
import { device } from "../../data/device";

const HomePageStyled = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 30% auto auto auto auto;
  margin: 0 20px 10% 20px;

  ${maxWidthStyle};

  @media ${device.tablet} {
    grid-template-rows: 35% 7% 5% auto auto;
  }

  @media ${device.desktop} {
    margin: auto;
  }
`;

const ContactIconWidth = styled.div`
  width: 60%;
  margin: auto;

  @media ${device.tablet} {
    width: 30%;
  }
`;

const SeeMyProjectsButton = styled.div`
  width: 70%;
  margin: auto;

  @media ${device.tablet} {
    width: 35%;
  }
`;

interface HomePageProps extends DeviceInfo {}

const HomePage = (props: HomePageProps) => {
  return (
    <HomePageStyled>
      <TransitionOnEnter transitionDuration={1000} delayToStart={0}>
        <MyImage></MyImage>
      </TransitionOnEnter>

      <TransitionOnEnter transitionDuration={2000} delayToStart={1000}>
        <NameCard></NameCard>
      </TransitionOnEnter>

      <TransitionOnEnter transitionDuration={2000} delayToStart={1000}>
        <ContactIconWidth>
          <ContactIcons></ContactIcons>
        </ContactIconWidth>
      </TransitionOnEnter>

      <TransitionOnEnter transitionDuration={2000} delayToStart={1000}>
        <BioSection></BioSection>
      </TransitionOnEnter>

      <SeeMyProjectsButton>
        <TransitionOnEnter transitionDuration={2000} delayToStart={1000}>
          <ButtonToInternalPage></ButtonToInternalPage>
        </TransitionOnEnter>
      </SeeMyProjectsButton>
    </HomePageStyled>
  );
};

export default HomePage;
