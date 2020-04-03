import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { colors } from "../shared/colors";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  Router,
  BrowserRouter,
} from "react-router-dom";

const Content = styled.div`
  height: 100%;
`;

const BodyGrid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 900px;
  margin: auto;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 40%;
  background-color: ${colors.mainColor};
`;

const Body = () => {
  return (
    <Content>
      <BodyGrid>
        <Header></Header>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/about" component={AboutPage}></Route>
          </Switch>
        </BrowserRouter>
      </BodyGrid>
    </Content>
  );
};

export default Body;
