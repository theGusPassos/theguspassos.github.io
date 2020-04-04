import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { colors } from "../shared/colors";
import HomePage from "./home/HomePage";
import AboutPage from "./AboutPage";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { LastLocationProvider } from "react-router-last-location";

const BodyGrid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 900px;
  margin: auto;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 40%;
  background-color: ${colors.mainColor};
`;

const TransitionGroupStyled = styled(TransitionGroup)`
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Body = () => {
  return (
    <BodyGrid>
      <Header></Header>
      <HashRouter basename="/">
        <LastLocationProvider>
          <Route
            render={({ location }) => (
              <TransitionGroupStyled>
                <CSSTransition
                  key={location.pathname}
                  classNames="animation"
                  timeout={400}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route exact path="/about" component={AboutPage}></Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroupStyled>
            )}
          ></Route>
        </LastLocationProvider>
      </HashRouter>
    </BodyGrid>
  );
};

export default Body;
