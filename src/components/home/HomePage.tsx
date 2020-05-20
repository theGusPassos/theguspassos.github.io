import React from "react";
import FrontPage from "./FrontPage";
import styled from "styled-components";
import { colors } from "../../data/colors";
import HomeNavButton from "./common/HomeNavButton";
import AboutPage from "./AboutPage";
import { Switch, Route, RouteProps } from "react-router-dom";
import { projectListPath } from "../../data/routes";
import {
  GetAnimator,
  GetAnimationTransform,
  AnimationDirection,
  animationSpeed,
} from "../../animations/animations";
import { CSSTransition } from "react-transition-group";
import TransitionGroupStyled from "../common-styles/transitionGroup";

const HomePageStyled = styled.section`
  height: 100%;
  display: grid;
  grid-template-rows: 90% 10%;
`;

const HomePageAnimated = GetAnimator(HomePageStyled);
const AnimationTransform = GetAnimationTransform(AnimationDirection.FromUp);

const HomeNavigation = styled.div`
  background-color: ${colors.mainColor};
  color: ${colors.mainTextColor};
`;

const HomePage = () => {
  return (
    <HomePageAnimated transform={AnimationTransform}>
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
                    <AboutPage></AboutPage>
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroupStyled>
          )}
        ></Route>
      </HomeNavigation>
      <HomeNavButton link={projectListPath} useMainColor>
        see my work
      </HomeNavButton>
    </HomePageAnimated>
  );
};

export default HomePage;
