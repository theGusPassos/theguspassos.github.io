import React, { Fragment } from "react";
import { colors } from "../../shared/colors";
import styled, { css } from "styled-components";
import { device, isInDesktop } from "../../shared/device";
import HeaderContacts from "./HeaderContacts";
import HeaderMenu from "./HeaderMenu";
import { createHashHistory } from "history";
import DeviceInfo from "../../shared/deviceInfo";

const Background = styled.header`
  width: 100%;
  background-color: ${colors.mainColor};
  color: ${colors.mainTextColor};
  z-index: 10;

  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    float: left;
    box-shadow: 0px 3px 11px 0px #0000009c;
  }
`;

const InfoContainer = styled.div`
  padding: 20px;

  @media ${device.tablet} {
    padding: 30px;
  }

  @media ${device.desktop} {
    height: 45%;
    display: flex;
  }
`;

const NameContainer = styled.div`
  margin: auto;

  :hover {
    cursor: pointer;
  }
`;

const DevName = styled.div`
  font-size: 1em;

  @media ${device.tablet} {
    font-size: 1.2em;
  }
`;

const JobTitle = styled.div`
  font-size: 1.5em;

  @media ${device.tablet} {
    font-size: 1.7em;
  }
`;

const goToHome = () => {
  const history = createHashHistory();
  history.push("/");
};

interface HeaderProps extends DeviceInfo {}

const Header = (props: HeaderProps) => {
  return (
    <Background>
      <InfoContainer>
        <NameContainer onClick={() => goToHome()}>
          <DevName>Gustavo Passos</DevName>
          <JobTitle>Game & Software Developer</JobTitle>
        </NameContainer>
      </InfoContainer>
      {props.isDesktop ? (
        <Fragment>
          <HeaderMenu></HeaderMenu>
          <HeaderContacts></HeaderContacts>
        </Fragment>
      ) : null}
    </Background>
  );
};

export default Header;
