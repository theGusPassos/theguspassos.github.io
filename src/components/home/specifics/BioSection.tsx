import React from "react";
import styled, { css } from "styled-components";
import { sectionWithText } from "../../common-styles/sectionWithText";
import { device } from "../../../data/device";

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
  margin: 10% auto;

  ${sectionWithText};
  ${fadeAnimation};

  p:first-child {
    margin-top: 0;
  }

  @media ${device.tablet} {
    font-size: 1em;
    padding: 0 50px;
  }
`;

const BioSection = () => {
  function getYearsFromDate(birthDayDate: string) {
    var today = new Date();
    var birthDate = new Date(birthDayDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
    }

    return age;
  }

  return (
    <BioSectionStyled>
      <p>
        I'm a {getYearsFromDate("6/12/1997")} years old developer who's been
        delivering software professionally for{" "}
        <b>{getYearsFromDate("01/09/2016")} years</b>. Interested in developing
        any kind of <b>software or game</b>, regardless of the tech stack.
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
