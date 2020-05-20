import styled from "styled-components";
import { TransitionGroup } from "react-transition-group";
import { maxWidthStyle } from "./maxWidthStyle";

const TransitionGroupStyled = styled(TransitionGroup)`
  height: 100%;
  position: relative;
  overflow: hidden;

  ${maxWidthStyle};
`;

export default TransitionGroupStyled;
