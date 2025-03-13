import React, { useEffect } from "react";
import styled from "styled-components";
import { maxWidthStyle } from "../common-styles/maxWidthStyle";
import { device } from "../../data/device";
import { pageMarginStyle } from "../common-styles/pageMarginStyle";
import PhotoCard from "./personal/PhotoCard";
import BioSection from "./personal/BioSection";
import Socials from "./Socials";

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

const PersonalInfoContainer = styled.section`
  height: 848px;
  margin: auto;
  display: grid;
  grid-template-columns: 45% 55%;
  align-items: center;
  max-width: 900px;
`

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomePageStyled>
      <PersonalInfoContainer>
        <PhotoCard></PhotoCard>
        <BioSection></BioSection>
      </PersonalInfoContainer>
      
      <Socials></Socials>
    </HomePageStyled>
  );
};

export default HomePage;
