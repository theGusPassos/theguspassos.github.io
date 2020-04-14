import React from "react";
import styled from "styled-components";
import { contacts } from "../../data/contacts";
import Contact from "../../models/contact";

const ContactContainer = styled.div`
  display: flex;
  flex: 1;
`;

const ContactIcon = styled.img`
  opacity: 0.3;
  width: 15%;
  margin: auto;
`;

const getContacts = () => {
  return contacts.map((contact: Contact, key: number) => {
    return <ContactIcon src={contact.image} key={key}></ContactIcon>;
  });
};

const HeaderContacts = () => {
  return <ContactContainer>{getContacts()}</ContactContainer>;
};

export default HeaderContacts;
