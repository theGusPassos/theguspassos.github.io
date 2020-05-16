import React from "react";
import styled from "styled-components";
import HomeNavButton from "./HomeNavButton";
import { sectionWithText, defaultPadding } from "../common-styles/styles";
import { colors } from "../../data/colors";

const FrontPageStyled = styled.section`
  display: grid;
  grid-template-rows: 30% 60% 10%;
  height: 100%;
`;

const PersonalInfo = styled.div`
  ${defaultPadding};

  h1 {
    font-size: 1.8em;
    margin: 0;
  }

  span {
    font-size: 1.4em;
  }
`;

const PersonalBio = styled.div`
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
      <PersonalInfo>
        <h1>Gustavo Passos</h1>
        <span>Software and Game Developer</span>
      </PersonalInfo>
      <PersonalBio>
        <p>
          I’m interested in developing any kind of software regardless of the
          tech stack.
        </p>
        <p>
          The software quality and user experience are the most important things
          for me. I look forward to working with people that value the same =)
        </p>
      </PersonalBio>
      <HomeNavButtonWrapper>
        <HomeNavButton>more about me</HomeNavButton>
      </HomeNavButtonWrapper>
    </FrontPageStyled>
  );
};

export default FrontPage;
