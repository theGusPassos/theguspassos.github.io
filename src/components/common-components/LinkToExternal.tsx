import React from "react";
import LinkButton from "../common-styles/linkButton";
import {
  goToExternalPage,
  goToExternalPageOnKeyDown,
} from "../../common-functions/goToExternalPage";

interface LinkToExternalProps {
  url: string;
  children: string;
}

const LinkToExternal = (props: LinkToExternalProps) => {
  return (
    <LinkButton
      onClick={() => goToExternalPage(props.url)}
      onKeyDown={(e) => goToExternalPageOnKeyDown(e, props.url)}
    >
      {props.children}
    </LinkButton>
  );
};

export default LinkToExternal;
