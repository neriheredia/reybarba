import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { ImageFeedProps } from "./Interface";

const ImageFeed = ({ coment, height, url, width }: ImageFeedProps) => {
  const uri = url;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ backgroundColor: "#000", flex: 1, height, width }}
    >
      <Image
        source={{ uri }}
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
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
