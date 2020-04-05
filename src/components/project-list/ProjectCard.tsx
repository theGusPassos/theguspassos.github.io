import React from "react";
import Project from "../../models/project";
import styled from "styled-components";
import Tag from "../Carousel/Slide/Tag";
import { device } from "../../shared/device";
import { colors } from "../../shared/colors";

interface ProjectCardProps {
  project: Project;
}

const ProjectCardStyle = styled.div`
  padding: 20px 20px 10px 20px;
  border-bottom: 2px solid ${colors.mainColor};
  transition: 0.3s;

  :focus,
  :hover {
    background-color: ${colors.buttonClickedColor};
  }

  @media ${device.tablet} {
    padding: 30px;
  }
`;

const CardHeader = styled.div`
  display: flow-root;
  position: relative;
`;

const ProjectTitle = styled.strong`
  color: ${colors.mainColor};
  float: left;
  font-size: 1.3em;
  position: absolute;
  bottom: 0;
`;

const TagContainerStyled = styled.div`
  float: right;

  div {
    margin: 0;
  }

  div:first-child {
    margin-left: 10px;
  }
`;

const ProjectDescription = styled.p`
  clear: both;
  padding: 20px 0 10px 0;
  margin: 0;
`;

const getProjectTags = (project: Project) => {
  return project.tags.map((tag) => {
    return <Tag>{tag}</Tag>;
  });
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <ProjectCardStyle>
      <CardHeader>
        <ProjectTitle>{props.project.name}</ProjectTitle>
        <TagContainerStyled>{getProjectTags(props.project)}</TagContainerStyled>
      </CardHeader>
      <ProjectDescription>
        2D fast paced game inspired in hits like Castlevania SOTN and Hollow
        Knight. Not a Metroidvania, though.
      </ProjectDescription>
    </ProjectCardStyle>
  );
};

export default ProjectCard;
