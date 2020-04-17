import React from "react";
import LinkButton from "../common-components/LinkButton";
import { CSSTransition } from "react-transition-group";
import { animationSpeed } from "../../shared/animations";
import ContactsModal from "./ContactsModal";

const ContactsButton = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <LinkButton onClick={() => setIsOpen(true)}>My Contacts</LinkButton>
      <CSSTransition
        in={modalIsOpen}
        classNames="animation"
        unmountOnExit
        timeout={animationSpeed}
      >
        <ContactsModal onClose={() => setIsOpen(false)}></ContactsModal>
      </CSSTransition>
    </div>
  );
};

export default ContactsButton;
