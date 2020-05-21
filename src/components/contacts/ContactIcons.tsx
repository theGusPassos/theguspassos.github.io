import React from "react";
import styled from "styled-components";
import { contacts } from "../../data/contacts";
import Contact from "../../models/contact";
import { onCardClick, onCardKeyDown } from "./contactCardClick";
import { MainToolTip } from "../common-components/ToolTip";

const ImageWrapper = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex: 1;
`;

const ContactIcon = styled.img`
  opacity: 0.3;
  width: 10%;
  margin: auto;

  :hover,
  :focus {
    cursor: pointer;
    opacity: 1;
  }
`;

const ContactIcons = () => {
  const getContacts = () => {
    return contacts.map((contact: Contact, key: number) => {
      return (
        <ContactIcon
          onClick={() => onCardClick(contact)}
          onKeyDown={(e) => onCardKeyDown(e, contact)}
          src={contact.image}
          key={key}
          data-tip={contact.message}
        ></ContactIcon>
      );
    });
  };

  return (
    <ImageWrapper>
      {getContacts()}
      <MainToolTip></MainToolTip>
    </ImageWrapper>
  );
};

export default ContactIcons;
