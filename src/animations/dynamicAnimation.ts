import { AnimationDirection, GetAnimationTransform } from "./animations";

export interface LocationAnimationMap {
  [location: string]: AnimationDirection;
}

export const getAnimationBasedOnLocation = (
  map: LocationAnimationMap,
  currentLocation: string
) => {
  const animation = map[currentLocation] ?? map["default"];
  return GetAnimationTransform(animation);
};
