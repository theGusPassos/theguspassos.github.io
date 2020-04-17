import React from "react";
import styled from "styled-components";
import { sectionWithText } from "../../../components/common/styles";

const Info = styled.section`
  ${sectionWithText}
`;

const PortfolioInfo = () => {
  return (
    <Info>
      <p>
        This website was designed and developed by me using React for coding and
        Figma for prototyping.
      </p>
      <p>
        The design is fully responsive and I'm always making changes for better
        accessibility as I go by learning.
      </p>
    </Info>
  );
};

export default PortfolioInfo;
