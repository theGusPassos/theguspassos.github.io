import React from "react";
import { projectList } from "../../../data/projects/projectList";
import Project from "../../../models/project";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { colors } from "../../../data/colors";
import { device } from "../../../data/device";
import ProjectPageBackground from "../../common-styles/projectPageBackground";

const ProjectListPageStyled = styled.section`
  padding: 10%;
  position: relative;
  padding-bottom: 0 !important;

  button {
    color: ${colors.mainColor};
    margin-bottom: 30px;
  }

  @media ${device.desktop} {
    padding: 50px;
  }
`;

const PageTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 20px;
  color: ${colors.mainTextColor};
  text-align: center;
`;

const ProjectWrapper = styled.section`
  max-width: 1000px;
  margin: auto;
`;

const ProjectListPage = () => {
  const getProjects = () => {
    return projectList.map((project: Project, i: number) => {
      return <ProjectCard key={i} project={project}></ProjectCard>;
    });
  };

  return (
    <ProjectListPageStyled>
      <ProjectPageBackground></ProjectPageBackground>
      <PageTitle>my projects</PageTitle>
      <ProjectWrapper>{getProjects()}</ProjectWrapper>
    </ProjectListPageStyled>
  );
};

export default ProjectListPage;
