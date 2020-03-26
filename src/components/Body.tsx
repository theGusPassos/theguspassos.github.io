import React from "react";
import Header from "./Header";
import CarouselContent from "./Carousel/CarouselContent";
import Menu from "./Menu";
import styled from "styled-components";

const BodyGrid = styled.body`
  display: grid;
  grid-template-rows: 15% 45% 40%;
  height: 100%;
`;

function Body() {
  return (
    <BodyGrid>
      <Header></Header>
      <CarouselContent></CarouselContent>
      <Menu></Menu>
    </BodyGrid>
  );
}

export default Body;
