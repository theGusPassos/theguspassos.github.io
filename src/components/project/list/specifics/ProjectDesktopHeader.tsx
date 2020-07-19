import React from "react";
import styled from "styled-components";
import NameSection from "../../../common-components/NameSection";
import ContactIcons from "../../../contacts/ContactIcons";
import ButtonToInternalPage from "../../../common-components/ButtonToInternalPage";
import { device } from "../../../../data/device";

const Header = styled.header`
  display: flex;

  @media ${device.tablet} {
    max-width: 700px;
    margin: 20px auto;
  }

  @media ${device.desktop} {
    max-width: 1000px;
  }
`;

const LeftSide = styled.div`
  width: 60%;
`;

const Contacts = styled.div`
  width: 50%;
  margin: 20px 0;

  button:first-child {
    padding-left: 0;
    margin-left: 0;
  }
`;

const RightSide = styled.div`
  width: 40%;
`;

const BackToHomeButton = styled.div`
  width: 80%;
  float: right;
`;

const ProjectDesktopHeader = () => {
  return (
    <Header>
      <LeftSide>
        <NameSection></NameSection>
        <Contacts>
          <ContactIcons></ContactIcons>
        </Contacts>
      </LeftSide>
      <RightSide>
        <BackToHomeButton>
          <ButtonToInternalPage path="/">back to home</ButtonToInternalPage>
        </BackToHomeButton>
      </RightSide>
    </Header>
  );
};

export default ProjectDesktopHeader;
