import React from "react";
import {
  goToExternalPage,
  goToExternalPageOnKeyDown,
} from "../../common-functions/goToExternalPage";
import styled from "styled-components";

export interface LinkToExternalProps {
  url: string;
  children: string;
}

const Button = styled.button`

`;

const ButtonToExternalLink = (props: LinkToExternalProps) => {
  return (
    <Button
      onClick={() => goToExternalPage(props.url)}
      onKeyDown={(e) => goToExternalPageOnKeyDown(e, props.url)}
    >
      {props.children}
    </Button>
  );
};

export default ButtonToExternalLink;
