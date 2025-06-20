import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { maxWidthStyle } from "../common-styles/maxWidthStyle";
import { device } from "../../data/device";
import Socials from "./Socials";
import PersonalInfoContainer from "./personal/PersonalInfoContainer";
import Projects from "./Projects";
import Connect from "./Connect";
import Footer from "../common-components/Footer";

const HomePageStyled = styled.section`
  width: 100%;
  height: 100%;

  background-color: #202023;

  ${maxWidthStyle};

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
      <Socials/>
      <Projects/>
      <Connect/>
      <Footer/>
    </HomePageStyled>
  );
};

export default HomePage;
