import React from "react";
import styled from "styled-components";
import DeviceInfo from "../../models/deviceInfo";
import NameCard from "./specifics/NameSection";
import BioSection from "./specifics/BioSection";
import ButtonToInternalPage from "../common-components/ButtonToInternalPage";
import ContactIcons from "../contacts/ContactIcons";
import MyImage from "./specifics/MyImage";
import TransitionOnEnter from "../../animations/TransitionOnEnter";

const HomePageStyled = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 30% auto 5% auto auto;
  margin: 0 20px 0 20px;
`;

const SeeMyProjectsButton = styled.div`
  width: 70%;
  margin: auto;
`;

interface HomePageProps extends DeviceInfo {}

const HomePage = (props: HomePageProps) => {
  return (
    <HomePageStyled>
      <TransitionOnEnter transitionDuration={1000}>
        <MyImage></MyImage>
      </TransitionOnEnter>

      <TransitionOnEnter transitionDuration={1000}>
        <NameCard></NameCard>
      </TransitionOnEnter>

      <TransitionOnEnter transitionDuration={1000}>
        <ContactIcons></ContactIcons>
      </TransitionOnEnter>

      <TransitionOnEnter transitionDuration={1000}>
        <BioSection></BioSection>
      </TransitionOnEnter>

      <TransitionOnEnter transitionDuration={1000}>
        <SeeMyProjectsButton>
          <ButtonToInternalPage></ButtonToInternalPage>
        </SeeMyProjectsButton>
      </TransitionOnEnter>
    </HomePageStyled>
  );
};

export default HomePage;
