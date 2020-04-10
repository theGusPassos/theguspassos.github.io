import React from "react";
import { Route, Switch } from "react-router-dom";
import ProjectListPage from "./project/list/ProjectListPage";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import ProjectViewPage from "./project/view/ProjectViewPage";
import { sketch } from "../data/projects/sketch/sketch";
import {
  homePath,
  aboutPath,
  projectPath,
  projectListPath,
} from "../models/routes";

const Routes = (props: { location: any }) => {
  return (
    <Switch location={props.location}>
      <Route exact path={homePath}>
        <HomePage></HomePage>
      </Route>

      <Route exact path={aboutPath}>
        <AboutPage></AboutPage>
      </Route>

      <Route exact path={projectListPath}>
        <ProjectListPage></ProjectListPage>
      </Route>

      <Route
        exact
        path={projectPath}
        render={(props) => {
          return (
            <ProjectViewPage
              projectId={props.match.params.id}
              project={sketch}
            ></ProjectViewPage>
          );
        }}
      ></Route>
    </Switch>
  );
};

export default Routes;
