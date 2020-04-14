import React, { Fragment } from "react";
import { colors } from "../../shared/colors";
import styled, { css } from "styled-components";
import { device, isInDesktop } from "../../shared/device";
import HeaderContacts from "./HeaderContacts";
import { withResizeDetector } from "react-resize-detector";
import ResizeListenerProps from "../../shared/ResizeListenerProps";
import HeaderMenu from "./HeaderMenu";
import { createHashHistory } from "history";

const Background = styled.header`
  width: 100%;
  background-color: ${colors.mainColor};
  color: ${colors.mainTextColor};
  z-index: 10;

  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 100%;
    float: left;
  }
`;

const InfoContainer = styled.div`
  padding: 20px;

  @media ${device.tablet} {
    padding: 30px;
  }

  @media ${device.desktop} {
    height: 50%;
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
    font-size: 1.4em;
  }
`;

const JobTitle = styled.div`
  font-size: 1.5em;

  @media ${device.tablet} {
    font-size: 1.9em;
  }
`;

const goToHome = () => {
  const history = createHashHistory();
  history.push("/");
};

interface HeaderProps extends ResizeListenerProps {}

const Header = (props: HeaderProps) => {
  return (
    <Background>
      <InfoContainer>
        <NameContainer onClick={() => goToHome()}>
          <DevName>Gustavo Passos</DevName>
          <JobTitle>Game & Software Developer</JobTitle>
        </NameContainer>
      </InfoContainer>
      {isInDesktop(props.width) ? (
        <Fragment>
          <HeaderMenu></HeaderMenu>
          <HeaderContacts></HeaderContacts>
        </Fragment>
      ) : null}
    </Background>
  );
};

export default withResizeDetector(Header);
