import React from "react";
import styled from "styled-components";
import PageStyle from "../common/PageStyle";
import { GetAnimationStyle, AnimationDirection } from "../../shared/animations";
import PageTitle from "../common/PageTitle";
import Project from "../../models/project";

const ProjectViewPageStyled = styled(PageStyle)``;

const ProjectViewPageAnimated = GetAnimationStyle(
  ProjectViewPageStyled,
  AnimationDirection.FromUp
);

interface ProjectViewProps {
  project: Project;
}

const Image = styled.img``;

const ProjectViewPage = (props: ProjectViewProps) => {
  return (
    <ProjectViewPageAnimated>
      <PageTitle centered>{props.project.name}</PageTitle>
      <Image src={props.project.image} alt={props.project.imageAlt}></Image>
    </ProjectViewPageAnimated>
  );
};

export default ProjectViewPage;
