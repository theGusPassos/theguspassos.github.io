import React from "react";
import styled from "styled-components";

const BioSectionStyled = styled.section`
  color: #fff;
  margin: 10% auto;

  p:first-child {
    margin-top: 0;
  }
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Greetings = styled.label`
  font-size: 80px;
  font-weight: 400;
  line-height: 100px;
`

const Name = styled.label`
  font-size: 80px;
  font-weight: 600;
  line-height: 100px;
  color: #973BFF;
`

const Bio = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`

const BioSection = () => {
  function getYearsFromDate(birthDayDate: string) {
    const today = new Date();
    const birthDate = new Date(birthDayDate);
    const m = today.getMonth() - birthDate.getMonth();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
    }

    return age;
  }

  return (
    <BioSectionStyled>
      <NameContainer>
        <Greetings>Hey, I'm</Greetings>
        <Name>Gustavo</Name>
      </NameContainer>

      <Bio>
        I'm a {getYearsFromDate("6/12/1997")} years old developer who's been
        delivering software professionally for{" "}
        <b>{getYearsFromDate("01/09/2016")} years</b>. Interested in developing
        any kind of <b>software or game</b>, regardless of the tech stack.
      </Bio>

      <Bio>
        The <b>software quality</b> and <b>user experience</b> are the most
        important things to me. I look forward to working with people that value
        the same.
      </Bio>

      <Bio>
        <b>If you need help in a project of yours<br/>
        feel free to contact me =)</b>
      </Bio>
    </BioSectionStyled>
  );
};

export default BioSection;
