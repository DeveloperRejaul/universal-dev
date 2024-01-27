import { Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const percentageCalculation = (max: number, val: number) => max * (val / 100);

const fontCalculation = (height: number, width: number, val: number) => {
  const widthDimension = height > width ? width : height;
  const aspectRatioBasedHeight = (16 / 9) * widthDimension;
  return percentageCalculation(
    Math.sqrt(
      Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2)
    ),
    val
  );
};
export const rh = (h: number) => {
  return percentageCalculation(height, h);
};

export const rw = (w: number) => {
  return percentageCalculation(width, w);
};

export const rf = (f: number) => {
  return fontCalculation(height, width, f);
};