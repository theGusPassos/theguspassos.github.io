import React from "react";
import styled from "styled-components";
import PhotoCard from "./PhotoCard";
import BioSection from "./BioSection";

const Container = styled.section`
  background-color: #973BFF;
  height: 848px;
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
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
`

const F = styled.div`
`

const PersonalInfoContainer = () => {
    return (
        <Container>
            <ContainerColorBorder>
                <ContainerDisplay>
                    <F>
                      <PhotoCard></PhotoCard>
                    </F>
                    <BioSection></BioSection>
                </ContainerDisplay>
            </ContainerColorBorder>
        </Container>
    )
}

export default PersonalInfoContainer;