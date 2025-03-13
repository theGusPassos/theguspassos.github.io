import React, { useEffect } from "react";
import styled from "styled-components";
import { maxWidthStyle } from "../common-styles/maxWidthStyle";
import { device } from "../../data/device";
import { pageMarginStyle } from "../common-styles/pageMarginStyle";
import Socials from "./Socials";
import PersonalInfoContainer from "./personal/PersonalInfoContainer";

const HomePageStyled = styled.section`
  width: 100%;
  height: 100%;

  background-color: #17171A;

  ${maxWidthStyle};
  ${pageMarginStyle};

  @media ${device.tablet} {
    grid-template-rows: 35% 7% 5% auto auto;
  }

  @media ${device.desktop} {
    margin: auto;
  }
`;

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomePageStyled>
      <PersonalInfoContainer/>
      <Socials></Socials>
    </HomePageStyled>
  );
};

export default HomePage;
