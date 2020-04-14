import styled, { AnyStyledComponent } from "styled-components";

export const animationSpeed = 500;
const animationDistance = 200;

export enum AnimationDirection {
  FromUp,
  FromDown,
  FromRight,
  FromLeft,
}

export interface Transform {
  x: number;
  y: number;
}

export interface AnimatorProps {
  transform: Transform;
}

export const GetAnimator = (component: AnyStyledComponent) => {
  return styled(component)`
    &.animation-enter {
      transform: ${(props: AnimatorProps) =>
        GetTranslateFromTransform(props.transform)};
    }

    &.animation-enter-active {
      transform: translateX(0);
      transition-timing-function: ease-in-out;
      transition: transform ${animationSpeed}ms;
    }

    &.animation-exit {
      transform: translateX(0);
    }

    &.animation-exit-active {
      transform: ${(props: AnimatorProps) =>
        GetTranslateFromTransform(props.transform)};
      transition-timing-function: ease-in-out;
      transition: transform ${animationSpeed}ms;
    }
  `;
};

export const GetAnimationTransform = (
  animationDirection: AnimationDirection
): Transform => {
  switch (animationDirection) {
    case AnimationDirection.FromUp:
      return { x: 0, y: -animationDistance };

    case AnimationDirection.FromDown:
      return { x: 0, y: animationDistance };

    case AnimationDirection.FromLeft:
      return { x: -animationDistance, y: 0 };

    case AnimationDirection.FromRight:
      return { x: animationDistance, y: 0 };
  }
};

export const GetTranslateFromTransform = (transform: Transform): string => {
  return `translate(${transform.x}%, ${transform.y}%)`;
};
