import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { sectionWithText } from "../../common-styles/sectionWithText";
import { modalAnimation } from "../../contacts/modalAnimation";
import { animationSpeed } from "../../../animations/animations";
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

const BioSectionStyled = styled.section`
  color: #fff;
  font-size: 0.9em;
  margin: auto;

  ${sectionWithText};
  ${fadeAnimation};
`;

const BioSection = () => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  });

  return (
    <CSSTransition
      unmountOnExit
      in={inProp}
      classNames="animation"
      timeout={fadeTime}
    >
      <BioSectionStyled>
        <p>
          I'm a 23 years old developer who's been delivering software
          professionally for <b>6 years</b>. Interested in developing any kind
          of <b>software or game</b>, regardless of the tech stack.
        </p>

        <p>
          The <b>software quality</b> and <b>user experience</b> are the most
          important things to me. I look forward to working with people that
          value the same.
        </p>

        <p>If you need help in a project of yours feel free to contact me =)</p>
      </BioSectionStyled>
    </CSSTransition>
  );
};

export default BioSection;
