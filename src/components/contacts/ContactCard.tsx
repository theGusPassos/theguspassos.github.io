import React from "react";
import styled from "styled-components";
import Contact from "../../models/contact";
import { onCardClick } from "./contactCardClick";

const ContactCardStyled = styled.div`
  padding: 5% 10%;
  display: flex;
  font-size: 0.9em;
`;

const ContactImage = styled.img`
  width: 20%;
  height: 20%;
`;

const ContactInfo = styled.div`
  align-self: flex-end;

  span,
  strong {
    display: block;
    margin-left: 10px;
  }
`;

interface ContactCardProps {
  contact: Contact;
}

const ContactCard = (props: ContactCardProps) => {
  return (
    <ContactCardStyled onClick={() => onCardClick(props.contact)}>
      <ContactImage
        src={props.contact.image}
        alt={props.contact.altImage}
      ></ContactImage>
      <ContactInfo>
        <strong>{props.contact.message}</strong>
        <span>{props.contact.contactText}</span>
      </ContactInfo>
    </ContactCardStyled>
  );
};

export default ContactCard;
