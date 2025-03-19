import React, { useEffect } from "react";
import styled from "styled-components";
import { projectList } from "../../data/project-list";
import Project from "../../models/project";

const ProjectsContainer = styled.section`
  margin: 100px 0 130px 0;
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
  grid-template-columns: repeat(3, 300px); 
  gap: 40px 30px; 
  align-content: center;
  justify-content: center;
  padding-top: 10px;
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
  width: 290px;
  height: 320px;
`

const ProjectButtonImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
`
const Projects = () => {
  const getProjects = () => {
    return projectList.map((project: Project, key: number) => {
      return (
        <ProjectButton
          key={key}
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

