import { AnimationDirection, GetAnimationTransform } from "./animations";

interface LocationAnimationMap {
  [location: string]: AnimationDirection;
}

export const getAnimationBasedOnLocation = (
  map: LocationAnimationMap,
  currentLocation: string
) => {
  const animation = map[currentLocation];
  console.log(animation);
};
