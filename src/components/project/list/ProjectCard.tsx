import React from "react";
import Project from "../../../models/project";
import styled from "styled-components";
import { colors } from "../../../data/colors";
import { useHistory } from "react-router-dom";
import { buttonOnHover } from "../../common-styles/buttonStyles";
import { device } from "../../../data/device";

interface ProjectCardProps {
  project: Project;
}

const ProjectCardStyled = styled.div`
  position: relative;
  margin-bottom: 30px;

  img {
    width: 100%;
  }
`;

const ImageBackground = styled.div`
  position: absolute;
  top: 7px;
  left: 7px;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: ${colors.secondColor};
`;

const Image = styled.img`
  position: relative;
  z-index: 999;
`;

const HoverEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${buttonOnHover};
`;

const ProjectInfo = styled.div`
  padding: 10px 20px;
  color: ${colors.mainColor};

  strong {
    display: block;
    margin-bottom: 10px;
    font-size: 1.5em;
  }

  span {
    font-size: 1.2em;
  }
`;

const ProjectCard = (props: ProjectCardProps) => {
  const history = useHistory();

  const onCardClick = () => {
    history.push("/project/" + props.project.id);
  };

  return (
    <ProjectCardStyled>
      {/* <HoverEffect></HoverEffect> */}

      <ImageBackground></ImageBackground>
      <Image src={props.project.image} alt={props.project.imageAlt}></Image>
      {/* <ProjectInfo>
        <strong>{props.project.name}</strong>
        <span>{props.project.description}</span>
      </ProjectInfo> */}
    </ProjectCardStyled>
  );
};

export default ProjectCard;
