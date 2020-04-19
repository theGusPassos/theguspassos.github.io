export default interface DeviceInfo {
  deviceType: DeviceType;
}

export interface DeviceType {
  isTablet?: boolean;
  isDesktop?: boolean;
}
