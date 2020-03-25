import React from "react";
import colors from "../shared/colors";

const navContainer = {
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
  textAlign: "center" as const,
  listStyle: "none"
};

const button = {
  width: "70%",
  color: colors.mainColor,
  background: colors.secondBackgroundColor,
  fontSize: "1.2em",
  border: "none",
  padding: "6% 0",
  ":hover": {
    textDecoration: "underline"
  }
};

const middleButton = {
  ...button,
  borderBottom: "solid 1px",
  borderTop: "solid 1px"
};

const Menu = () => {
  return (
    <nav style={navContainer}>
      <ul style={buttonContainer}>
        <li style={link}>
          <button style={button}>My other projects</button>
        </li>
        <li style={link}>
          <button style={middleButton}>About me</button>
        </li>
        <li style={link}>
          <button style={button}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
