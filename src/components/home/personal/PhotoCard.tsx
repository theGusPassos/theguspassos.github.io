import styled from "styled-components";
import React from "react";

const PhotoCardContainer = styled.div`
  background-color: #ffffff;
  width: 370px;
  height: 532px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0 60px 0;
  box-sizing: border-box;
  margin: auto;

  @media (min-width: 640px) {
    margin: none;
  }
`;

const Image = styled.img`
  width: 290px;
  border-radius: 20px;
`

const NameAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Name = styled.label`
  color: #111113;
  font-size: 2rem;
  font-weight: 800;
  line-height: 42px;
`

const Title = styled.label`
  color: #5F5F62;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`

const CheckProjects = styled.button`
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  cursor: pointer;
  border: none;
  background: none;
	padding: 5px;
	outline: inherit;

  color: #973BFF;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 24px;

  :focus-visible {
    outline: 2px solid #973BFF;
    outline-offset: 1px;
    border-radius: 4px;
  }

  :hover, :focus-visible {
    opacity: 0.5;
  }
`

const PhotoCard = () => {
  const scrollToProjects = () => {
    const projectsTitle = document.querySelector("#projectsTitle");

    projectsTitle!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
  }

  const onScrollToProjectsKeyDown = (e: any) => {
    if (e.keyCode === 13 || e.charCode === 13) {
      scrollToProjects();
    }
  }

  return (
    <PhotoCardContainer>
      <Image 
        src="images/eubykuma.png"
        alt="drawing of me and my cats made by @kumamaskie, click to go to her instagram"
        data-tip="this drawing was made by @kumamaskie, check her instagram"
      ></Image>
      <NameAndTitle>
        <Name>Gustavo Passos</Name>
        <Title>Game and Software<br/>Developer</Title>
      </NameAndTitle>
      <CheckProjects 
        onClick={scrollToProjects} 
        onKeyDown={onScrollToProjectsKeyDown}
        tab-index={0}>
          Check my projects
        </CheckProjects>
    </PhotoCardContainer>
  );
};

export default PhotoCard;
