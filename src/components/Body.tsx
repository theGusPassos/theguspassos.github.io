import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { HashRouter, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { LastLocationProvider } from "react-router-last-location";
import Routes from "./Routes";

const BodyGrid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 900px;
  margin: auto;
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
                  <Routes location={location}></Routes>
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
