import React from "react";
import colors from "../shared/colors";

const navContainer = {
  color: colors.mainColor
};

const buttonContainer = {
  padding: "0"
};

const normalButton = {
  fontSize: "1.5em",
  textAlign: "center" as const,
  listStyle: "none"
};

const middleButton = {
  ...normalButton
};

function Menu() {
  return (
    <nav style={navContainer}>
      <ul style={buttonContainer}>
        <li style={normalButton}>My other projects</li>
        <li style={middleButton}>About me</li>
        <li style={normalButton}>Contact</li>
      </ul>
    </nav>
  );
}

export default Menu;
