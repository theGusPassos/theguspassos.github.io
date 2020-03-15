import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext,
  ButtonBack
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Carousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={10}
      naturalSlideHeight={10}
      visibleSlides={1}
      totalSlides={3}
    >
      <Slider>
        <Slide index={0}>first one</Slide>
        <Slide index={1}>second one</Slide>
        <Slide index={2}>third one</Slide>
      </Slider>
      <ButtonBack>back</ButtonBack>
      <ButtonNext>next</ButtonNext>
    </CarouselProvider>
  );
}

export default Carousel;
