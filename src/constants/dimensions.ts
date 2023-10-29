export {
    responsiveHeight as rh,
    responsiveWidth as rw,
    responsiveFontSize as rf,
} from "react-native-responsive-dimensions";
import { Dimensions} from "react-native";

export const {width, fontScale, height,scale} = Dimensions.get("screen")
