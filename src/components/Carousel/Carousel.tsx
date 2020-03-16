import React from "react";
import {
  CarouselProvider,
  ButtonNext,
  ButtonBack,
  Slider
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ProjectSlide from "./ProjectSlide";

import sketchImage from "../../images/projects/sketch/sketch-carousel.png";

const projectsInCarousel = [{ image: sketchImage, name: "sketch" }];

function Carousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={10}
      naturalSlideHeight={10}
      visibleSlides={1}
      totalSlides={2}
    >
      <Slider>
        {projectsInCarousel.map((value, i) => {
          return (
            <ProjectSlide index={i} img={value.image} key={i}></ProjectSlide>
          );
        })}
      </Slider>
      <ButtonBack>back</ButtonBack>
      <ButtonNext>next</ButtonNext>
    </CarouselProvider>
  );
}

export default Carousel;
