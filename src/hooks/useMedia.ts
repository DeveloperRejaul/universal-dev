import { useWindowDimensions } from 'react-native';
import { BreakPointsType,breakPoints} from '../constants/breakPoints';

type Media = {
  base: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xl2: boolean;
};
  
export const useMedia = () => {
  const {width} = useWindowDimensions();
  const media: Partial<Media> = {};
  for (const key in breakPoints) {
    if (Object.prototype.hasOwnProperty.call(breakPoints, key)) {
      const breakpointKey = key.toLowerCase() as keyof Media;
      media[breakpointKey] = breakPoints[key as keyof BreakPointsType] < width;
    }
  }

  return media;
};