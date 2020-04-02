import React from "react";
import SlideContent from "./Slide/SlideContent";
import CarouselTitle from "./CarouselTitle";
import Project from "../../models/project";
import styled from "styled-components";
import sketchImage from "../../images/projects/sketch/sketch-carousel.png";
import sketchImageBig from "../../images/projects/sketch/sketch-carousel-big.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const projectsInCarousel: Project[] = [
  {
    image: sketchImage,
    imageBig: sketchImageBig,
    imageAlt: "Image the game Sketch",
    name: "sketch 1",
    tags: ["Unity", "C#"]
  },
  {
    image: sketchImage,
    imageBig: sketchImageBig,
    imageAlt: "Image the game Sketch",
    name: "sketch 2",
    tags: ["Unity", "C#"]
  },
  {
    image: sketchImage,
    imageBig: sketchImageBig,
    imageAlt: "Image the game Sketch",
    name: "sketch 3",
    tags: ["Unity", "C#"]
  }
];

const CarouselContainer = styled.div`
  z-index: 10;
`;

const CarouselStyled = styled(Carousel)`
  li {
    display: block;
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
      <CarouselTitle></CarouselTitle>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        emulateTouch={true}
        showStatus={false}
      >
        {projectSlides()}
      </Carousel>
    </CarouselContainer>
  );
};

export default CarouselContent;
