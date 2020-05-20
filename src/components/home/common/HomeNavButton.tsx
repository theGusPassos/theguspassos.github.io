import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../data/colors";
import { buttonStyle } from "../../common-styles/buttonStyles";

const Wrapper = styled.div`
  display: flex;
`;

interface ColorProp {
  useMainColor?: boolean;
}

const HomeNaveButtonStyled = styled.div`
  text-align: center;
  margin: auto;
  font-size: 1.6em;

  a {
    color: ${(props: ColorProp) =>
      props.useMainColor ? colors.mainColor : colors.mainTextColor};

    background-color: ${(props: ColorProp) =>
      props.useMainColor
        ? colors.mainBackgroundColor
        : colors.mainColor} !important;

    ${buttonStyle};
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
