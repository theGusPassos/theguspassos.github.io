import React from "react";
import { colors } from "../shared/colors";
import styled from "styled-components";
import { device } from "../shared/device";
import { Link } from "react-router-dom";

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

const Button = styled.button`
  width: 70%;
  color: ${colors.mainColor};
  background: ${colors.secondBackgroundColor};
  font-size: 1.2em;
  border: none;
  padding: 4% 0;
  border-bottom: ${(props: ButtonProps) =>
    props.border ? "solid 1px" : "none"};
  border-top: ${(props: ButtonProps) => (props.border ? "solid 1px" : "none")};

  :focus,
  :hover {
    cursor: pointer;
    outline: none;
    text-decoration: underline;
  }

  @media ${device.tablet} {
    width: 100%;
    font-size: 1.8em;
    padding: 15% 0;
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
          <Button>My other projects</Button>
        </Item>
        <Item>
          <Link to="/about">
            <Button border>About me</Button>
          </Link>
        </Item>
        <Item>
          <Button>Contact me</Button>
        </Item>
      </LinkContainer>
    </NavMenu>
  );
};

export default Menu;
