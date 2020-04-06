import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { GetAnimationStyle, AnimationDirection } from "../../shared/animations";

const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.84);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalAnimated = GetAnimationStyle(
  ModalBackground,
  AnimationDirection.FromDown
);

const ModalWrapper = styled.div`
  width: 50vw;

  background: blue;
  max-height: 80vh;
  z-index: 999999;
  overflow: scroll;
`;

const ContactsModal = () => {
  const modalMarkup = (
    <ModalAnimated>
      <ModalWrapper>test</ModalWrapper>
    </ModalAnimated>
  );

  return ReactDOM.createPortal(modalMarkup, document.body);
};

export default ContactsModal;
