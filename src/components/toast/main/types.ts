import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import {ToastContainer} from './Container';

export type ToastType = Pick<
ToastContainer,
'show' | 'update' | 'hide' | 'hideAll' | 'isOpen'
>;
export type PropsWithChildren = Props & {
  children: React.ReactNode;
}



export interface ToastOptions {
  id?: string;
  icon?: JSX.Element;
  type: 'normal' | 'success' | 'danger' | 'warning';
  duration?: number;
  placement?: 'top' |'top-left' | 'top-right'| 'bottom'|'bottom-left'|'bottom-right' | 'center'
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  animationDuration?: number;
  animationType?: 'slide-in' | 'zoom-in';
  successIcon?: JSX.Element;
  dangerIcon?: JSX.Element;
  warningIcon?: JSX.Element;
  successColor?: string;
  dangerColor?: string;
  warningColor?: string;
  normalColor?: string;
  onPress?(id: string): void;
  onClose?(): void;
  data?: unknown;
  swipeEnabled?: boolean;
}
  
export interface ToastProps extends ToastOptions {
  id: string;
  onDestroy(): void;
  message: string | JSX.Element;
  open: boolean;
  renderToast?(toast: ToastProps): JSX.Element;
  renderType?: { [type: string]: (toast: ToastProps) => JSX.Element };
  onHide(): void;
}
  


export interface Props extends ToastOptions {
  renderToast?(toast: ToastProps): JSX.Element;
  renderType?: { [type: string]: (toast: ToastProps) => JSX.Element };
  offset?: number;
  offsetTop?: number;
  offsetBottom?: number;
  swipeEnabled?: boolean;
}
  
export interface State {
  toasts: Array<ToastProps>;
}  

