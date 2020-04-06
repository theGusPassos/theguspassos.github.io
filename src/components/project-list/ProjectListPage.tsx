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

const ProjectListPageStyled = styled(PageStyle)``;

const ProjectListPageAnimated = GetAnimationStyle(
  ProjectListPageStyled,
  AnimationDirection.FromRight
);

const ProjectCardContainer = styled.section`
  height: 90%;
  overflow: auto;
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
  { name: "big", image: "", imageAlt: "", imageBig: "", tags: ["java"] },
  { name: "big", image: "", imageAlt: "", imageBig: "", tags: ["java"] },
  { name: "big", image: "", imageAlt: "", imageBig: "", tags: ["java"] },
];

const getProjectCards = () => {
  return mockProjects.map((a: Project) => {
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

  @media ${device.tablet} {
    padding: 4% 0;
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
