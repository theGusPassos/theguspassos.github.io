import React from "react";
import { colors } from "../../shared/colors";
import styled from "styled-components";
import { device, isInDesktop } from "../../shared/device";
import HeaderContacts from "./HeaderContacts";

const Background = styled.header`
  width: 100%;
  background-color: ${colors.mainColor};
  color: ${colors.mainTextColor};
  z-index: 10;

  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 100%;
    float: left;
  }
`;

const NameContainer = styled.div`
  padding: 20px;

  @media ${device.tablet} {
    padding: 30px;
  }
`;

const DevName = styled.div`
  font-size: 1em;

  @media ${device.tablet} {
    font-size: 1.4em;
  }

  @media ${device.desktop} {
    font-size: 2.5em;
  }
`;

const JobTitle = styled.div`
  font-size: 1.5em;

  @media ${device.tablet} {
    font-size: 1.9em;
  }

  @media ${device.desktop} {
    font-size: 3em;
  }
`;

const Header = () => {
  return (
    <Background>
      <NameContainer>
        <DevName>Gustavo Passos</DevName>
        <JobTitle>Game & Software Developer</JobTitle>
      </NameContainer>

      {isInDesktop() ? <HeaderContacts></HeaderContacts> : null}
    </Background>
  );
};

export default Header;
