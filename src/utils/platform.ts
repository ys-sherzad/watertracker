import { Platform } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isAndroidVersion21AndAbove = Platform.Version >= 21;