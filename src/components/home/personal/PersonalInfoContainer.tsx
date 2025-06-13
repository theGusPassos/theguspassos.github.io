import React from "react";
import styled from "styled-components";
import PhotoCard from "./PhotoCard";
import BioSection from "./BioSection";

const Container = styled.section`
  background-color: #973BFF;

  @media (min-width: 840px) {
    height: 848px;
  }
`

const ContainerColorBorder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #17171A;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
`

const ContainerDisplay = styled.div`
  max-width: 950px;
  height: 100%;
  align-items: center;

  @media (min-width: 840px) {
    margin: auto;
    display: grid;
    grid-template-columns: 50% 50%;
  }
`

const MobileSpacing = styled.div`
  background-color: #17171A;
  padding: 50px 0;

  @media (min-width: 840px) {
    padding: 0;
  }
`

const PersonalInfoContainer = () => {
    return (
        <Container>
          <MobileSpacing>
          </MobileSpacing>
            <ContainerColorBorder>
                <ContainerDisplay>
                  <PhotoCard></PhotoCard>
                  <BioSection></BioSection>
                </ContainerDisplay>
            </ContainerColorBorder>
        </Container>
    )
}

export default PersonalInfoContainer;