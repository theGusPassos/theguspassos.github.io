import React from "react";
import styled from "styled-components";
import pageStyle from "../../common-styles/pageStyle";
import { AnimationDirection, GetAnimator } from "../../../shared/animations";
import PageTitle from "../../common-components/PageTitle";
import Project from "../../../models/project";
import ProjectCard from "./ProjectCard";
import { device } from "../../../shared/device";
import { projectList } from "../../../data/projects/projectList";
import ReturnButton from "../../common-components/ReturnButton";
import { getLocationToAnim } from "../../../shared/locationToAnim";
import {
  LocationAnimationMap,
  getAnimationBasedOnLocation,
} from "../../../shared/dynamicAnimation";
import { homePath, projectListPathHash, aboutPath } from "../../../data/routes";
import { useLastLocation } from "react-router-last-location";
import DeviceInfo from "../../../shared/deviceInfo";

const ProjectListPageAnimated = GetAnimator(pageStyle);

const ProjectCardContainer = styled.section`
  height: 90%;
  overflow: auto;
  padding: 20px;

  @media ${device.tablet} {
    padding: 0 30px;
  }
`;

interface ProjectListProps extends DeviceInfo {}

const ProjectListPage = (props: ProjectListProps) => {
  const location = getLocationToAnim(
    window.location.hash,
    useLastLocation()?.pathname,
    projectListPathHash
  );

  const getAnimationMap = () => {
    const animationMap: LocationAnimationMap = {};
    animationMap[homePath] = AnimationDirection.FromRight;
    animationMap[aboutPath] = AnimationDirection.FromRight;
    animationMap["default"] = AnimationDirection.FromDown;

    return animationMap;
  };

  const animationTransform = getAnimationBasedOnLocation(
    getAnimationMap(),
    location
  );

  const getProjectCards = () => {
    return projectList.map((a: Project, key: number) => {
      return <ProjectCard project={a} key={key}></ProjectCard>;
    });
  };

  return (
    <ProjectListPageAnimated transform={animationTransform}>
      {props.isDesktop ? null : <PageTitle centered>my projects</PageTitle>}
      <ProjectCardContainer>{getProjectCards()}</ProjectCardContainer>
      {props.isDesktop ? null : <ReturnButton returnToHome></ReturnButton>}
    </ProjectListPageAnimated>
  );
};

export default ProjectListPage;
