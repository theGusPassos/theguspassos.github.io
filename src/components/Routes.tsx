import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ProjectListPage from "./project/list/ProjectListPage";
import HomePage from "./home/HomePage";
import { homePath, projectListPath } from "../data/routes";
import DeviceInfo from "../models/deviceInfo";
import ReactGA from "react-ga";

interface RoutesProps extends DeviceInfo {
  location: any;
}

const Routes = (props: RoutesProps) => {
  useEffect(() => {
    ReactGA.pageview(window.location.hash);
  }, []);

  return (
    <Switch location={props.location}>
      <Route exact path={projectListPath}>
        <ProjectListPage deviceType={props.deviceType}></ProjectListPage>
      </Route>

      <Route path={homePath}>
        <HomePage deviceType={props.deviceType}></HomePage>
      </Route>
    </Switch>
  );
};

export default Routes;
