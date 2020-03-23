import React from "react";
import Header from "./Header";
import Carousel from "./Carousel/Carousel";
import Menu from "./Menu";

const bodyStyle = {
  display: "grid",
  gridTemplateRows: "15% 45% 40%",
  height: "100%"
};

function Body() {
  return (
    <div style={bodyStyle}>
      <Header></Header>
      <Carousel></Carousel>
      <Menu></Menu>
    </div>
  );
}

export default Body;
