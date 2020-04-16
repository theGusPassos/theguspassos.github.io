import React from "react";
import styled from "styled-components";
import { contacts } from "../../data/contacts";
import Contact from "../../models/contact";

const ContactContainer = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex: 1;
`;

const ContactIcon = styled.img`
  opacity: 0.3;
  width: 20%;
  margin: auto;

  :hover,
  :focus {
    cursor: pointer;
    opacity: 1;
  }
`;

const headerItemsBeforeContact = 3;

const getContacts = () => {
  return contacts.map((contact: Contact, key: number) => {
    return (
      <ContactIcon
        src={contact.image}
        key={key}
        tabIndex={key + headerItemsBeforeContact + 1}
      ></ContactIcon>
    );
  });
};

const HeaderContacts = () => {
  return <ContactContainer>{getContacts()}</ContactContainer>;
};

export default HeaderContacts;
