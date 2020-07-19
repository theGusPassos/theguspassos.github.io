import React from "react";
import styled from "styled-components";
import NameSection from "../../../common-components/NameSection";
import ContactIcons from "../../../contacts/ContactIcons";

const Header = styled.header`
  display: flex;
`;

const LeftSide = styled.div``;

const RightSide = styled.div``;

const ProjectDesktopHeader = () => {
  return (
    <Header>
      <LeftSide>
        <NameSection></NameSection>
        <ContactIcons></ContactIcons>
      </LeftSide>
      <RightSide>test</RightSide>
    </Header>
  );
};

export default ProjectDesktopHeader;
