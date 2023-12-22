import React from "react";
import {TextStyle } from "react-native";

interface ComponentProps {
    style?: TextStyle; // Adjust this according to the specific Text component's props
}

export const styled = (Component: React.ComponentType<any>, style: TextStyle) => ({ style: componentStyle, ...props }: ComponentProps): React.ReactElement => {
    const mergedStyle = [style, componentStyle];
    return <Component style={mergedStyle} {...props}/>
};