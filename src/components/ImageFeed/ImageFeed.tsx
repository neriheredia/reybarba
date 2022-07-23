import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ImageFeedProps } from "./Interface";
import { moderateScale } from "../../shared/helpers/scaling";
import { colors } from "../../constants/colors";
import { TAB_BAR_HEIGHT } from '../../helpers/app';
import FloatingButtonsRight from "./FloatingButtonsRight";
import { images } from '../../constants/images';

const ImageFeed = ({ coment, height, url, width }: ImageFeedProps) => {
  const uri = url;

  return (
    <View style={{flex:1}}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ backgroundColor: colors.black, flex: 1, width, height: height && height - TAB_BAR_HEIGHT }}
      >
        <Image
          source={{ uri }}
          style={{
            borderTopLeftRadius: moderateScale(20),
            borderTopRightRadius: moderateScale(20),
            flex: 1,
            resizeMode: "cover",
          }}
        />
      </TouchableOpacity>
      <FloatingButtonsRight
        image={[{uri},images.barba]}
      />
    </View>
    
    
  );
};

export default ImageFeed;

const styles = StyleSheet.create({});
