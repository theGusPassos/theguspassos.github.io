import React from "react";
import styled from "styled-components";

const ContactCardStyled = styled.div`
  padding: 10%;
  display: flex;
`;

const ContactImage = styled.img`
  width: 60px;
  height: 60px;
`;

const ContactInfo = styled.div`
  align-self: flex-end;
  span {
    display: block;
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
        <span>{props.message}</span>
        <span>{props.contact}</span>
      </ContactInfo>
    </ContactCardStyled>
  );
};

export default ContactCard;
