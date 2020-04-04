import React from "react";
import { colors } from "../../shared/colors";
import styled from "styled-components";
import { device } from "../../shared/device";

interface TitleProps {
  centered: boolean;
}

const TitleContent = styled.div`
  background: ${colors.secondColor};
  color: ${colors.mainTextColor};
  padding: 10px 20px;
  font-size: 0.95em;
  text-align: ${(props: TitleProps) => (props.centered ? "center" : "unset")};

  @media ${device.tablet} {
    padding: 10px 30px;
    font-size: 1.4em;
  }
`;

interface PageTitleProps {
  children: string;
  centered: boolean;
}

const PageTitle = (props: PageTitleProps) => {
  return (
    <TitleContent centered={props.centered}>{props.children}</TitleContent>
  );
};

export default PageTitle;