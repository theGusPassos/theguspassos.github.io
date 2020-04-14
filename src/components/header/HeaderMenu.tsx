import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LinkButton from "../common/LinkButton";
import { colors } from "../../shared/colors";

const HeaderMenuStyled = styled.section`
  padding: 30px;
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

const MenuButton = styled(LinkButton)`
  color: #fff;
  background: ${colors.mainColor};
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
            <MenuButton>About Me</MenuButton>
          </Link>
        </Item>
      </LinkContainer>
    </HeaderMenuStyled>
  );
};

export default HeaderMenu;
