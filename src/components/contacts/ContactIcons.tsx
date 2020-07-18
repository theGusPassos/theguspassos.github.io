import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { contacts } from "../../data/contacts";
import Contact from "../../models/contact";
import { onCardClick, onCardKeyDown } from "./contactCardClick";
import { MainToolTip } from "../common-components/ToolTip";
import { CSSTransition } from "react-transition-group";
import {
  buttonNoDefaultStyle,
  buttonForImage,
} from "../common-styles/buttonStyles";
import { colors } from "../../data/colors";

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

const ContactIcon = styled.button`
  ${buttonForImage};
`;

const ContactIconImage = styled.img`
  opacity: 0.5;
  height: 25px;

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
          key={key}
          onClick={() => onCardClick(contact)}
          onKeyDown={(e) => onCardKeyDown(e, contact)}
        >
          <ContactIconImage
            src={contact.image}
            data-tip={contact.message}
          ></ContactIconImage>
        </ContactIcon>
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
