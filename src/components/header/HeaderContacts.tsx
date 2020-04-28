import React from "react";
import styled from "styled-components";
import { contacts } from "../../data/contacts";
import Contact from "../../models/contact";
import { onCardClick, onCardKeyDown } from "../contacts/contactCardClick";
import { WhiteToolTip } from "../common-components/ToolTip";

const ContactContainer = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex: 1;
`;

const ContactIcon = styled.img`
  opacity: 0.3;
  width: 20%;
  height: 15%;
  margin: auto;

  :hover,
  :focus {
    cursor: pointer;
    opacity: 1;
  }
`;

const HeaderContacts = () => {
  const headerItemsBeforeContact = 3;

  const getContacts = () => {
    return contacts.map((contact: Contact, key: number) => {
      return (
        <ContactIcon
          onClick={() => onCardClick(contact)}
          onKeyDown={(e) => onCardKeyDown(e, contact)}
          src={contact.image}
          key={key}
          tabIndex={key + headerItemsBeforeContact + 1}
          data-tip={contact.message}
        ></ContactIcon>
      );
    });
  };

  return (
    <ContactContainer>
      {getContacts()}
      <WhiteToolTip />
    </ContactContainer>
  );
};

export default HeaderContacts;
