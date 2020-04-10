import React from "react";
import styled from "styled-components";
import { device } from "../../shared/device";
import LinkButton from "../common/LinkButton";
import { colors } from "../../shared/colors";
import ContactsButton from "../contacts/ContactsButton";
import { Link } from "react-router-dom";

const Navigation = styled.nav`
  flex: 1;
  display: flex;
`;

const LinkContainer = styled.ul`
  margin: 0 auto;
  padding: 0;
  width: 100%;
  font-size: 1.1em;

  @media ${device.tablet} {
    font-size: 0.9em;
  }
`;

const Item = styled.li`
  text-align: center;
  list-style: none;
`;

const LinkButtonStyled = styled(LinkButton)`
  width: 70%;
  border-top: 1px solid ${colors.mainColor};
`;

const NavigationButtons = () => {
  return (
    <Navigation>
      <LinkContainer>
        <Item>
          <ContactsButton></ContactsButton>
        </Item>
        <Item>
          <Link to="/">
            <LinkButtonStyled>Return</LinkButtonStyled>
          </Link>
        </Item>
      </LinkContainer>
    </Navigation>
  );
};

export default NavigationButtons;
