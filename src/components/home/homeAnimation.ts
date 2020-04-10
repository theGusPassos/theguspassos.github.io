import {
  AnimationDirection,
  GetAnimationTransform,
} from "../../shared/animations";

const homePath = "/";
const homePathHash = `#${homePath}`;

const aboutPath = "/about";
const projectListPath = "/projects";
const projectPath = "/project";

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
    return GetAnimationTransform(AnimationDirection.FromRight);
  else if (location === projectListPath)
    return GetAnimationTransform(AnimationDirection.FromLeft);
  else return GetAnimationTransform(AnimationDirection.FromDown);
};
