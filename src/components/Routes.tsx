import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ProjectListPage from "./project/list/ProjectListPage";
import HomePage from "./home/HomePage";
import ProjectViewPage from "./project/view/ProjectViewPage";
import { homePath, projectPath, projectListPath } from "../data/routes";
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
        <ProjectListPage></ProjectListPage>
      </Route>

      <Route path={homePath}>
        <HomePage location={props.location}></HomePage>
      </Route>

      <Route
        exact
        path={projectPath}
        render={(renderProps) => {
          return (
            <ProjectViewPage
              projectId={renderProps.match.params.id}
              deviceType={props.deviceType}
            ></ProjectViewPage>
          );
        }}
      ></Route>
    </Switch>
  );
};

export default Routes;
