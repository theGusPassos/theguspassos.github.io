import React from "react";
import styled from "styled-components";
import PageStyle from "./common/PageStyle";
import { AnimationDirection, GetAnimationStyle } from "../shared/animations";
import PageTitle from "./common/PageTitle";

const ProjectListPageStyled = styled(PageStyle)``;

const ProjectListPageAnimated = GetAnimationStyle(
  ProjectListPageStyled,
  AnimationDirection.FromRight
);

const ProjectListPage = () => {
  return (
    <ProjectListPageAnimated>
      <PageTitle centered>my projects</PageTitle>
      test
    </ProjectListPageAnimated>
  );
};

export default ProjectListPage;
