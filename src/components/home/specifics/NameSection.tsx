import React from "react";
import styled, { css } from "styled-components";

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

const NameSectionStyled = styled.section`
  color: #fff;
  text-align: center;
  letter-spacing: 4px;

  ${fadeAnimation};
`;

const Name = styled.div`
  font-size: 1.8em;
`;

const Job = styled.div`
  font-size: 0.9em;
`;

const NameSection = () => {
  return (
    <NameSectionStyled>
      <Name>Gustavo Passos</Name>
      <Job>game and software developer</Job>
    </NameSectionStyled>
  );
};

export default NameSection;
