import React from "react";
import Project from "../../../models/project";
import styled from "styled-components";
import { colors } from "../../../data/colors";
import { useHistory } from "react-router-dom";
import { buttonOnHover } from "../../common-styles/styles";

interface ProjectCardProps {
  project: Project;
}

const ProjectCardStyled = styled.button`
  position: relative;
  background-color: #fff;
  margin-bottom: 30px;
  padding: 0;
  border: none;
  box-shadow: 1px 2px 2px 1px #00000075;
  text-align: initial;
  font-size: 1em;

  img {
    width: 100%;
  }
`;

const HoverEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${buttonOnHover};
`;

const ProjectInfo = styled.div`
  padding: 10px 20px;
  color: ${colors.mainColor};

  strong {
    display: block;
    margin-bottom: 10px;
    font-size: 1.5em;
  }

  span {
    font-size: 1.2em;
  }
`;

const ProjectCard = (props: ProjectCardProps) => {
  const history = useHistory();

  const onCardClick = () => {
    history.push("/project/" + props.project.id);
  };

  return (
    <ProjectCardStyled onClick={onCardClick}>
      <HoverEffect></HoverEffect>
      <img src={props.project.image} alt={props.project.imageAlt}></img>
      <ProjectInfo>
        <strong>{props.project.name}</strong>
        <span>{props.project.description}</span>
      </ProjectInfo>
    </ProjectCardStyled>
  );
};

export default ProjectCard;
