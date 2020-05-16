import React from "react";
import FrontPage from "./FrontPage";
import styled from "styled-components";
import { colors } from "../../data/colors";
import { defaultPadding } from "../common-styles/styles";
import HomeNavButton from "./HomeNavButton";

const HomePageStyled = styled.section`
  height: 100%;
  display: grid;
  grid-template-rows: 90% 10%;
`;

const HomeNavigation = styled.div`
  background-color: ${colors.mainColor};
  color: ${colors.mainTextColor};
`;

const HomeNavButtonWrapper = styled.div`
  display: flex;
`;

const HomePage = () => {
  return (
    <HomePageStyled>
      <HomeNavigation>
        <FrontPage></FrontPage>
      </HomeNavigation>
      <HomeNavButtonWrapper>
        <HomeNavButton>see my work</HomeNavButton>
      </HomeNavButtonWrapper>
    </HomePageStyled>
  );
};

export default HomePage;
