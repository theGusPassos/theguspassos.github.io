export const getLocationToAnim = (
  currentLocation: string,
  lastLocation: string | undefined,
  pageHashLocation: string
) => {
  return currentLocation === pageHashLocation
    ? lastLocation ?? ""
    : currentLocation.replace("#", "");
};
