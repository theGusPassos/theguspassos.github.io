import React from "react";
import Project from "../../../models/project";
import styled from "styled-components";
import Tag from "../tag/Tag";
import { device } from "../../../data/device";
import { colors } from "../../../data/colors";
import LinkButton from "../../common-components/LinkButton";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

const ProjectCardStyle = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid ${colors.mainColor};
  transition: 0.3s;

  @media ${device.tablet} {
    padding: 30px 0;
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

const LinkButtonStyled = styled(LinkButton)`
  padding: 20px 0 0 0;
  width: 100%;
`;

const ProjectCard = (props: ProjectCardProps) => {
  const getProjectTags = (project: Project) => {
    return project.tags.map((tag: string, key: number) => {
      return <Tag key={key}>{tag}</Tag>;
    });
  };

  const getProjectUrl = (projectId: number) => {
    return "project/" + projectId;
  };

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
      <Link to={getProjectUrl(props.project.id)} tabIndex={-1}>
        <LinkButtonStyled>check this project</LinkButtonStyled>
      </Link>
    </ProjectCardStyle>
  );
};

export default ProjectCard;
