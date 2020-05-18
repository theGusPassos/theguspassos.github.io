import React from "react";
import LinkButton from "../common-styles/linkButton";
import { CSSTransition } from "react-transition-group";
import { animationSpeed } from "../../animations/animations";
import ContactsModal from "./ContactsModal";
import styled from "styled-components";
import { colors } from "../../data/colors";

const Wrapper = styled.div`
  display: flex;
`;

const ContactsButtonStyled = styled.button`
  text-align: center;
  margin: auto;
  border: none;
  font-size: 1.5em;
  color: ${colors.mainTextColor};
  background-color: ${colors.mainColor};
  cursor: pointer;

  :hover,
  :active {
    text-decoration: underline;
  }
`;

const ContactsButton = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <Wrapper>
      <ContactsButtonStyled onClick={() => setIsOpen(true)}>
        My Contacts
      </ContactsButtonStyled>
      <CSSTransition
        in={modalIsOpen}
        classNames="animation"
        unmountOnExit
        timeout={animationSpeed}
      >
        <ContactsModal onClose={() => setIsOpen(false)}></ContactsModal>
      </CSSTransition>
    </Wrapper>
  );
};

export default ContactsButton;
