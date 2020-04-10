import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { animationSpeed } from "../../shared/animations";
import ContactCard from "./ContactCard";
import LinkButton from "../common/LinkButton";
import { contacts } from "../../data/contacts";
import PageTitle from "../common/PageTitle";
import { colors } from "../../shared/colors";
import Contact from "../../models/contact";

const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;

  &.animation-enter {
    opacity: 0;

    > div:first-child {
      transform: translate(0, 100%);
    }
  }

  &.animation-enter-active {
    opacity: 1;
    transition: opacity ${animationSpeed}ms;

    > div:first-child {
      transform: translate(0, 0);
      transition-timing-function: ease-in-out;
      transition: transform ${animationSpeed}ms;
    }
  }

  &.animation-exit {
    opacity: 1;

    > div:first-child {
      transform: translate(0, 0);
    }
  }

  &.animation-exit-active {
    opacity: 0;
    transition: opacity ${animationSpeed}ms;

    > div:first-child {
      transform: translate(0, 100%);
      transition-timing-function: ease-in-out;
      transition: transform ${animationSpeed}ms;
    }
  }
`;

const ModalWrapper = styled.div`
  background-color: #fff;
  z-index: 999999;
  width: 100%;
  max-width: 500px;
`;

const ContactsContainer = styled.div`
  padding: 20px;

  > div:nth-child(2) {
    border-top: 1px solid ${colors.mainColor};
    border-bottom: 1px solid ${colors.mainColor};
  }
`;

const getContacts = () => {
  return contacts.map((contact: Contact, key: number) => {
    return (
      <ContactCard
        key={key}
        contact={contact.contactText}
        image={contact.image}
        message={contact.message}
      ></ContactCard>
    );
  });
};

const LinkButtonStyled = styled(LinkButton)`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 3px 11px 0px #0000009c;
  padding: 10px 20px;
`;

interface ContactsModalProps {
  onClose(): void;
}

const ContactsModal = (props: ContactsModalProps) => {
  const modalMarkup = (
    <ModalBackground>
      <ModalWrapper>
        <PageTitle centered>My Contacts</PageTitle>
        <ContactsContainer>{getContacts()}</ContactsContainer>
        <LinkButtonStyled onClick={() => props.onClose()}>
          Close
        </LinkButtonStyled>
      </ModalWrapper>
    </ModalBackground>
  );

  return ReactDOM.createPortal(modalMarkup, document.body);
};

export default ContactsModal;
