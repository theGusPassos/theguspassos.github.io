export const deviceSize = {
  tablet: 500,
  desktop: 2560
};

export function isInDesktop() {
  return window.screen.width >= deviceSize.desktop;
}

export const device = {
  tablet: `(min-width: ${deviceSize.tablet}px)`,
  desktop: `(min-width: ${deviceSize.desktop}px)`
};
