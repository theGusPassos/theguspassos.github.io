import React from "react";
import Project from "../../../models/project";
import styled from "styled-components";
import { colors } from "../../../data/colors";

interface ProjectCardProps {
  project: Project;
}

const ProjectCardStyled = styled.button`
  background-color: #fff;
  margin-bottom: 30px;
  padding: 0;
  border: none;
  box-shadow: 1px 2px 2px 1px #00000075;
  text-align: initial;
  font-size: 1em;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  img {
    width: 100%;
  }
`;

const ProjectInfo = styled.div`
  padding: 10px 20px;
  color: ${colors.mainColor};

  strong {
    display: block;
    margin-bottom: 10px;
    font-size: 1.5em;
  }
`;

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <ProjectCardStyled>
      <img src={props.project.image} alt={props.project.imageAlt}></img>
      <ProjectInfo>
        <strong>{props.project.name}</strong>
        <span>{props.project.description}</span>
      </ProjectInfo>
    </ProjectCardStyled>
  );
};

export default ProjectCard;
