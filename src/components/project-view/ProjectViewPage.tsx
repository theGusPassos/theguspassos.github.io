import React from "react";
import styled from "styled-components";
import PageStyle from "../common/PageStyle";
import { GetAnimationStyle, AnimationDirection } from "../../shared/animations";

const ProjectViewPageStyled = styled(PageStyle)``;

const ProjectViewPageAnimated = GetAnimationStyle(
  ProjectViewPageStyled,
  AnimationDirection.FromUp
);

const ProjectViewPage = () => {
  return <ProjectViewPageAnimated>test</ProjectViewPageAnimated>;
};

export default ProjectViewPage;
