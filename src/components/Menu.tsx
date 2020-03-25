import React from "react";
import colors from "../shared/colors";
import styled from "styled-components";
import { prependListener } from "cluster";

const NavMenu = styled.nav`
  position: relative;
`;

const LinkContainer = styled.ul`
  margin: 0;
  padding: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const Link = styled.li`
  text-align: center;
  list-style: none;
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
  padding: 6% 0;
  border-bottom: ${(props: ButtonProps) =>
    props.border ? "solid 1px" : "none"};
  border-top: ${(props: ButtonProps) => (props.border ? "solid 1px" : "none")};
`;

const Menu = () => {
  return (
    <NavMenu>
      <LinkContainer>
        <Link>
          <Button>My other projects</Button>
        </Link>
        <Link>
          <Button border>About me</Button>
        </Link>
        <Link>
          <Button>Contact</Button>
        </Link>
      </LinkContainer>
    </NavMenu>
  );
};

export default Menu;
