import React from "react";
import { CSSTransition } from "react-transition-group";
import { animationSpeed } from "../../animations/animations";
import ContactsModal from "./ContactsModal";
import styled from "styled-components";
import { colors } from "../../data/colors";
import { buttonStyle } from "../common-styles/buttonStyles";

const Wrapper = styled.div`
  display: flex;
`;

const ContactsButtonStyled = styled.button`
  font-size: 1.5em;
  color: ${colors.mainTextColor};
  background-color: ${colors.mainColor};

  ${buttonStyle};
`;

const ContactsButton = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <Wrapper>
      <ContactsButtonStyled onClick={() => setIsOpen(true)}>
        my contacts
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
