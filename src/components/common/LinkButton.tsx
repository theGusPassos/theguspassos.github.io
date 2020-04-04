import React from "react";
import styled from "styled-components";
import { device } from "../../shared/device";
import { colors } from "../../shared/colors";
import { Link } from "react-router-dom";

const LinkButtonStyle = styled.button`
  width: 100%;
  color: ${colors.mainColor};
  background: ${colors.secondBackgroundColor};
  font-size: 1.2em;
  border: none;
  padding: 4% 0;

  :focus,
  :hover {
    cursor: pointer;
    outline: none;
    text-decoration: underline;
  }

  @media ${device.tablet} {
    font-size: 1.8em;
    padding: 15% 0;
  }
`;

interface LinkButtonProps {
  to: string;
  children: string;
}

const LinkButton = (props: LinkButtonProps) => {
  return (
    <Link to={props.to}>
      <LinkButtonStyle>{props.children}</LinkButtonStyle>
    </Link>
  );
};

export default LinkButton;
