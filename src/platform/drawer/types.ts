import { DrawerContentComponentProps } from '@react-navigation/drawer';


export interface IContainerProps {
  onPress?: (id: string) => void;
  onPressItem?: (id: string) => void;
}

export type CustomDrawerProps = DrawerContentComponentProps & IContainerProps 