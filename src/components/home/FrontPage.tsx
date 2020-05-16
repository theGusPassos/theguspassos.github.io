import React from "react";
import styled from "styled-components";
import HomeNavButton from "./HomeNavButton";
import { sectionWithText, defaultPadding } from "../common-styles/styles";
import { colors } from "../../data/colors";

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

const Bio = styled.div`
  font-size: 1.2em;
  margin: auto;

  ${defaultPadding};
  ${sectionWithText};
`;

const HomeNavButtonWrapper = styled.div`
  display: flex;

  a {
    color: ${colors.mainTextColor};
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
      <HomeNavButtonWrapper>
        <HomeNavButton link="/">more about me</HomeNavButton>
      </HomeNavButtonWrapper>
    </FrontPageStyled>
  );
};

export default FrontPage;
