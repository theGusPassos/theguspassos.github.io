import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Project, { Creator } from "../../models/project";
import { goToExternalPage } from "../../common-functions/goToExternalPage";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  margin: 20px;

  @media (min-width: 850px) {
    margin-left: 30px;

    margin-top: 0px;
    margin-left: 0px;
  }
`

const BackToHomeButton = styled.button`
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  outline: inherit;
  height: 24px;

  font-size: 1rem;
  color: #88888C;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  label {
      cursor: pointer;
      padding: 5px;
      font-weight: 500;
  }

  :focus-visible {
    outline: 2px solid white;
    outline-offset: 1px;
    border-radius: 4px;
  }
`

const GameCapsule = styled.img`
    border-radius: 16px;
    margin: 25px 0;
`

const ProjectName = styled.label`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 42px;
  color: white;
`

const ProjectType = styled.label`
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 24px;
  color: #88888C;
`

const Credits = styled.label`
  margin: 25px 0 5px 0;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 24px;
  color: white;
`

const Creators = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 15px;
`

const CreatorInfo = styled.button`
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  cursor: pointer;
  border: none;
  background: none;
	color: inherit;
	padding: 0;
	outline: inherit;
  height: 40px;

  display: flex;
  gap: 10px;

  label {
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 2px;
  }

  :focus-visible {
    outline: 2px solid white;
    outline-offset: 1px;
    border-radius: 4px;
  }

  :hover, 
  :focus {
    label, img {
      opacity: 0.5;
    }
  }
`

const CreatorImage = styled.img`
  border-radius: 50%;
  width: 28px;
  height: 28px;
  margin: auto;
`

const CreatorName = styled.label`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 24px;
  color: white;
`

const CreatorRole = styled.label`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 16px;
  color: #88888C;
`

interface ProjectProps {
  project: Project;
}

const ProjectHeader = ({ project }: ProjectProps) => {
  const history = useHistory();

  const goBackHome = () => {
    history.push("/");
  }

  const goBackHomeOnKeyDown = (e: any) => {
    if (e.keycode === 13 || e.charcode === 13) {
      goBackHome();
    }
  }

  const onCreatorClick = (creator: Creator) => {
    goToExternalPage(creator.socials!);
  }

  const onCreatorKeyDown = (e: any, creator: Creator) => {
    if (e.keycode === 13 || e.charcode === 13) {
      onCreatorClick(creator);
    }
  }

  const getCreators = () => {
    return project.creators.map((creator: Creator, i: number) => {
      return (
        <CreatorInfo key={i} onClick={() => onCreatorClick(creator)} onKeyDown={(e) => onCreatorKeyDown(e, creator)}>
          <CreatorImage src={`creators/${creator.photo ?? "none.png"}`}></CreatorImage>
          <div>
            <CreatorName>{creator.name}</CreatorName>
            <CreatorRole>{creator.role}</CreatorRole>
          </div>
        </CreatorInfo>
      )
    });
  }

  return (
    <Header>
        <BackToHomeButton onClick={goBackHome} onKeyDown={goBackHomeOnKeyDown}>
          <img src="icons/arrow-left.svg"></img>
          <label>Back to home</label>
        </BackToHomeButton>

        <GameCapsule src={`${project.publicDir}/capsuleMain.png`}></GameCapsule>

        <ProjectName>{project.name}</ProjectName>
        <ProjectType>{project.type}</ProjectType>

        <Credits>Credits</Credits>
        <Creators>
          {getCreators()}
        </Creators>
    </Header>
  );
};

export default ProjectHeader;


