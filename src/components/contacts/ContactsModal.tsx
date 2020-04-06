import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {
  GetAnimationStyle,
  AnimationDirection,
  animationSpeed,
} from "../../shared/animations";
import { colors } from "../../shared/colors";
import basicImage from "../../images/me/EubyKuma.png";
import ContactCard from "./ContactCard";
import LinkButton from "../common/LinkButton";

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
  z-index: 999999;
  width: 100%;
`;

const Header = styled.div`
  background-color: ${colors.mainColor};
  color: ${colors.mainTextColor};
  text-align: center;
  font-size: 1.3em;
  padding: 10px;
`;

const ContactsContainer = styled.div`
  background-color: #fff;
`;

const mockedContacts = [
  { image: basicImage, message: "mail me", contact: "theguspassos@gmail.com" },
];

const getContacts = () => {
  return mockedContacts.map((contact) => {
    return (
      <ContactCard
        contact={contact.contact}
        image={contact.image}
        message={contact.message}
      ></ContactCard>
    );
  });
};

const LinkButtonStyled = styled(LinkButton)`
  width: 100%;
  background-color: #fff;
`;

interface ContactsModalProps {
  onClose(): void;
}

const ContactsModal = (props: ContactsModalProps) => {
  const modalMarkup = (
    <ModalBackground>
      <ModalWrapper>
        <Header>My Contacts</Header>
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
