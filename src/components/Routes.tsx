import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ProjectListPage from "./project/list/ProjectListPage";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import ProjectViewPage from "./project/view/ProjectViewPage";
import { sketch } from "../data/projects/unity-state-machine/unityStateMachine";
import {
  homePath,
  aboutPath,
  projectPath,
  projectListPath,
} from "../data/routes";
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
      <Route exact path={homePath}>
        <HomePage isDesktop={props.isDesktop}></HomePage>
      </Route>

      <Route exact path={aboutPath}>
        <AboutPage isDesktop={props.isDesktop}></AboutPage>
      </Route>

      <Route exact path={projectListPath}>
        <ProjectListPage
          isDesktop={props.isDesktop}
          isTablet={props.isTablet}
        ></ProjectListPage>
      </Route>

      <Route
        exact
        path={projectPath}
        render={(renderProps) => {
          return (
            <ProjectViewPage
              projectId={renderProps.match.params.id}
              isDesktop={props.isDesktop}
              isTablet={props.isTablet}
            ></ProjectViewPage>
          );
        }}
      ></Route>
    </Switch>
  );
};

export default Routes;
