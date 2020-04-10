import React from "react";
import styled from "styled-components";
import PageStyle from "../../common/PageStyle";
import {
  AnimationDirection,
  GetAnimator,
  GetAnimationTransform,
} from "../../../shared/animations";
import PageTitle from "../../common/PageTitle";
import Project from "../../../models/project";
import ProjectCard from "./ProjectCard";
import { device } from "../../../shared/device";
import { projectList } from "../../../data/projects/projectList";
import ReturnButton from "../../common/ReturnButton";

const ProjectListPageAnimated = GetAnimator(PageStyle);
const AnimationTransform = GetAnimationTransform(AnimationDirection.FromRight);

const ProjectCardContainer = styled.section`
  height: 90%;
  overflow: auto;
  padding: 20px;

  @media ${device.tablet} {
    padding: 0 30px;
  }
`;

const getProjectCards = () => {
  return projectList.map((a: Project, key: number) => {
    return <ProjectCard project={a} key={key}></ProjectCard>;
  });
};

const ProjectListPage = () => {
  return (
    <ProjectListPageAnimated transform={AnimationTransform}>
      <PageTitle centered>my projects</PageTitle>
      <ProjectCardContainer>{getProjectCards()}</ProjectCardContainer>
      <ReturnButton></ReturnButton>
    </ProjectListPageAnimated>
  );
};

export default ProjectListPage;
