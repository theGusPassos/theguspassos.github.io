import styled, { AnyStyledComponent } from "styled-components";

export const animationSpeed = 400;

export enum AnimationDirection {
  FromUp,
  FromDown,
  FromRight,
  FromLeft,
}

export const AnimationStyle = (
  component: AnyStyledComponent,
  animationDirection: AnimationDirection
) => styled(component)`
  &.animation-enter {
    transform: ${GetTranslateFromTransform(
      GetEnterStartPosition(animationDirection)
    )};
  }

  &.animation-enter-active {
    transform: translate(0, 0);
    transition-timing-function: ease-in-out;
    transition: transform ${animationSpeed}ms;
  }

  &.animation-exit {
    transform: translate(0, 0);
  }

  &.animation-exit-active {
    transform: ${GetTranslateFromTransform(
      GetEnterStartPosition(animationDirection)
    )};
    transition-timing-function: ease-in-out;
    transition: transform ${animationSpeed}ms;
  }
`;

const GetEnterStartPosition = (
  animationDirection: AnimationDirection
): Transform => {
  switch (animationDirection) {
    case AnimationDirection.FromUp:
      return { x: 0, y: -100 };

    case AnimationDirection.FromDown:
      return { x: 0, y: 100 };

    case AnimationDirection.FromLeft:
      return { x: -100, y: 0 };

    case AnimationDirection.FromRight:
      return { x: 100, y: 0 };
  }
};

const GetTranslateFromTransform = (transform: Transform): string => {
  return `translate(${transform.x}%, ${transform.y}%)`;
};

interface Transform {
  x: number;
  y: number;
}
