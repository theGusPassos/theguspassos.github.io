import React from "react";
import styled from "styled-components";
import { device } from "../../shared/device";
import { Link } from "react-router-dom";
import LinkButton from "../common-styles/LinkButton";
import ContactsButton from "../contacts/ContactsButton";

const NavMenu = styled.nav`
  flex: 1;
  display: flex;
`;

const LinkContainer = styled.ul`
  margin: auto;
  padding: 0;
  width: 100%;

  @media ${device.tablet} {
    display: inline-flex;
  }
`;

const Item = styled.li`
  text-align: center;
  list-style: none;

  @media ${device.tablet} {
    margin: auto;
    width: 30%;
  }
`;

interface ButtonProps {
  border?: boolean;
}

const MenuButton = styled(LinkButton)`
  width: 70%;
  border-bottom: ${(props: ButtonProps) =>
    props.border ? "solid 1px" : "none"};
  border-top: ${(props: ButtonProps) => (props.border ? "solid 1px" : "none")};

  @media ${device.tablet} {
    width: 100%;
    border-bottom: none;
    border-top: none;
    border-left: ${(props: ButtonProps) =>
      props.border ? "solid 1px" : "none"};
    border-right: ${(props: ButtonProps) =>
      props.border ? "solid 1px" : "none"};
  }
`;

const Menu = () => {
  return (
    <NavMenu>
      <LinkContainer>
        <Item>
          <Link to="/projects">
            <MenuButton>My other projects</MenuButton>
          </Link>
        </Item>
        <Item>
          <Link to="/about">
            <MenuButton border>About me</MenuButton>
          </Link>
        </Item>
        <Item>
          <ContactsButton></ContactsButton>
        </Item>
      </LinkContainer>
    </NavMenu>
  );
};

export default Menu;
