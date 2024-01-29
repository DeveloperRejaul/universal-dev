import { GestureResponderEvent } from 'react-native';

export interface IIconProps {
  color?: string
  size?: number
  focused?: boolean
  className?: string
  onPress?: (event: GestureResponderEvent) => void
}
  