import React from "react";
import Header from "./Header";
import styled from "styled-components";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import { HashRouter, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { LastLocationProvider } from "react-router-last-location";
import ProjectListPage from "./project/list/ProjectListPage";
import { sketch } from "../data/projects/sketch/sketch";
import ProjectViewPage from "./project/view/ProjectViewPage";

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
                  <Switch location={location}>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route exact path="/about" component={AboutPage}></Route>
                    <Route exact path="/projects">
                      <ProjectListPage></ProjectListPage>
                    </Route>
                    <Route
                      exact
                      path="/project/:id"
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
