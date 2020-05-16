import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../data/colors";

const Wrapper = styled.div`
  display: flex;
`;

interface ColorProp {
  useMainColor?: boolean;
}

const HomeNaveButtonStyled = styled.div`
  text-align: center;
  margin: auto;

  a {
    color: ${(props: ColorProp) =>
      props.useMainColor ? colors.mainColor : colors.mainTextColor};
    font-size: 1.5em;
    text-decoration: none;
  }
`;

interface HomeNavButtonProps extends ColorProp {
  children: string;
  link: string;
}

const HomeNavButton = (props: HomeNavButtonProps) => {
  return (
    <Wrapper>
      <HomeNaveButtonStyled useMainColor={props.useMainColor}>
        <Link to={props.link}>{props.children}</Link>
      </HomeNaveButtonStyled>
    </Wrapper>
  );
};

export default HomeNavButton;
