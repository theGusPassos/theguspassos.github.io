import React from "react";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
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
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        visibleSlides={1}
        totalSlides={1}
      >
        <Slider>
          {projectsInCarousel.map((value: Project, i: number) => {
            return (
              <SlideContent index={i} project={value} key={i}></SlideContent>
            );
          })}
        </Slider>
      </CarouselProvider>
    </CarouselContainer>
  );
};

export default CarouselContent;
