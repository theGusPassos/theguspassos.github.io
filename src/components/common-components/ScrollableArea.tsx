import styled from "styled-components";
import { device } from "../../data/device";
import { maxWidthInDesktop } from "../../data/sizes";

export const ScrollableArea = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.desktop} {
    max-width: ${maxWidthInDesktop}px;
    width: 90%;
    margin: auto;
  }
`;
