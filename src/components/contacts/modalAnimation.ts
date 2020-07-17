import { css } from "styled-components";
import { animationSpeed } from "../../animations/animations";

export const modalAnimation = css`
  &.animation-enter {
    opacity: 0;
  }
  &.animation-enter-active {
    opacity: 1;
    transition: opacity ${animationSpeed}ms;
  }

  &.animation-exit {
    opacity: 1;
  }

  &.animation-exit-active {
    opacity: 0;
    transition: opacity ${animationSpeed}ms;
  }
`;
