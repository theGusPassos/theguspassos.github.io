import React from "react";
import styled from "styled-components";
import { HashRouter, Route } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import Routes from "./Routes";
import { device, isInDesktop, isInTablet } from "../data/device";
import { withResizeDetector } from "react-resize-detector";
import ResizeListenerProps from "../models/resizeListenerProps";
import { DeviceType } from "../models/deviceInfo";
import TransitionGroupStyled from "./common-styles/transitionGroup";
import { CSSTransition } from "react-transition-group";
import { animationSpeed } from "../animations/animations";

const BodyGrid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: auto;
  max-width: 1400px;

  @media ${device.desktop} {
    display: block;
    box-shadow: 0px 3px 11px 0px #0000000c;
  }
`;

interface BodyProps extends ResizeListenerProps {}

const Body = (props: BodyProps) => {
  const deviceType: DeviceType = {
    isTablet: isInTablet(props.width),
    isDesktop: isInDesktop(props.width),
  };

  return (
    <BodyGrid>
      <HashRouter basename="/">
        <LastLocationProvider>
          <Route
            render={({ location }) => (
              <Routes deviceType={deviceType} location={location}></Routes>
            )}
          ></Route>
        </LastLocationProvider>
      </HashRouter>
    </BodyGrid>
  );
};

export default withResizeDetector(Body);
