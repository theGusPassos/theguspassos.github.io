import React from "react";
import { Slide } from "pure-react-carousel";
import TagContainer from "./TagContainer";
import Project from "../../../shared/project";
import ProjectDescription from "./ProjectDescription";

const style = {
  imageContainer: {
    position: "relative" as const,
    display: "flex"
  },
  image: {
    width: "100%"
  }
};

interface ProjectSlideProps {
  index: number;
  project: Project;
}

function ProjectSlide(props: ProjectSlideProps) {
  return (
    <Slide index={props.index}>
      <div style={style.imageContainer}>
        <TagContainer tags={props.project.tags}></TagContainer>
        <img
          src={props.project.image}
          style={style.image}
          alt={props.project.imageAlt}
        ></img>
        <ProjectDescription></ProjectDescription>
      </div>
    </Slide>
  );
}

export default ProjectSlide;
