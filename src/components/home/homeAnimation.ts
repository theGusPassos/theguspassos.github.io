import {
  GetEnterStartPosition,
  AnimationDirection,
} from "../../shared/animations";

const homePath = "/";
const homePathHash = `#${homePath}`;

const aboutPath = "/about";

export const getCurrentAnimation = (
  currentLocation: string,
  lastLocation: string | undefined
) => {
  return currentLocation == homePathHash
    ? getAnimationBasedOnLocation(lastLocation)
    : getAnimationBasedOnLocation(currentLocation.replace("#", ""));
};

const getAnimationBasedOnLocation = (location: string | undefined) => {
  if (location == aboutPath)
    return GetEnterStartPosition(AnimationDirection.FromRight);
  else return GetEnterStartPosition(AnimationDirection.FromUp);
};
