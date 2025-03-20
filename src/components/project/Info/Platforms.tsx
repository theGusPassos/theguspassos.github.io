import React from "react";
import styled from "styled-components";
import { Platform } from "../../../models/project";
import { platform } from "process";
import ButtonToExternalLink from "../../common-components/ButtonToExternalLink";
import { goToExternalPage } from "../../../common-functions/goToExternalPage";

const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 10px;
`

const PlatformButton = styled.button`
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  cursor: pointer;
  background: none;
	outline: inherit;

  display: flex;
  gap: 10px;

  border: solid 1px white;
  border-radius: 8px;
	padding: 8px 16px;

  :focus-visible {
    outline: 2px solid #black;
    outline-offset: 1px;
    border-radius: 8px;
  }

  :hover,
  :focus-visible {
    background-color: white;

    label {
      color: black;
    }

    img {
      filter: brightness(0);
    }
  }

  label {
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 24px;
    color: white;
  }

  img {
    cursor: pointer;
    width: 22px;
    fill: white;
  }
`

interface PlatformsProps {
  platforms: Platform[];
}

const Platforms = ({ platforms }: PlatformsProps) => {
  const onPlatformButtonClick = (platform: Platform) => {
    goToExternalPage(platform.link);
  }

  const onPlatformKeyDown = (e: any, platform: Platform) => {
    if (e.keycode === 13 || e.charcode === 13) {
      onPlatformButtonClick(platform);
    }
  }

  const getPlatformButtons = () => {
    return platforms.map((platform: Platform, i: number) => {
      return (
        <PlatformButton key={i} onClick={() => onPlatformButtonClick(platform)} onKeyDown={(e) => onPlatformKeyDown(e, platform)}>
          <img src={`platforms/${platform.icon}.svg`}></img>
          <label>{platform.name}</label>
        </PlatformButton>
      )
    });
  }

  return (
    <Container>
      {getPlatformButtons()}
    </Container>
  );
};

export default Platforms;

