import React from "react";
import "./App.css";
import Body from "./components/Body";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const App = () => {
  return (
    <Body handleWidth>
      <ToastContainer></ToastContainer>
    </Body>
  );
};

export default App;
