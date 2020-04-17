import React from "react";
import styled from "styled-components";
import { device } from "../../data/device";
import LinkButton from "./LinkButton";
import { Link } from "react-router-dom";
import { useLastLocation, LastLocationType } from "react-router-last-location";

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

interface ReturnProps {
  returnToHome?: boolean;
}

const ReturnButton = (props: ReturnProps) => {
  const lastLocation = useLastLocation();

  const getLastVisited = (lastLocation: LastLocationType): string => {
    if (lastLocation) return lastLocation.pathname;
    return "/";
  };

  return (
    <LinkStyled to={props.returnToHome ? "/" : getLastVisited(lastLocation)}>
      <ReturnButtonStyled>Return</ReturnButtonStyled>
    </LinkStyled>
  );
};

export default ReturnButton;
