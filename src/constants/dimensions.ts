import { useWindowDimensions} from "react-native";

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
}
export const rh = (h: number) => {
 const {height} = useWindowDimensions()
  return percentageCalculation(height, h);
};

export const rw = (w: number) => {
  const { width } = useWindowDimensions();
  return percentageCalculation(width, w);
};

export const rf = (f: number) => {
  const { height, width } = useWindowDimensions();
  return fontCalculation(height, width, f);
};