import React from "react";
import styled from "styled-components";

const NameSectionStyled = styled.section`
  color: #fff;
  text-align: center;
  letter-spacing: 4px;
`;

const Name = styled.div`
  font-size: 1.8em;
`;

const Job = styled.div`
  font-size: 0.9em;
`;

const NameSection = () => {
  return (
    <NameSectionStyled>
      <Name>Gustavo Passos</Name>
      <Job>game and software developer</Job>
    </NameSectionStyled>
  );
};

export default NameSection;
