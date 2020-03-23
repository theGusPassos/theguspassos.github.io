import React from "react";
import colors from "../shared/colors";

const navContainer = {
  color: colors.mainColor,
  position: "relative" as const
};

const buttonContainer = {
  margin: "0",
  padding: "0",
  position: "absolute" as const,
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%"
};

const link = {
  fontSize: "1.5em",
  textAlign: "center" as const,
  listStyle: "none",
  margin: "10%"
};

function Menu() {
  return (
    <nav style={navContainer}>
      <ul style={buttonContainer}>
        <li style={link}>My other projects</li>
        <li style={link}>About me</li>
        <li style={link}>Contact</li>
      </ul>
    </nav>
  );
}

export default Menu;
