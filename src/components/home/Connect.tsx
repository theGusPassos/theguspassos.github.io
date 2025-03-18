import React, { useEffect } from "react";
import styled from "styled-components";

const ConnectContainer = styled.section`
  background-color: #3F3F46;
  border-radius: 40px;
  width: 956px;
  margin: auto;
`

const ContainerBorders = styled.div`
  margin: auto;
  text-align: center;
  padding: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  font-size: 3.875rem;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 68px;
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
  }

  img {
    margin-left: 8px;
  }
`

const Connect = () => {
  return (
    <ConnectContainer>
      <ContainerBorders>
        <Title>Connect</Title>
        <Desc>Let's develop your next big project.</Desc>
        <TalkToMeButton>
          <label>Talk to me</label>
          <img src="icons/arrow.svg"></img>
        </TalkToMeButton>
        </ContainerBorders>
    </ConnectContainer>
  );
};

export default Connect;


