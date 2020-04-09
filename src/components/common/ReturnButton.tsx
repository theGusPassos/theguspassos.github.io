import React from "react";
import styled from "styled-components";
import { device } from "../../shared/device";
import LinkButton from "./LinkButton";
import { Link } from "react-router-dom";

const LinkStyled = styled(Link)`
  height: 10%;
`;

const ReturnButtonStyled = styled(LinkButton)`
  width: 100%;
  position: fixed;
  bottom: 0;
  box-shadow: 0px 3px 11px 0px #0000009c;

  @media ${device.tablet} {
    font-size: 1.4em;
    padding: 3% 0;
  }
`;

const ReturnButton = () => {
  return (
    <LinkStyled to="/">
      <ReturnButtonStyled>Return</ReturnButtonStyled>
    </LinkStyled>
  );
};

export default ReturnButton;
