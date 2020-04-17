import styled from "styled-components";
import { device } from "../../shared/device";
import { colors } from "../../shared/colors";

const LinkButton = styled.button`
  color: ${colors.mainColor};
  background: ${colors.mainBackgroundColor};
  font-size: 1.2em;
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
