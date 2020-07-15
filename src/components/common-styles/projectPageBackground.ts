import styled from "styled-components";
import { colors } from "../../data/colors";

const ProjectPageBackground = styled.div`
  position: absolute;
  background-color: ${colors.mainColor};
  z-index: -9999;
  right: 0;
  top: 0;
  left: 0;
  bottom: 80%;
`;

export default ProjectPageBackground;
