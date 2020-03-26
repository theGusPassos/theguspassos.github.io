import React from "react";
import { Slide } from "pure-react-carousel";
import TagContainer from "./TagContainer";
import Project from "../../../shared/project";
import Description from "./Description";
import styled from "styled-components";

const ImageContainer = styled.section`
  position: relative;
  display: flex;
`;

interface ImageProps {
  src: string;
}

const Image = styled.img`
  width: 100%;
`;

interface ProjectSlideProps {
  index: number;
  project: Project;
}

function SlideContent(props: ProjectSlideProps) {
  return (
    <Slide index={props.index}>
      <ImageContainer>
        <TagContainer tags={props.project.tags}></TagContainer>
        <Image src={props.project.image} alt={props.project.imageAlt}></Image>
        <Description></Description>
      </ImageContainer>
    </Slide>
  );
}

export default SlideContent;
