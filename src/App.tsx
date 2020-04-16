import React from "react";
import "./App.css";
import Body from "./components/Body";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga";

toast.configure();
ReactGA.initialize("UA-163830671-1");

const App = () => {
  return (
    <Body handleWidth>
      <ToastContainer></ToastContainer>
    </Body>
  );
};

export default App;
