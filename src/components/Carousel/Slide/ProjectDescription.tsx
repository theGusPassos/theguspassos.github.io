import React from "react";

const style = {
  fontSize: "1em",
  background: "#f1f1f1" as const,
  position: "absolute" as const,
  bottom: "0px",
  width: "55%",
  height: "25%",
  padding: "10px",
  borderRadius: "0 40px 0 0"
};

function ProjectDescription() {
  return (
    <div style={style}>
      My firt project made with commercial intent. There’s a playable demo
      available
    </div>
  );
}

export default ProjectDescription;
