import { css } from "styled-components";
import { animationSpeed } from "../../animations/animations";

export const modalAnimation = css`
  &.animation-enter {
    opacity: 0;

    > div:first-child {
      transform: translate(0, 100%);
    }
  }

  &.animation-enter-active {
    opacity: 1;
    transition: opacity ${animationSpeed}ms;

    > div:first-child {
      transform: translate(0, 0);
      transition-timing-function: ease-in-out;
      transition: transform ${animationSpeed}ms;
    }
  }

  &.animation-exit {
    opacity: 1;

    > div:first-child {
      transform: translate(0, 0);
    }
  }

  &.animation-exit-active {
    opacity: 0;
    transition: opacity ${animationSpeed}ms;

    > div:first-child {
      transform: translate(0, 100%);
      transition-timing-function: ease-in-out;
      transition: transform ${animationSpeed}ms;
    }
  }
`;
