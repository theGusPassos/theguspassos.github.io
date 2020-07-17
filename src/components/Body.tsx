import React from "react";
import styled from "styled-components";
import { HashRouter, Route } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import Routes from "./Routes";
import { isInDesktop, isInTablet } from "../data/device";
import { withResizeDetector } from "react-resize-detector";
import ResizeListenerProps from "../models/resizeListenerProps";
import { DeviceType } from "../models/deviceInfo";
import { colors } from "../data/colors";

const BodyGrid = styled.div`
  height: 100%;
  margin: 20px;
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
