import React from "react";
import styled from "styled-components";
import HomeNavButton from "./common/HomeNavButton";
import Bio from "./common/bioStyle";

const AboutPageStyled = styled.section`
  display: grid;
  height: 100%;
  grid-template-rows: 90% 10%;
`;

const AboutPage = () => {
  return (
    <AboutPageStyled>
      <Bio>
        <p>
          I’m a 22 years old developer who’s been programming professionally for
          5 years in brazillian companies.
        </p>
        <p>
          I'm interested in developing any kind of software or game, regardless
          of the tech stack. The software quality and the user experience are
          the most important things to me.
        </p>
        <p>If you need help in a project of yours feel free to contact me =)</p>
      </Bio>
      <HomeNavButton link="/">my contacts</HomeNavButton>
    </AboutPageStyled>
  );
};

export default AboutPage;