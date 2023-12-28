
import React, { ReactNode } from 'react';
import { TextProps, TextStyle, ViewProps, ViewStyle } from 'react-native';

interface ComponentProps {
  style?: TextStyle | ViewStyle;
  className?: string | undefined;
  children?: ReactNode; 
}

export const styled = (Component: React.ComponentType<ViewProps | TextProps>, twc?: string|undefined, style?: TextStyle) =>{
   
  return ({ style: componentStyle, className, children, ...props }: ComponentProps): React.ReactElement => {
    const mergedStyle = [style, componentStyle];
    return (
      <Component className={`${twc} ${className}`} style={mergedStyle} {...props}>
        {children}
      </Component>
    );
  };

}; 
