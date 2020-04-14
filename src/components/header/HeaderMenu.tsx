import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LinkButton from "../common/LinkButton";
import { colors } from "../../shared/colors";

const HeaderMenuStyled = styled.section`
  padding: 15% 15% 0 15%;
  height: 25%;
`;

const LinkContainer = styled.ul`
  margin: auto;
  padding: 0;
  width: 100%;
`;

const Item = styled.li`
  font-size: 1.3em;
  text-align: center;
  list-style: none;
`;

interface ButtonProps {
  border?: boolean;
}

const MenuButton = styled(LinkButton)`
  width: 100%;
  padding: 7% 0;
  color: #fff;
  background: ${colors.mainColor};
  border-top: ${(props: ButtonProps) =>
    props.border ? "solid 1px white" : "none"};
`;

const HeaderMenu = () => {
  return (
    <HeaderMenuStyled>
      <LinkContainer>
        <Item>
          <Link to="/projects">
            <MenuButton>My other projects</MenuButton>
          </Link>
        </Item>
        <Item>
          <Link to="/about">
            <MenuButton border>About Me</MenuButton>
          </Link>
        </Item>
      </LinkContainer>
    </HeaderMenuStyled>
  );
};

export default HeaderMenu;