import React from "react";
import styled from "styled-components";
import { sectionWithText } from "../../../components/common-styles/styles";
import LinkButton from "../../../components/common-components/LinkButton";
import {
  goToExternalPage,
  goToExternalPageOnKeyDown,
} from "../../../common-functions/goToExternalPage";

const Info = styled.section`
  ${sectionWithText}
`;

const PortfolioInfo = () => {
  return (
    <Info>
      <p>
        This website was designed and developed by me using{" "}
        <strong>React</strong>. The early prototypes were made with <b>Figma</b>
        .
      </p>
      <LinkButton
        onClick={() =>
          goToExternalPage(
            "https://github.com/theGusPassos/theguspassos.github.io"
          )
        }
        onKeyDown={(e) =>
          goToExternalPageOnKeyDown(
            e,
            "https://github.com/theGusPassos/theguspassos.github.io"
          )
        }
      >
        Check the source code here
      </LinkButton>
      <p>
        I'm using <strong>github pages</strong> to host the source code for
        free. The build process consists on the generation of a production build
        from the development branch and pushing the transpiled files into the
        upstream master branch. The files are then served as a github page.{" "}
        <a
          href="https://github.com/gitname/react-gh-pages"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here
        </a>{" "}
        is the step by step guide on how configure this build process.
      </p>
      <p>
        Since this is just a static page without any back-end server, the
        projects that populate the website are added manualy into a static list.
        Every project has its own component with the HTML info (like this one
        you're reading right now). It's definetly time consuming to add new
        projects into the system, however this process won't be so frequent.
        Besides, the component by project info page is a very flexible approach,
        which is great.
      </p>
      <p>
        I plan to make changes to the website by improving some responsivity and
        accessibility problems. I'm 100% open to feedback, so if you have any
        suggestion feel free to contact me =)
      </p>
    </Info>
  );
};

export default PortfolioInfo;
