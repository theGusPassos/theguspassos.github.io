import React from "react";
import Project from "../../../models/project";
import styled from "styled-components";
import Tag from "../tag/Tag";
import { device } from "../../../data/device";
import { colors } from "../../../data/colors";
import LinkButton from "../../common-styles/linkButton";
import { Link } from "react-router-dom";
import { sectionWithText } from "../../common-styles/styles";
import DeviceInfo from "../../../models/deviceInfo";

interface ProjectCardProps extends DeviceInfo {
  project: Project;
  imageInRight: boolean;
}

interface StyleProps {
  imageInRight: boolean;
}

const ProjectCardStyle = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid ${colors.mainColor};
  transition: 0.3s;
  ${sectionWithText}

  @media ${device.tablet} {
    padding: 30px 0;
  }
`;

const CardHeader = styled.div`
  display: ${(props: StyleProps) => (props.imageInRight ? "block" : "flex")};
`;

const ProjectImage = styled.img`
  width: 55%;
  border-radius: 20px;
  float: ${(props: StyleProps) => (props.imageInRight ? "right" : "unset")};

  @media ${device.tablet} {
    width: 60%;
  }
`;

const TitleAndTags = styled.div`
  width: 45%;
  padding-left: ${(props: StyleProps) => (props.imageInRight ? "0" : "10px")};
`;

const ProjectTitle = styled.strong`
  color: ${colors.mainColor};
  font-size: 1.3em;
  width: 100%;
  padding: 5px;
`;

const TagContainerStyled = styled.div`
  display: flex;

  div {
    float: left;
    margin: 5px;
    padding: 2px;
  }
`;

const ProjectDescription = styled.p`
  clear: both;
  padding: 20px 0 10px 0;
  margin: 0;
`;

const DesktopProjectDescription = styled(ProjectDescription)`
  clear: none;
`;

const LinkButtonStyled = styled(LinkButton)`
  padding: 5px 0 0 0;
  width: 100%;

  @media ${device.tablet} {
    padding: 20px 0 0 0;
  }
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
      <CardHeader imageInRight={props.imageInRight}>
        <ProjectImage
          imageInRight={props.imageInRight}
          src={props.project.image}
          alt={props.project.imageAlt}
        ></ProjectImage>
        <TitleAndTags imageInRight={props.imageInRight}>
          <ProjectTitle>{props.project.name}</ProjectTitle>
          <TagContainerStyled>
            {getProjectTags(props.project)}
          </TagContainerStyled>
          {props.deviceType.isTablet ? (
            <DesktopProjectDescription>
              {props.project.description}
            </DesktopProjectDescription>
          ) : null}
        </TitleAndTags>
      </CardHeader>
      {props.deviceType.isTablet ? null : (
        <ProjectDescription>{props.project.description}</ProjectDescription>
      )}
      <Link to={getProjectUrl(props.project.id)} tabIndex={-1}>
        <LinkButtonStyled>check this project</LinkButtonStyled>
      </Link>
    </ProjectCardStyle>
  );
};

export default ProjectCard;
