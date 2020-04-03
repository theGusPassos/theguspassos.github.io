import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { colors } from "../shared/colors";
import HomePage from "./HomePage";
import { HashRouter, Route, Link } from "react-router-dom";

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
      <Background></Background>
      <BodyGrid>
        <Header></Header>
        <HashRouter basename="/">
          <Route exact path="/" component={HomePage}></Route>
        </HashRouter>
      </BodyGrid>
    </Content>
  );
};

export default Body;
