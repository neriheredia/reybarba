import { Platform } from "react-native";
import { moderateScale } from "../shared/helpers/scaling";

export const TAB_BAR_HEIGHT = moderateScale(Platform.OS === "ios" ? 70 : 50 ,1.5);

export const addPointsInText = (number: string | number) => {
    if (!number) return 0;

    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
};