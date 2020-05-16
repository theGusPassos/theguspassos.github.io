import React from "react";
import { projectList } from "../../../data/projects/projectList";
import Project from "../../../models/project";
import styled from "styled-components";
import {
  GetAnimator,
  GetAnimationTransform,
  AnimationDirection,
} from "../../../animations/animations";

const ProjectListPageStyled = styled.section``;
const ProjectListPageAnimated = GetAnimator(ProjectListPageStyled);
const AnimationTransform = GetAnimationTransform(AnimationDirection.FromDown);

const ProjectListPage = () => {
  const getProjects = () => {
    return projectList.map((project: Project, i: number) => {
      return <div key={i}>{project.name}</div>;
    });
  };

  return (
    <ProjectListPageAnimated transform={AnimationTransform}>
      {getProjects()}
    </ProjectListPageAnimated>
  );
};

export default ProjectListPage;
