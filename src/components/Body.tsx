import React from "react";
import Header from "./header/Header";
import styled from "styled-components";
import { HashRouter, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { LastLocationProvider } from "react-router-last-location";
import Routes from "./Routes";
import { animationSpeed } from "../animations/animations";
import { device, isInDesktop } from "../shared/device";
import { withResizeDetector } from "react-resize-detector";
import ResizeListenerProps from "../shared/resizeListenerProps";
import { colors } from "../data/colors";

const BodyGrid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: auto;
  max-width: 1400px;
  background-color: ${colors.mainBackgroundColor};

  @media ${device.desktop} {
    display: block;
    box-shadow: 0px 3px 11px 0px #0000000c;
  }
`;

const TransitionGroupStyled = styled(TransitionGroup)`
  height: 100%;
  position: relative;
  overflow: hidden;

  @media ${device.desktop} {
    display: flex;
  }
`;

interface BodyProps extends ResizeListenerProps {}

const Body = (props: BodyProps) => {
  return (
    <BodyGrid>
      <HashRouter basename="/">
        <Header isDesktop={isInDesktop(props.width)}></Header>
        <LastLocationProvider>
          <Route
            render={({ location }) => (
              <TransitionGroupStyled>
                <CSSTransition
                  key={location.pathname}
                  classNames="animation"
                  timeout={animationSpeed}
                >
                  <Routes
                    isDesktop={isInDesktop(props.width)}
                    location={location}
                  ></Routes>
                </CSSTransition>
              </TransitionGroupStyled>
            )}
          ></Route>
        </LastLocationProvider>
      </HashRouter>
    </BodyGrid>
  );
};

export default withResizeDetector(Body);
