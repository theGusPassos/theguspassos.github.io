export const deviceSize = {
  tablet: 500,
  desktop: 1900,
};

export function isInDesktop(currentWidth: number) {
  return currentWidth >= deviceSize.desktop;
}

export const device = {
  tablet: `(min-width: ${deviceSize.tablet}px)`,
  desktop: `(min-width: ${deviceSize.desktop}px)`,
};
