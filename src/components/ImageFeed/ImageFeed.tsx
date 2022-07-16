import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { ImageFeedProps } from "./Interface";
import { moderateScale } from "../../shared/helpers/scaling";
import { colors } from "../../constants/colors";

const ImageFeed = ({ coment, height, url, width }: ImageFeedProps) => {
  const uri = url;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ backgroundColor: colors.black, flex: 1, height, width }}
    >
      <Image
        source={{ uri }}
        style={{
          borderTopLeftRadius: moderateScale(20),
          borderTopRightRadius: moderateScale(20),
          flex: 1,
          height,
          resizeMode: "cover",
          width,
        }}
      />
    </TouchableOpacity>
  );
};

export default ImageFeed;

const styles = StyleSheet.create({});
