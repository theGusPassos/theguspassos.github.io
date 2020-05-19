import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ContactCard from "./ContactCard";
import ButtonStyle from "../common-styles/ButtonStyle";
import { contacts } from "../../data/contacts";
import { colors } from "../../data/colors";
import Contact from "../../models/contact";
import { modalAnimation } from "./modalAnimation";
import { buttonStyle } from "../common-styles/buttonStyles";

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

  ${modalAnimation};
`;

const ModalWrapper = styled.div`
  background-color: #fff;
  z-index: 999999;
  width: 100%;
  max-width: 400px;
`;

const ContactsContainer = styled.div`
  padding: 20px;

  > div:nth-child(2) {
    border-top: 1px solid ${colors.mainColor};
    border-bottom: 1px solid ${colors.mainColor};
  }
`;

const LinkButtonStyled = styled.button`
  color: ${colors.mainColor};
  font-size: 1.4em;
  width: 100%;
  box-shadow: 0px 3px 11px 0px #0000009c;
  padding: 10px 20px;
  background-color: ${colors.mainBackgroundColor};

  ${buttonStyle};
`;

interface ContactsModalProps {
  onClose(): void;
}

const ContactsModal = (props: ContactsModalProps) => {
  const getContacts = () => {
    return contacts.map((contact: Contact, key: number) => {
      return <ContactCard key={key} contact={contact}></ContactCard>;
    });
  };

  const modalMarkup = (
    <ModalBackground>
      <ModalWrapper>
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
