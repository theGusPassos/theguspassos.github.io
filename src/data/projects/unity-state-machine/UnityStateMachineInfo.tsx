import React from "react";
import styled from "styled-components";
import { sectionWithText } from "../../../components/common-styles/styles";
import LinkToExternal from "../../../components/common-components/ButtonToExternalLink";

const Info = styled.section`
  ${sectionWithText}
`;

const UnityStateMachineInfo = () => {
  return (
    <Info>
      <p>
        This is a sample project in <strong>Unity</strong> that implements a{" "}
        <strong>Finite State Machine</strong> for character behaviour.
      </p>
      <LinkToExternal url="https://github.com/theGusPassos/unity-finite-state-machine">
        Check the source code here
      </LinkToExternal>
      <p>
        The <abbr title="Finite State Machine">FSM</abbr> is a design pattern
        used for various scenarios other than character behaviour, more on that
        can be read in Robert Nystrom's{" "}
        <a
          href="https://gameprogrammingpatterns.com/contents.html"
          target="_blak"
          rel="noopener noreferrer"
        >
          Game Programming Patterns book
        </a>
        .
      </p>
      <p>
        This implementation does use{" "}
        <abbr title="Object Oriented Programming">OOP</abbr> design but still
        allows the standard component design through customization and
        extension.
      </p>
      <p>
        The setup consists of States that defines character's behaviour,
        Transitions that defines how states change between themselves and the{" "}
        <abbr title="Finite State Machine">FSM</abbr> class that holds every
        State and sets every Transition for a given character.
      </p>
      <p>
        A Awareness interface is also included to receive input from external
        objects, in the demo it's used to get the distance between the non
        playable character and the player, when the player is close enough a
        transition is triggered. But it can also be used for other types of
        external events.
      </p>
      <p>
        The demo is pretty simple and easily extensible. Feel free to use it as
        you like =)
      </p>
    </Info>
  );
};

export default UnityStateMachineInfo;
