import React, { Fragment } from "react";
import { projectList } from "../../../data/projects/projectList";
import Project from "../../../models/project";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { defaultPadding } from "../../common-styles/styles";
import { colors } from "../../../data/colors";
import ContactsButton from "../../contacts/ContactsButton";
import { maxWidthStyle } from "../../common-styles/maxWidthStyle";

const ProjectListPageStyled = styled.section`
  ${defaultPadding};
  ${maxWidthStyle};
  padding-bottom: 0 !important;

  button {
    color: ${colors.mainColor};
    margin-bottom: 30px;
  }
`;

const ProjectPageBackground = styled.div`
  position: absolute;
  background-color: ${colors.mainColor};
  z-index: -9999;
  right: 0;
  top: 0;
  left: 0;
  bottom: 80%;
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
    <ProjectListPageStyled>
      <ProjectPageBackground></ProjectPageBackground>
      <PageTitle>my projects</PageTitle>
      {getProjects()}
    </ProjectListPageStyled>
  );
};

export default ProjectListPage;
