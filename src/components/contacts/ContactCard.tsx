import React from "react";
import styled from "styled-components";

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
  image: string;
  message: string;
  contact: string;
}

const ContactCard = (props: ContactCardProps) => {
  return (
    <ContactCardStyled>
      <ContactImage src={props.image}></ContactImage>
      <ContactInfo>
        <strong>{props.message}</strong>
        <span>{props.contact}</span>
      </ContactInfo>
    </ContactCardStyled>
  );
};

export default ContactCard;
