import React, { useEffect } from "react";
import styled from "styled-components";
import { goToExternalPage } from "../../common-functions/goToExternalPage";

const ConnectContainer = styled.section`
  background-color: #3F3F46;
  border-radius: 40px;
  margin: auto;
  width: 90%;

  @media (min-width: 1100px) {
    width: 956px;
  }
`

const ContainerBorders = styled.div`
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (min-width: 1100px) {
    padding: 90px;
  }
`

const Title = styled.h1`
  margin: 0;
  color: #88888C;
  font-size: 1.5rem;
  font-weight: 500;
`

const Desc = styled.p`
  margin: 10px 0 30px;
  color: white;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 48px;
  font-size: 2.4rem;

  @media (min-width: 1100px) {
    font-size: 3.875rem;
    line-height: 68px;
  }
`

const TalkToMeButton = styled.button`
  background-color: #973BFF;
  color: white;
  border-radius: 8px;
  width: 172px;
  height: 56px;

  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  cursor: pointer;
  border: none;
	outline: inherit;

  label {
    font-size: 1.25rem;
    cursor: pointer;
  }

  img {
    margin-left: 8px;
    cursor: pointer;
  }
  
  :focus-visible {
    outline: 2px solid ;
    outline-offset: 1px;
    border-radius: 8px;
  }

  :hover, :focus-visible {
    opacity: 0.5;
  }
`

const Connect = () => {
  const onConnectClick = () => {
      goToExternalPage("mailto:theguspassos@gmail.com");
  };

  const onConnectKeyDown = (e: any) => {
    if (e.keyCode === 13 || e.charCode === 13) onConnectClick();
  };

  return (
    <ConnectContainer>
      <ContainerBorders>
        <Title>Connect</Title>
        <Desc>Let's develop your next big project.</Desc>
        <TalkToMeButton onClick={onConnectClick} onKeyDown={onConnectKeyDown}>
          <label>Talk to me</label>
          <img src="icons/arrow.svg"></img>
        </TalkToMeButton>
        </ContainerBorders>
    </ConnectContainer>
  );
};

export default Connect;


