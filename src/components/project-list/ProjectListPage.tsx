import React from "react";
import styled from "styled-components";
import PageStyle from "../common/PageStyle";
import { AnimationDirection, GetAnimationStyle } from "../../shared/animations";
import PageTitle from "../common/PageTitle";
import Project from "../../models/project";
import ProjectCard from "./ProjectCard";

const ProjectListPageStyled = styled(PageStyle)``;

const ProjectListPageAnimated = GetAnimationStyle(
  ProjectListPageStyled,
  AnimationDirection.FromRight
);

const ProjectCardContainer = styled.section`
  margin-top: 10px;
`;

const mockProjects: Project[] = [
  {
    name: "sketch",
    image: "",
    imageAlt: "",
    imageBig: "",
    tags: ["C#", "Unity"],
  },
  {
    name: "blockchain",
    image: "",
    imageAlt: "",
    imageBig: "",
    tags: ["hyperledger"],
  },
  { name: "big", image: "", imageAlt: "", imageBig: "", tags: ["java"] },
  {
    name: "src racing game",
    image: "",
    imageAlt: "",
    imageBig: "",
    tags: ["unity"],
  },
];

const getProjectCards = () => {
  return mockProjects.map((a: Project) => {
    return <ProjectCard project={a}></ProjectCard>;
  });
};

const ProjectListPage = () => {
  return (
    <ProjectListPageAnimated>
      <PageTitle centered>my projects</PageTitle>
      <ProjectCardContainer>{getProjectCards()}</ProjectCardContainer>
    </ProjectListPageAnimated>
  );
};

export default ProjectListPage;
