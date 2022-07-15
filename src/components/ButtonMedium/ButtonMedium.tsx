import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { ButtonMediumProps } from "./interfaces";
import {
  moderateScale,
  verticalModerateScale,
  verticalScale,
} from "../../shared/helpers/scaling";
import { colors } from "../../constants/colors";

const ButtonMedium = ({
  title,
  color = colors.buttonPrimary,
  onPress = () => console.log("pressed"),
  disabled = false,
  transparent = false,
}: ButtonMediumProps) => {
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <View
        style={[
          styles.container,
          { backgroundColor: color },
          disabled && { backgroundColor: colors.buttonSecondary },
        ]}
      >
        <Text style={[styles.button, styles.fontText]}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalModerateScale(40, 1.1),
    width: moderateScale(230, 1.8),
    backgroundColor: colors.black,
    justifyContent: "center",
    marginHorizontal: moderateScale(10),
    borderRadius: 100,
    borderColor: colors.orange,
  },
  button: {
    textAlign: "center",
    color: colors.white,
  },
  fontText: {
    fontSize: moderateScale(14, 1.1),
  },
  buttonOpacity: {
    backgroundColor: "black",
    height: verticalModerateScale(40, 1.1),
    width: moderateScale(230, 1.8),
    position: "absolute",
  },
});

export default ButtonMedium;
