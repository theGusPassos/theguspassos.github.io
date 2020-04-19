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
import PerfectScrollbar from "react-perfect-scrollbar";

const ProjectListPageAnimated = GetAnimator(pageStyle);

interface ProjectListProps extends DeviceInfo {}

const ScrollableArea = styled(PerfectScrollbar)`
  display: flex;
  flex-direction: column;
`;

const ProjectCardContainer = styled.section`
  height: 90%;
  padding: 15px 20px 20px 20px;
  margin-bottom: 10%;

  @media ${device.tablet} {
    padding: 0 30px;
  }
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
      return (
        <ProjectCard
          project={a}
          imageInRight={key % 2 === 0}
          key={key}
          deviceType={props.deviceType}
        ></ProjectCard>
      );
    });
  };

  return (
    <ProjectListPageAnimated transform={animationTransform}>
      <ScrollableArea>
        {props.deviceType.isDesktop ? null : (
          <PageTitle centered>my projects</PageTitle>
        )}
        <ProjectCardContainer>{getProjectCards()}</ProjectCardContainer>
      </ScrollableArea>
      {props.deviceType.isDesktop ? null : (
        <ReturnButton returnToHome></ReturnButton>
      )}
    </ProjectListPageAnimated>
  );
};

export default ProjectListPage;
