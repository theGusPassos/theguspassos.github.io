import React from "react";
import colors from "../shared/colors";
import styled from "styled-components";
import { prependListener } from "cluster";

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
  padding: "6% 0"
};

interface ButtonProps {
  border?: boolean;
}

const Button = styled.button`
  width: 70%;
  color: ${colors.mainColor};
  background: ${colors.secondBackgroundColor};
  font-size: 1.2em;
  border: none;
  padding: 6% 0;
  border-bottom: ${(props: ButtonProps) =>
    props.border ? "solid 1px" : "none"};
  border-top: ${(props: ButtonProps) => (props.border ? "solid 1px" : "none")};
`;

const Menu = () => {
  return (
    <nav style={navContainer}>
      <ul style={buttonContainer}>
        <li style={link}>
          <Button>My other projects</Button>
        </li>
        <li style={link}>
          <Button border>About me</Button>
        </li>
        <li style={link}>
          <Button>Contact</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
