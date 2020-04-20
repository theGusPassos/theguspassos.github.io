import Project from "../../../models/project";
import img from "./unity-state-machine.gif";
import UnityStateMachineInfo from "./UnityStateMachineInfo";

export const unityStateMachine: Project = {
  id: 2,
  name: "Unity State Machine",
  description:
    "Implementation of a finite state machine for NPC behaviour in Unity",
  tags: ["C#", "Unity"],
  imageAlt:
    "The gif shows a 2D scrolling game with two squares, a blue one representing" +
    " the player and a red one as the enemy. The enemy has a text showing 'Patrol State'" +
    " over his head and is walking from one side to the other. When the blue character (the player)" +
    " gets closer, the text change to 'Follow State' and the enemy starts following the player",
  image: img,
  projectInfo: UnityStateMachineInfo,
};
