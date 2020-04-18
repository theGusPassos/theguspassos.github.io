import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LinkButton from "../common-styles/linkButton";
import { colors } from "../../data/colors";

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
          <Link to="/projects" tabIndex={-1}>
            <MenuButton tabIndex={2}>My other projects</MenuButton>
          </Link>
        </Item>
        <Item>
          <Link to="/about" tabIndex={-1}>
            <MenuButton border tabIndex={3}>
              About Me
            </MenuButton>
          </Link>
        </Item>
      </LinkContainer>
    </HeaderMenuStyled>
  );
};

export default HeaderMenu;
