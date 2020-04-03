import React from "react";
import Menu from "./Menu";
import CarouselContent from "./Carousel/CarouselContent";
import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const HomePage = () => {
  return (
    <HomePageStyled>
      <CarouselContent></CarouselContent>
      <Menu></Menu>
    </HomePageStyled>
  );
};

export default HomePage;
