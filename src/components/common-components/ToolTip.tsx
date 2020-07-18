import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import { colors } from "../../data/colors";

export const MainToolTip = styled(ReactTooltip)`
  background: ${colors.secondColor} !important;
`;

export const WhiteToolTip = styled(ReactTooltip)`
  background: #fff !important;
  color: ${colors.mainColor} !important;
`;
