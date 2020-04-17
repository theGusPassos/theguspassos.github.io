import React from "react";
import styled from "styled-components";
import pageStyle from "../../common-styles/pageStyle";
import {
  AnimationDirection,
  GetAnimator,
} from "../../../animations/animations";
import PageTitle from "../../common-components/PageTitle";
import Project from "../../../models/project";
import ProjectCard from "./ProjectCard";
import { device } from "../../../data/device";
import { projectList } from "../../../data/projects/projectList";
import ReturnButton from "../../common-components/ReturnButton";
import { getLocationToAnim } from "../../../animations/locationToAnim";
import {
  LocationAnimationMap,
  getAnimationBasedOnLocation,
} from "../../../animations/dynamicAnimation";
import { homePath, projectListPathHash, aboutPath } from "../../../data/routes";
import { useLastLocation } from "react-router-last-location";
import DeviceInfo from "../../../models/deviceInfo";

const ProjectListPageAnimated = GetAnimator(pageStyle);

const ProjectCardContainer = styled.section`
  height: 90%;
  padding: 20px;
  margin-bottom: 10%;

  @media ${device.tablet} {
    padding: 0 30px;
  }
`;

interface ProjectListProps extends DeviceInfo {}

const ScrollableArea = styled(pageStyle)`
  display: flex;
  flex-direction: column;
`;

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
      <ScrollableArea>
        {props.isDesktop ? null : <PageTitle centered>my projects</PageTitle>}
        <ProjectCardContainer>{getProjectCards()}</ProjectCardContainer>
      </ScrollableArea>
      {props.isDesktop ? null : <ReturnButton returnToHome></ReturnButton>}
    </ProjectListPageAnimated>
  );
};

export default ProjectListPage;
