import React from "react";
import styled, { css } from "styled-components";
import { sectionWithText } from "../../common-styles/sectionWithText";

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
  return (
    <BioSectionStyled>
      <p>
        I'm a 23 years old developer who's been delivering software
        professionally for <b>6 years</b>. Interested in developing any kind of{" "}
        <b>software or game</b>, regardless of the tech stack.
      </p>

      <p>
        The <b>software quality</b> and <b>user experience</b> are the most
        important things to me. I look forward to working with people that value
        the same.
      </p>

      <p>If you need help in a project of yours feel free to contact me =)</p>
    </BioSectionStyled>
  );
};

export default BioSection;
