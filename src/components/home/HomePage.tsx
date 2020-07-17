import React from "react";
import styled from "styled-components";
import { device } from "../../data/device";
import DeviceInfo from "../../models/deviceInfo";
import NameCard from "./specifics/NameSection";
import BioSection from "./specifics/BioSection";
import ButtonToInternalPage from "../common-components/ButtonToInternalPage";
import ContactIcons from "../contacts/ContactIcons";
import MyImage from "./specifics/MyImage";

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
      <MyImage></MyImage>
      <NameCard></NameCard>
      <ContactIcons></ContactIcons>
      <BioSection></BioSection>
      <SeeMyProjectsButton>
        <ButtonToInternalPage></ButtonToInternalPage>
      </SeeMyProjectsButton>
    </HomePageStyled>
  );
};

export default HomePage;
