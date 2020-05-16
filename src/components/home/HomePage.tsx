import React from "react";
import FrontPage from "./FrontPage";
import styled from "styled-components";
import { colors } from "../../data/colors";
import { defaultPadding } from "../common-styles/styles";
import HomeNavButton from "./common/HomeNavButton";
import AboutPage from "./AboutPage";

const HomePageStyled = styled.section`
  height: 100%;
  display: grid;
  grid-template-rows: 90% 10%;
`;

const HomeNavigation = styled.div`
  background-color: ${colors.mainColor};
  color: ${colors.mainTextColor};
`;

const HomePage = () => {
  return (
    <HomePageStyled>
      <HomeNavigation>
        <FrontPage></FrontPage>
      </HomeNavigation>
      <HomeNavButton link="/" useMainColor>
        see my work
      </HomeNavButton>
    </HomePageStyled>
  );
};

export default HomePage;
