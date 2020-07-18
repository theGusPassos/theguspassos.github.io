import React from "react";
import { projectList } from "../../../data/projects/projectList";
import Project from "../../../models/project";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { colors } from "../../../data/colors";
import { device } from "../../../data/device";
import ProjectPageBackground from "../../common-styles/projectPageBackground";
import NameSection from "../../common-components/NameSection";
import { pageMarginStyle } from "../../common-styles/pageMarginStyle";

const ProjectListPageStyled = styled.section`
  ${pageMarginStyle};
  margin-top: 20px !important;

  section {
    text-align: left !important;
  }
`;

const PageTitle = styled.h1`
  font-weight: normal;
  margin: 40px 0;
  color: ${colors.mainTextColor};
  text-align: center;
  letter-spacing: 4px;
  font-size: 1.2em;
`;

const ProjectWrapper = styled.section``;

const ProjectEnd = styled.div`
  color: ${colors.mainTextColor};
  text-align: right;
  letter-spacing: 4px;
  font-size: 1.5em;
`;

const ProjectListPage = () => {
  const getProjects = () => {
    return projectList.map((project: Project, i: number) => {
      return <ProjectCard key={i} project={project}></ProjectCard>;
    });
  };

  return (
    <ProjectListPageStyled>
      <NameSection></NameSection>
      <PageTitle>some things I've built</PageTitle>
      <ProjectWrapper>{getProjects()}</ProjectWrapper>
      <ProjectEnd>end;</ProjectEnd>
    </ProjectListPageStyled>
  );
};

export default ProjectListPage;
