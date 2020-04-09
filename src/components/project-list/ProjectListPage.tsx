import React from "react";
import styled from "styled-components";
import PageStyle from "../common/PageStyle";
import { AnimationDirection, GetAnimationStyle } from "../../shared/animations";
import PageTitle from "../common/PageTitle";
import Project from "../../models/project";
import ProjectCard from "./ProjectCard";
import LinkButton from "../common/LinkButton";
import { Link } from "react-router-dom";
import { device } from "../../shared/device";
import { projectList } from "../../data/projects/projectList";

const ProjectListPageStyled = styled(PageStyle)``;

const ProjectListPageAnimated = GetAnimationStyle(
  ProjectListPageStyled,
  AnimationDirection.FromRight
);

const ProjectCardContainer = styled.section`
  height: 90%;
  overflow: auto;
  padding: 20px;

  @media ${device.tablet} {
    padding: 0 30px;
  }
`;

const getProjectCards = () => {
  return projectList.map((a: Project) => {
    return <ProjectCard project={a}></ProjectCard>;
  });
};

const LinkStyled = styled(Link)`
  height: 10%;
`;

const ReturnButton = styled(LinkButton)`
  width: 100%;
  position: fixed;
  bottom: 0;
  box-shadow: 0px 3px 11px 0px #0000009c;

  @media ${device.tablet} {
    font-size: 1.4em;
    padding: 3% 0;
  }
`;

const ProjectListPage = () => {
  return (
    <ProjectListPageAnimated>
      <PageTitle centered>my projects</PageTitle>
      <ProjectCardContainer>{getProjectCards()}</ProjectCardContainer>
      <LinkStyled to="/">
        <ReturnButton>Return</ReturnButton>
      </LinkStyled>
    </ProjectListPageAnimated>
  );
};

export default ProjectListPage;
