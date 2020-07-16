import React from "react";
import "./App.css";
import Body from "./components/Body";
import { toast, ToastContainer } from "react-toastify";
import ReactGA from "react-ga";
import "./style/scrollbar.css";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { colors } from "./data/colors";

toast.configure();
ReactGA.initialize("UA-163830671-1");

const BodyStyled = styled.body`
  background-color: ${colors.mainBackgroundColor};
`;

const App = () => {
  return (
    <Body handleWidth>
      <ToastContainer></ToastContainer>
    </Body>
  );
};

export default App;
