import React, { useEffect } from "react";
import styled from "styled-components";
import { projectList } from "../../data/project-list";
import Project from "../../models/project";
import { useHistory } from "react-router-dom";

const ProjectsContainer = styled.section`
  margin: 100px 0 130px 0;
  overflow: auto;
`

const Title = styled.h1`
    color: white;
    font-size: 2.25rem;
    line-height: 64px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 1px;
`

const ProjectButtonsContainer = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  padding-top: 10px;

  grid-template-columns: repeat(2, 50%); 
  gap: 20px 0; 

  @media (min-width: 850px) {
    grid-template-columns: repeat(3, 300px); 
    gap: 40px 30px; 
  }
`

const ProjectButton = styled.button`
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  cursor: pointer;
  border: none;
  background: none;
	color: inherit;
	padding: 0;
	outline: inherit;

  border-radius: 16px;
  overflow: hidden; 

  width: 90%;
  margin: auto;

  @media (min-width: 850px) {
    width: 290px;
    height: 320px;
  }

  :focus-visible {
    outline: 2px solid #973BFF;
    outline-offset: 1px;
    border-radius: 16px;
  }

  :hover, :focus-visible {
    img {
      transform: scale(1.2);
    }
  }
`

const ProjectButtonImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;

  transition: transform 0.3s ease; /* Smooth transition for the zoom effect */
`
const Projects = () => {
  const history = useHistory();

  const onProjectButtonClick = (projectId: string) => {
    history.push(projectId);
  }

  const onProjectButtonKeyDown = (e: any, projectId: string) => {
    if (e.keyCode === 13 || e.charCode === 13) onProjectButtonClick(projectId);
  }

  const getProjects = () => {
    return projectList.map((project: Project, key: number) => {
      return (
        <ProjectButton
          key={key}
          onClick={() => onProjectButtonClick(project.id)}
          onKeyDown={(e) => onProjectButtonKeyDown(e, project.id)}
        >
          <ProjectButtonImg
            key={key}
            src={project.publicDir + "/capsuleMain.png"}
          ></ProjectButtonImg>
        </ProjectButton>
      );
    });
  };

  return (
    <ProjectsContainer>
        <Title id="projectsTitle">My projects</Title>
        <ProjectButtonsContainer>
            {getProjects()}
        </ProjectButtonsContainer>
    </ProjectsContainer>
  );
};

export default Projects;

