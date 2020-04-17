import React from "react";
import { colors } from "../../data/colors";
import styled from "styled-components";
import { device } from "../../data/device";

interface TitleProps {
  centered?: boolean;
}

const TitleContent = styled.h1`
  background: ${colors.secondColor};
  color: ${colors.mainTextColor};
  padding: 10px 20px;
  font-size: 0.95em;
  text-align: ${(props: TitleProps) => (props.centered ? "center" : "unset")};
  box-shadow: 0px 3px 11px 0px #0000009c;
  font-weight: normal;
  margin: 0;

  @media ${device.tablet} {
    padding: 10px 30px;
    font-size: 1.4em;
    box-shadow: none;
  }

  @media ${device.desktop} {
    text-align: center;
    color: ${colors.mainColor};
    background: ${colors.mainBackgroundColor};
    margin-bottom: 10px;
    font-size: 1.6em;
  }
`;

interface PageTitleProps {
  children: string;
  centered?: boolean;
}

const PageTitle = (props: PageTitleProps) => {
  return (
    <TitleContent centered={props.centered}>{props.children}</TitleContent>
  );
};

export default PageTitle;
