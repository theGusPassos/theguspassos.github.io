import React from "react";
import styled from "styled-components";
import { sectionWithText } from "../../../components/common-styles/styles";

const Info = styled.section`
  ${sectionWithText}
`;

const UnityStateMachineInfo = () => {
  return (
    <Info>
      <p>This is a sample in Unity with </p>
    </Info>
  );
};

export default UnityStateMachineInfo;
