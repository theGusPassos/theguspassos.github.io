import React from "react";
import Header from "./Header";
import CarouselContent from "./Carousel/CarouselContent";
import Menu from "./Menu";
import styled from "styled-components";
import { device } from "../shared/device";

const BodyGrid = styled.body`
  display: grid;
  grid-template-rows: 15% 50% 35%;
  height: 100%;

  @media ${device.tablet} {
    grid-template-rows: 15% 55% 30%;
  }
`;

const Body = () => {
  return (
    <BodyGrid>
      <Header></Header>
      <CarouselContent></CarouselContent>
      <Menu></Menu>
    </BodyGrid>
  );
};

export default Body;
