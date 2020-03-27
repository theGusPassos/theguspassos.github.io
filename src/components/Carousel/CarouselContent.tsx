import React from "react";
import SlideContent from "./Slide/SlideContent";
import CarouselTitle from "./CarouselTitle";
import Project from "../../models/project";
import styled from "styled-components";
import sketchImage from "../../images/projects/sketch/sketch-carousel.png";
import sketchImageBig from "../../images/projects/sketch/sketch-carousel-big.png";

const projectsInCarousel: Project[] = [
  {
    image: sketchImage,
    imageBig: sketchImageBig,
    imageAlt: "Image the game Sketch",
    name: "sketch",
    tags: ["Unity", "C#"]
  }
];

const CarouselContainer = styled.div``;

const CarouselContent = () => {
  return (
    <CarouselContainer>
      <CarouselTitle></CarouselTitle>
      {projectsInCarousel.map((value: Project, i: number) => {
        return <SlideContent index={i} project={value} key={i}></SlideContent>;
      })}
    </CarouselContainer>
  );
};

export default CarouselContent;
