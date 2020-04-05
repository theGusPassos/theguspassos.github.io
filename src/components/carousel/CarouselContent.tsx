import React from "react";
import SlideContent from "./slide/SlideContent";
import Project from "../../models/project";
import styled from "styled-components";
import sketchImage from "../../images/projects/sketch/sketch-carousel.png";
import sketchImageBig from "../../images/projects/sketch/sketch-carousel-big.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { isInDesktop } from "../../shared/device";

const projectsInCarousel: Project[] = [
  {
    image: sketchImage,
    imageBig: sketchImageBig,
    imageAlt: "Image the game Sketch",
    name: "sketch 1",
    tags: ["Unity", "C#"],
  },
  {
    image: sketchImage,
    imageBig: sketchImageBig,
    imageAlt: "Image the game Sketch",
    name: "sketch 2",
    tags: ["Unity", "C#"],
  },
  {
    image: sketchImage,
    imageBig: sketchImageBig,
    imageAlt: "Image the game Sketch",
    name: "sketch 3",
    tags: ["Unity", "C#"],
  },
];

const CarouselContainer = styled.div`
  z-index: 10;
`;

const CarouselStyled = styled(Carousel)`
  .control-dots {
    top: 0;
    bottom: unset;
  }
`;

function projectSlides() {
  return projectsInCarousel.map((value: Project, i: number) => {
    return <SlideContent index={i} project={value} key={i}></SlideContent>;
  });
}

const CarouselContent = () => {
  return (
    <CarouselContainer>
      <CarouselStyled
        showArrows={isInDesktop()}
        showThumbs={false}
        showStatus={false}
        showIndicators
        emulateTouch
        autoPlay
        interval={4000}
        stopOnHover
        infiniteLoop
      >
        {projectSlides()}
      </CarouselStyled>
    </CarouselContainer>
  );
};

export default CarouselContent;
