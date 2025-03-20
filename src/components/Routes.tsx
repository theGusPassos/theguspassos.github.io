import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import { homePath, projectPath } from "../data/routes";
import DeviceInfo from "../models/deviceInfo";
import ReactGA from "react-ga";
import ProjectPage from "./project/ProjectPage";

interface RoutesProps extends DeviceInfo {
  location: any;
}

const Routes = (props: RoutesProps) => {
  useEffect(() => {
    ReactGA.pageview(window.location.hash);
  }, []);

  return (
    <Switch location={props.location}>
      <Route exact path={projectPath}>
        <ProjectPage />
      </Route> 

      <Route path={homePath}>
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Routes;
