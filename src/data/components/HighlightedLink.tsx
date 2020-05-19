import React from "react";
import LinkToExternal, {
  LinkToExternalProps,
} from "../../components/common-components/LinkToExternal";
import styled from "styled-components";

const LinkToExternalHighlighted = styled(LinkToExternal)`
  font-size: 10em;
`;

const HighlightedLink = (props: LinkToExternalProps) => {
  return (
    <LinkToExternalHighlighted url={props.url}>
      {props.children}
    </LinkToExternalHighlighted>
  );
};

export default HighlightedLink;
