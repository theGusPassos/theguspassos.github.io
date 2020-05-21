import React from "react";
import FrontPage from "./FrontPage";
import styled from "styled-components";
import { colors } from "../../data/colors";
import HomeNavButton from "./common/HomeNavButton";
import AboutPage from "./AboutPage";
import { Switch, Route } from "react-router-dom";
import { projectListPath } from "../../data/routes";
import { animationSpeed } from "../../animations/animations";
import { CSSTransition } from "react-transition-group";
import TransitionGroupStyled from "../common-styles/transitionGroup";
import { device } from "../../data/device";
import DeviceInfo from "../../models/deviceInfo";

const HomePageStyled = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 90% 10%;
  background-color: white;
  z-index: 10;

  @media ${device.tablet} {
    grid-template-rows: 80% 20%;
  }
`;

const HomeNavigation = styled.div`
  background-color: ${colors.mainColor};
  color: ${colors.mainTextColor};
`;

interface HomePageProps extends DeviceInfo {}

const HomePage = (props: HomePageProps) => {
  return (
    <HomePageStyled>
      <HomeNavigation>
        <Route
          render={({ location }) => (
            <TransitionGroupStyled>
              <CSSTransition
                key={location?.pathname}
                classNames="animation"
                timeout={animationSpeed}
              >
                <Switch location={location}>
                  <Route exact path="/">
                    <FrontPage></FrontPage>
                  </Route>

                  <Route exact path="/about">
                    <AboutPage deviceType={props.deviceType}></AboutPage>
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroupStyled>
          )}
        ></Route>
      </HomeNavigation>
      <HomeNavButton link={projectListPath} useMainColor>
        see my projects
      </HomeNavButton>
    </HomePageStyled>
  );
};

export default HomePage;
