import { GestureResponderEvent, ViewStyle } from 'react-native';

export interface IIconProps {
  color?: string
  size?: number
  focused?: boolean
  className?: string
  style?: ViewStyle,
  onPress?: (event: GestureResponderEvent) => void
}