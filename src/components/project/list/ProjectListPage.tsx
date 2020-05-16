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

const PageTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 30px;
  color: ${colors.mainColor};
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
      <PageTitle>my projects</PageTitle>
      {getProjects()}
    </ProjectListPageAnimated>
  );
};

export default ProjectListPage;
