import React from "react";
import styled from "styled-components";
import { contacts } from "../../data/contacts";
import { copyToClipboard } from "../../common-functions/copyToClipboard";
import { toast } from "react-toastify";
import { goToExternalPage } from "../../common-functions/goToExternalPage";
import { MainToolTip } from "../common-components/ToolTip";

interface Contact {
  image: string;
  altImage: string;
  message: string;
  contactText: string;
  url?: string;
}

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
`;

const ContactIconImage = styled.img`
  height: 40px;
  color: white;

  :hover,
  :focus {
    cursor: pointer;
    opacity: 1;
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
    return contacts.map((contact: Contact, key: number) => {
      return (
          <ContactIconImage
          key={key}
            src={contact.image}
            data-tip={contact.message}
          ></ContactIconImage>
      );
    });
  };

    return (
        <SocialsContainer>
            {getContacts()}
        </SocialsContainer>
    );
}

export default Socials;