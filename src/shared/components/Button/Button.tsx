import React from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { colors } from "../../../constants/colors";
import { moderateScale } from "../../helpers/scaling";
import { ButtonProps } from "./interfaces";
import { styles } from "./styles";

const CustomButton = ({
  onPress,
  title,
  stylesCustom = {},
  primary = true,
  secondary = false,
  loading = false,
  disabled = false,
}: ButtonProps) => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable
        onPress={onPress}
        style={({ pressed }) => {
          return [
            styles.button,
            { opacity: disabled || pressed ? 0.5 : 1 },
            stylesCustom,
            {
              width: moderateScale(100, 3),
              backgroundColor: secondary
                ? colors.lightGray
                : primary
                ? colors.blue
                : "transparent",
            },
          ];
        }}
        disabled={disabled}
      >
        {loading ? (
          <ActivityIndicator color={colors.white} size="small" />
        ) : (
          <Text
            style={[
              styles.text,
              {
                color: secondary
                  ? colors.darkGray
                  : primary
                  ? colors.white
                  : colors.black,
              },
            ]}
          >
            {title}
          </Text>
        )}
      </Pressable>
    </View>
  );
};
export default CustomButton;
