import React from "react";
import styled from "styled-components";
import PageStyle from "../common/PageStyle";
import { GetAnimationStyle, AnimationDirection } from "../../shared/animations";
import PageTitle from "../common/PageTitle";
import Project from "../../models/project";
import Tag from "../carousel/slide/Tag";
import { device } from "../../shared/device";

const ProjectViewPageStyled = styled(PageStyle)``;

const ProjectViewPageAnimated = GetAnimationStyle(
  ProjectViewPageStyled,
  AnimationDirection.FromUp
);

interface ProjectViewProps {
  project: Project;
}

const Image = styled.img``;

const TagContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

const getProjectTags = (project: Project) => {
  return project.tags.map((tag) => {
    return <Tag>{tag}</Tag>;
  });
};

const ProjectText = styled.section`
  padding: 20px;

  @media ${device.tablet} {
    padding: 30px;
  }
`;

const ProjectViewPage = (props: ProjectViewProps) => {
  return (
    <ProjectViewPageAnimated>
      <PageTitle centered>{props.project.name}</PageTitle>
      <Image src={props.project.image} alt={props.project.imageAlt}></Image>
      <TagContainer>{getProjectTags(props.project)}</TagContainer>
      <ProjectText>{props.project.container()}</ProjectText>
    </ProjectViewPageAnimated>
  );
};

export default ProjectViewPage;
