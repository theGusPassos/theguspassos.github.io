import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { contacts } from "../../data/contacts";
import Contact from "../../models/contact";
import { onCardClick, onCardKeyDown } from "./contactCardClick";
import { MainToolTip } from "../common-components/ToolTip";
import { CSSTransition } from "react-transition-group";

const fadeTime = 2000;
const fadeAnimation = css`
  &.animation-enter {
    opacity: 0;
  }

  &.animation-enter-active {
    opacity: 1;
    transition: opacity ${fadeTime}ms;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex: 1;

  ${fadeAnimation};
`;

const ContactIcon = styled.img`
  opacity: 0.5;
  width: 8%;
  margin: auto;

  :hover,
  :focus {
    cursor: pointer;
    opacity: 1;
  }
`;

const ContactIcons = () => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  });

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
    <CSSTransition
      unmountOnExit
      in={inProp}
      classNames="animation"
      timeout={fadeTime}
    >
      <ImageWrapper>
        {getContacts()}
        <MainToolTip></MainToolTip>
      </ImageWrapper>
    </CSSTransition>
  );
};

export default ContactIcons;
