import React from "react";
import colors from "../../../shared/colors";

const style = {
  container: {
    display: "flex",
    position: "absolute" as const,
    bottom: "-40px",
    width: "100%",
    height: "25%"
  },
  title: {
    background: colors.mainColor,
    width: "40%",
    textAlign: "center" as const,
    padding: "10px 5px",
    color: "#fff",
    fontSize: "1.1em",
    letterSpacing: "5px",
    border: "1px solid white",
    position: "absolute" as const,
    top: "-35px"
  },
  description: {
    fontSize: "0.8em",
    background: "#f1f1f1" as const,
    width: "100%",
    padding: "10px"
  }
};

function ProjectDescription() {
  return (
    <div style={style.container}>
      <div style={style.title}>
        <strong>SKETCH</strong>
      </div>
      <div style={style.description}>
        My firt project made with commercial intent. There’s a playable demo
        available
      </div>
    </div>
  );
}

export default ProjectDescription;
