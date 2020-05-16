import React from "react";
import styled from "styled-components";
import HomeNavButton from "./common/HomeNavButton";
import { defaultPadding } from "../common-styles/styles";
import Bio from "./common/bioStyle";

const FrontPageStyled = styled.section`
  display: grid;
  grid-template-rows: 20% 70% 10%;
  height: 100%;
`;

const Info = styled.div`
  ${defaultPadding};

  h1 {
    font-size: 2em;
    margin: 0;
  }

  span {
    font-size: 1.6em;
  }
`;

const FrontPage = () => {
  return (
    <FrontPageStyled>
      <Info>
        <h1>Gustavo Passos</h1>
        <span>Software and Game Developer</span>
      </Info>
      <Bio>
        <p>
          I’m interested in developing any kind of software regardless of the
          tech stack.
        </p>
        <p>
          The software quality and user experience are the most important things
          for me. I look forward to working with people that value the same =)
        </p>
      </Bio>
      <HomeNavButton link="/about">more about me</HomeNavButton>
    </FrontPageStyled>
  );
};

export default FrontPage;
