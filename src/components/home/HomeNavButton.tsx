import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../data/colors";

const HomeNaveButtonStyled = styled.div`
  text-align: center;
  margin: auto;

  a {
    color: ${colors.mainColor};
    font-size: 1.5em;
    text-decoration: none;
  }
`;

interface HomeNavButtonProps {
  children: string;
}

const HomeNavButton = (props: HomeNavButtonProps) => {
  return (
    <HomeNaveButtonStyled>
      <Link to="/">{props.children}</Link>
    </HomeNaveButtonStyled>
  );
};

export default HomeNavButton;
