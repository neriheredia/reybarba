import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { PrimaryButtonProps } from "../../interfaces/Interfaces";
import { colors } from "../../../constants/colors";
import { moderateScale } from "../../helpers/scaling";

const PrimaryButton = ({
  title,
  color = colors.buttonPrimary,
  onPress,
}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity>
      <Text style={[styles.button, { backgroundColor: color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: colors.buttonPrimary,
    alignSelf: "center",
    width: "40%",
    textAlign: "center",
    borderRadius: 80,
    color: colors.white,
    fontSize: moderateScale(15),
  },
});

export default PrimaryButton;
