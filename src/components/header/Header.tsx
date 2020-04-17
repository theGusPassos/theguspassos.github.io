import React, { Fragment } from "react";
import { colors } from "../../data/colors";
import styled from "styled-components";
import { device } from "../../shared/device";
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
    box-shadow: 6px 0px 13px #0000004f;
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
  outline-color: #fff;

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

interface HeaderProps extends DeviceInfo {}

const Header = (props: HeaderProps) => {
  const goToHome = () => {
    const history = createHashHistory();
    history.push("/");
  };

  const goToHomeOnEnter = (e: any) => {
    if (e.keyCode === 13 || e.charCode === 13) goToHome();
  };

  return (
    <Background>
      <InfoContainer>
        <NameContainer
          onClick={goToHome}
          onKeyPress={goToHomeOnEnter}
          tabIndex={1}
        >
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
