import React from "react";
import styled from "styled-components";
import { sectionWithText } from "../../../components/common-styles/sectionWithText";
import ButtonToExternalLink from "../../../components/common-components/ButtonToExternalLink";

const Info = styled.section`
  ${sectionWithText};
`;

const BlogInfo = () => {
  return (
    <Info>
      <p>
        Developed using <strong>Vue.js</strong> and served as a github page just
        like this website.
      </p>

      <ButtonToExternalLink url="https://theguspassos.github.io/blog">
        Check the blog here
      </ButtonToExternalLink>

      <ButtonToExternalLink url="https://github.com/theGusPassos/blog">
        Check the source code here
      </ButtonToExternalLink>

      <p>
        Since there's no back-end for this website I needed a different approach
        to storing post data. This very website has a approach for this
        situation where every project of mine is stored in a object that
        references a React component, when the user go to a project page the
        component is rendered. The problem with this approach is that everything
        is transpiled in build time, creating a bigger package than it could
        have been. Since posts might have way more content than my projects, I
        couldn't rely on the same approach.
      </p>
      <p>
        In the Academic Developer webiste, posts are stored in .md files that
        are only fetched from the server when the user opens its post page. A
        list still holds data from posts, however the post actual data and
        images are only fetched when necessary.
      </p>
      <p>
        After fetching an .md file, there's a process where image references are
        updated to link the server url. The .md file is then rendered as an
        HTML.
      </p>
      <p>
        Just like my portfolio site, the AcaDev has some issues when creating
        new posts, however I plan to fix it as I go along writing new resources.
      </p>
    </Info>
  );
};

export default BlogInfo;
