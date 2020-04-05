import {
  GetEnterStartPosition,
  AnimationDirection,
} from "../../shared/animations";

const homePath = "/";
const homePathHash = `#${homePath}`;

const aboutPath = "/about";
const projectListPath = "/projects";

export const getCurrentAnimation = (
  currentLocation: string,
  lastLocation: string | undefined
) => {
  return currentLocation === homePathHash
    ? getAnimationBasedOnLocation(lastLocation)
    : getAnimationBasedOnLocation(currentLocation.replace("#", ""));
};

const getAnimationBasedOnLocation = (location: string | undefined) => {
  if (location === aboutPath)
    return GetEnterStartPosition(AnimationDirection.FromRight);
  else if (location === projectListPath)
    return GetEnterStartPosition(AnimationDirection.FromLeft);
  else return GetEnterStartPosition(AnimationDirection.FromUp);
};
