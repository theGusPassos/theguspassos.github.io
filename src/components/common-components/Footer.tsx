import React from "react";
import styled from "styled-components";
import { contacts } from "../../data/contacts";
import { goToExternalPage } from "../../common-functions/goToExternalPage";
import { copyToClipboard } from "../../common-functions/copyToClipboard";
import { toast } from "react-toastify";
import Contact from "../../models/contact";

const Container = styled.footer`
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    margin: 100px 0 120px 0;
`

const BackToTopButton = styled.button`
  font-size: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  cursor: pointer;
  border: none;
  background: none;
  color: inherit;
	 adding: 0;
	 utline: inherit;

  label {
      color: white;
      cursor: pointer;
      padding: 5px;
      font-weight: 500;
  }

  :focus-visible {
    outline: 2px solid white;
    outline-offset: 1px;
    border-radius: 4px;
  }
`

const SocialsContainer = styled.section`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
`

const ContactIcon = styled.button`
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  cursor: pointer;
  border: none;
  background: none;
	padding: 0;
	outline: inherit;
  height: 24px;

  :focus-visible {
    outline: 2px solid #973BFF;
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

const ContactIconImage = styled.img`
  color: #973BFF;

  :hover,
  :focus {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const Credits = styled.label`
    color: #88888C;
`

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  const goToTopOnKeyDown = (e: any) => {
    if (e.keyCode === 13 || e.charCode === 13) {
      goToTop();
    }
  }

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
        <ContactIcon
          key={key}
          onClick={() => onCardClick(contact)}
          onKeyDown={(e) => onCardKeyDown(e, contact)}
        >
          <ContactIconImage
          key={key}
            src={contact.imagePurple}
            data-tip={contact.message}
          ></ContactIconImage>
        </ContactIcon>
      );
    });
  };

  return (
    <Container>
        <BackToTopButton 
          onClick={() => goToTop()} 
          onKeyDown={(e) => goToTopOnKeyDown(e)}>
          <img src="icons/arrow-up.svg"></img>
          <label>Back to top</label>
        </BackToTopButton>
        <SocialsContainer>
            {getContacts()}
        </SocialsContainer>
        <Credits>UX/UI by @natzs</Credits>
    </Container>
  );
};

export default Footer;

