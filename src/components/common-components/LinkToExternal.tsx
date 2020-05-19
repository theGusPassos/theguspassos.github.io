import React from "react";
import {
  goToExternalPage,
  goToExternalPageOnKeyDown,
} from "../../common-functions/goToExternalPage";
import ButtonStyle from "../common-styles/buttonStyles";

export interface LinkToExternalProps {
  url: string;
  children: string;
}

const LinkToExternal = (props: LinkToExternalProps) => {
  return (
    <ButtonStyle
      onClick={() => goToExternalPage(props.url)}
      onKeyDown={(e) => goToExternalPageOnKeyDown(e, props.url)}
    >
      {props.children}
    </ButtonStyle>
  );
};

export default LinkToExternal;
