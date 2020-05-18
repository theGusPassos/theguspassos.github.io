import styled from "styled-components";
import { device } from "../../data/device";
import { colors } from "../../data/colors";

const LinkButton = styled.button`
  color: ${colors.mainColor};
  background: ${colors.mainBackgroundColor};
  border: none;
  padding: 4% 0;
  width: 100%;

  :focus,
  :hover {
    cursor: pointer;
    outline: none;
    text-decoration: underline;
  }

  @media ${device.tablet} {
    font-size: 1.4em;
  }
`;

export default LinkButton;
