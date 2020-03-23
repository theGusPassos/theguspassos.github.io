import React from "react";
import colors from "../../shared/colors";

const style = {
  background: colors.mainColor,
  color: colors.mainTextColor,
  textAlign: "center" as const,
  padding: "10px",
  fontSize: "0.95em"
};

function CarouselTitle() {
  return <div style={style}>those are some of the projects I've worked on</div>;
}

export default CarouselTitle;
