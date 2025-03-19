import React from "react";
import styled from "styled-components";
import { contacts } from "../../data/contacts";
import { copyToClipboard } from "../../common-functions/copyToClipboard";
import { toast } from "react-toastify";
import { goToExternalPage } from "../../common-functions/goToExternalPage";

interface Contact {
  image: string;
  altImage: string;
  message: string;
  contactText: string;
  url?: string;
}

const Container = styled.section`
  background-color: #202023;
`

const SocialsContainer = styled.section`
    height: 225px;
    background-color: #973BFF;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
`

const ContactIcon = styled.button`
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  cursor: pointer;
  border: none;
  background: none;
	color: inherit;
	padding: 0;
	outline: inherit;
  height: 40px;

  :focus-visible {
    outline: 2px solid white;
    outline-offset: 1px;
    border-radius: 4px;
  }
`;

const ContactIconImage = styled.img`
  color: white;

  :hover,
  :focus {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const Socials = () => {
  const onCardClick = (contact: Contact) => {
    if (contact.url) {
      goToExternalPage(contact.url);
    } else {
      copyToClipboard(contact.contactText);
      toast.info(`my e-mail has been copied to your clipboard =)`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
    }
};

const onCardKeyDown = (e: any, contact: Contact) => {
  if (e.keyCode === 13 || e.charCode === 13) onCardClick(contact);
};

  const getContacts = () => {
    return contacts.map((contact: Contact, i: number) => {
      return (
        <ContactIcon
          key={i}
          onClick={() => onCardClick(contact)}
          onKeyDown={(e) => onCardKeyDown(e, contact)}
        >
          <ContactIconImage
          key={i}
            src={contact.image}
            data-tip={contact.message}
          ></ContactIconImage>
        </ContactIcon>
      );
    });
  };

    return (
      <Container>
        <SocialsContainer>
            {getContacts()}
        </SocialsContainer>
      </Container>
    );
}

export default Socials;