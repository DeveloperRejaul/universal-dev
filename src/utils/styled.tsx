import React, { ReactNode } from "react";
import {TextStyle, ViewStyle } from "react-native";

interface ComponentProps {
    style?: TextStyle;
    children?: ReactNode;
}

interface styledProps {
    style?: TextStyle | ViewStyle;
    className?: string | null;
    Component: React.ComponentType<any>;
}

export const styled = ({ Component,className, style}:styledProps) => ({ style: componentStyle, children, ...props }: ComponentProps) => {
    const mergedStyle = [style, componentStyle];
    return <Component className={className} style={mergedStyle} {...props} > {children} </Component>
};