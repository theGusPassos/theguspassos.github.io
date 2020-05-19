import React from "react";
import {
  goToExternalPage,
  goToExternalPageOnKeyDown,
} from "../../common-functions/goToExternalPage";
import styled from "styled-components";
import { buttonStyle } from "../common-styles/buttonStyles";
import { colors } from "../../data/colors";

export interface LinkToExternalProps {
  url: string;
  children: string;
}

const Button = styled.button`
  background-color: ${colors.mainBackgroundColor};
  color: ${colors.mainColor};

  font-size: 1.4em;
  width: 100%;

  ${buttonStyle};
`;

const LinkToExternal = (props: LinkToExternalProps) => {
  return (
    <Button
      onClick={() => goToExternalPage(props.url)}
      onKeyDown={(e) => goToExternalPageOnKeyDown(e, props.url)}
    >
      {props.children}
    </Button>
  );
};

export default LinkToExternal;
