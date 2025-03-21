import React, { useEffect } from "react";
import styled from "styled-components";
import { ExternalLinks } from "../../../models/project";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const Container = styled.div`
`

const TrailerContainer = styled.div`
`

const TrailerFrame = styled.iframe`
  width: 560px;
  height: 315px;
`

const PressKitContainer = styled.div`
  margin: 30px 0;
`

const PressKitTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 24px;
  color: white;
`

const PressKitImagesDisplay = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
  maxWidth: 800px;
  height: 300px;
  margin: 0 0 20px 0;
`

const PressKitImagesLeft = styled.div`
  display: grid;
  gridTemplateRows: 1fr 1fr;
  gap: 10px;
`

const PressKitImage = styled.img`
  border-radius: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  object-fit: cover;
`

const DownloadPressKitButton = styled.button`
  background-color: #973BFF;
  color: white;
  border-radius: 8px;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  cursor: pointer;
  border: none;
	outline: inherit;
  padding: 10px 15px;

  display: flex;
  gap: 10px;

  label {
    font-size: 0.875rem;
    cursor: pointer;
  }

  svg {
    cursor: pointer;
    stroke: white;
  }
  
  :focus-visible {
    outline: 2px solid white;
    outline-offset: 1px;
    border-radius: 8px;
  }

  :hover,
  :focus-visible {
    outline: 1px solid #973BFF;
    outline-offset: 1px;
    background-color: transparent;

    label, svg {
      color: #973BFF;
      stroke: #973BFF;
    }
  }
`

interface LinksProps {
  externalLinks: ExternalLinks;
  projectId: string;
}

const Links = ({ externalLinks, projectId }: LinksProps) => {
  const getPressKitDisplayImages = () => {
    return (
      <React.Fragment>
        <PressKitImagesLeft>
          {true &&
            [2, 3].map((imgId: number, i: number) => {
              return (
                <PressKitImage key={i} src={`projects/${projectId}/presskit/${imgId}.png`}></PressKitImage>
              )
            })
          }
        </PressKitImagesLeft>
        { true && <PressKitImage src={`projects/${projectId}/presskit/4.png`}></PressKitImage> }
      </React.Fragment>
    );
  }

  const downloadPressKit = async () => {
    const zip = new JSZip();
    const imageFolder = zip.folder("presskit");
    let error = false;
    let i = 1;

    while (!error){
      const imgUrl = `projects/${projectId}/presskit/${i}.png`;
      try {
        const response = await fetch(imgUrl);
        const blob = await response.blob();

        // not found
        if (blob.type === "text/html"){
          error = true;
          break;
        }

        imageFolder?.file(`${i}.png`, blob);
        i++;
      } catch(ex) {
        console.log(ex)
        error = true;
      }
    }

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "presskit.zip");
    });
  }

  const downloadPressKitOnKeyDown = (e: any) => {
    if (e.keycode === 13 || e.charcode === 13) {
      downloadPressKit();
    }
  }

  return (
    <Container>
      { externalLinks.trailer && 
        <TrailerContainer>
          <TrailerFrame src={externalLinks.trailer} title="Youtube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></TrailerFrame>
        </TrailerContainer>
      }

      { externalLinks.hasPressKit &&
        <PressKitContainer>
          <PressKitTitle>Press kit</PressKitTitle>

          <PressKitImagesDisplay>
            { getPressKitDisplayImages() }
          </PressKitImagesDisplay>

          <DownloadPressKitButton onClick={downloadPressKit} onKeyDown={downloadPressKitOnKeyDown}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 9V11.6667C13 12.0203 12.8595 12.3594 12.6095 12.6095C12.3594 12.8595 12.0203 13 11.6667 13H2.33333C1.97971 13 1.64057 12.8595 1.39052 12.6095C1.14048 12.3594 1 12.0203 1 11.6667V9M3.66667 5.66667L7 9M7 9L10.3333 5.66667M7 9V1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <label>Download Press Kit</label>
          </DownloadPressKitButton>
        </PressKitContainer>
      }
    </Container>
  );
};

export default Links;


