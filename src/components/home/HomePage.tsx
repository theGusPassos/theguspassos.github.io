import React from "react";
import FrontPage from "./FrontPage";
import styled from "styled-components";
import { colors } from "../../data/colors";
import { defaultPadding } from "../common-styles/styles";
import HomeNavButton from "./common/HomeNavButton";
import AboutPage from "./AboutPage";
import { Switch, Route, RouteProps } from "react-router-dom";

const HomePageStyled = styled.section`
  height: 100%;
  display: grid;
  grid-template-rows: 90% 10%;
`;

const HomeNavigation = styled.div`
  background-color: ${colors.mainColor};
  color: ${colors.mainTextColor};
`;

const HomePage = (props: RouteProps) => {
  return (
    <HomePageStyled>
      <HomeNavigation>
        <Switch location={props.location}>
          <Route exact path="/">
            <FrontPage></FrontPage>
          </Route>

          <Route path="/about">
            <AboutPage></AboutPage>
          </Route>
        </Switch>
      </HomeNavigation>
      <HomeNavButton link="/" useMainColor>
        see my work
      </HomeNavButton>
    </HomePageStyled>
  );
};

export default HomePage;
