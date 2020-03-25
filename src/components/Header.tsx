import React from "react";
import { colors } from "../shared/colors";
import styled from "styled-components";

const Background = styled.header`
  width: 100%;
  background-color: ${colors.mainColor};
  color: ${colors.mainTextColor};
`;

const NameContainer = styled.div`
  padding: 20px;
`;

const DevName = styled.div`
  font-size: 1em;
`;

const JobTitle = styled.div`
  font-size: 1.5em;
`;

function Header() {
  return (
    <Background>
      <NameContainer>
        <DevName>Gustavo Passos</DevName>
        <JobTitle>Game & Software Developer</JobTitle>
      </NameContainer>
    </Background>
  );
}

export default Header;
