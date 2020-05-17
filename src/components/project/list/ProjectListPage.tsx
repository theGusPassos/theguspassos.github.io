import React from "react";
import { projectList } from "../../../data/projects/projectList";
import Project from "../../../models/project";
import styled from "styled-components";
import {
  GetAnimator,
  GetAnimationTransform,
  AnimationDirection,
} from "../../../animations/animations";
import ProjectCard from "./ProjectCard";
import { defaultPadding } from "../../common-styles/styles";
import { colors } from "../../../data/colors";

const ProjectListPageStyled = styled.section`
  ${defaultPadding};
`;

const ProjectListPageAnimated = GetAnimator(ProjectListPageStyled);
const AnimationTransform = GetAnimationTransform(AnimationDirection.FromDown);

const ProjectPageBackground = styled.div`
  position: absolute;
  background-color: ${colors.mainColor};
  z-index: -9999;
  right: 0;
  top: 0;
  left: 0;
  bottom: 70%;
`;

const PageTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 30px;
  color: ${colors.mainTextColor};
  text-align: center;
`;

const ProjectListPage = () => {
  const getProjects = () => {
    return projectList.map((project: Project, i: number) => {
      return <ProjectCard key={i} project={project}></ProjectCard>;
    });
  };

  return (
    <ProjectListPageAnimated transform={AnimationTransform}>
      <ProjectPageBackground></ProjectPageBackground>
      <PageTitle>my projects</PageTitle>
      {getProjects()}
    </ProjectListPageAnimated>
  );
};

export default ProjectListPage;
