export const deviceSize = {
  tablet: 500,
  desktop: 920,
};

export function isInDesktop(currentWidth: number) {
  return currentWidth > deviceSize.desktop;
}

export function isInTablet(currentWidth: number) {
  return currentWidth > deviceSize.tablet;
}

export const device = {
  tablet: `(min-width: ${deviceSize.tablet}px)`,
  desktop: `(min-width: ${deviceSize.desktop}px)`,
};
