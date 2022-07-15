import { StyleProp, ViewStyle, ColorValue } from "react-native";

export interface CheckboxProps {
    onChangeValue?: Function,
    checkboxStyle?: StyleProp<ViewStyle> | undefined,
    iconColor?: number | ColorValue | undefined,
    size?: number
}