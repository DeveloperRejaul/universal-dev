import { Platform } from 'react-native';
const breakpoints = {
    base: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
};

export const platform = (p1:any, p2:any)=>{
    if(Platform.OS === "web"){
        if(Array.isArray(p1)){
            let value;
            if(window.outerWidth <= breakpoints.sm ) {
             return value = p1[0]
            }
            else if(window.outerWidth <= breakpoints.md ) {
             return value = p1[1] ?? p1[0]
            }
            else if(window.outerWidth <= breakpoints.lg ) {
                return value = p1[2] ?? p1[1] ?? p1[0]
            }
            else if(window.outerWidth <= breakpoints.xl || window.outerWidth >= breakpoints.xl  ) {
                return value = p1[3] ?? p1[2] ?? p1[1] ?? p1[0]
            }
            return value
        }
      return p1
    }
    return p2
}