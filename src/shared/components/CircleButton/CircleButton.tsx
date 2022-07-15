import React, { memo } from "react";
import { Pressable, Image, View } from "react-native";
import { CircleButtonProps } from "./interfaces";
import { styles } from "./styles";
import { images } from "../../../constants/images";
import { moderateScale } from "../../helpers/scaling";

const CircleButton = ({
  type,
  size,
  style = {},
  onPress = () => {},
}: CircleButtonProps) => {
  return (
    <Pressable
      style={[
        styles.circleContainer,
        {
          borderRadius: size + 20,
        },
        style,
      ]}
      onPress={() => onPress()}
    >
      {type === "hearto" && (
        <View
          style={{
            width: moderateScale(size - 2, 1.5),
            height: moderateScale(size - 2, 1.5),
          }}
        >
          <Image
            source={images.hearto}
            style={{
              width: moderateScale(size - 2, 1.5),
              height: moderateScale(size - 2, 1.5),
            }}
            resizeMode="contain"
            resizeMethod="scale"
          />
        </View>
      )}
      {type === "heart" && (
        <View
          style={{
            width: moderateScale(size - 2, 1.5),
            height: moderateScale(size - 2, 1.5),
          }}
        >
          <Image
            source={images.heart}
            style={{
              width: moderateScale(size - 2, 1.5),
              height: moderateScale(size - 2, 1.5),
            }}
            resizeMode="contain"
            resizeMethod="scale"
          />
        </View>
      )}
      {type === "share" && (
        <View
          style={{
            width: moderateScale(size - 2, 1.5),
            height: moderateScale(size - 2, 1.5),
          }}
        >
          <Image
            source={images.share}
            style={{
              width: moderateScale(size - 2, 1.5),
              height: moderateScale(size - 2, 1.5),
            }}
            resizeMode="contain"
            resizeMethod="scale"
          />
        </View>
      )}
      {type === "key" && (
        <View
          style={{
            width: moderateScale(size - 2, 1.5),
            height: moderateScale(size - 2, 1.5),
          }}
        >
          <Image
            source={images.key}
            style={{
              width: moderateScale(size - 2, 1.5),
              height: moderateScale(size - 2, 1.5),
            }}
            resizeMode="contain"
            resizeMethod="scale"
          />
        </View>
      )}
      {type === "keyo" && (
        <View
          style={{
            width: moderateScale(size - 2, 1.5),
            height: moderateScale(size - 2, 1.5),
          }}
        >
          <Image
            source={images.key}
            style={{
              width: moderateScale(size - 2, 1.5),
              height: moderateScale(size - 2, 1.5),
            }}
            resizeMode="contain"
            resizeMethod="scale"
          />
        </View>
      )}
      {type === "label" && (
        <View
          style={{
            width: moderateScale(size - 2, 1.5),
            height: moderateScale(size - 2, 1.5),
          }}
        >
          <Image
            source={images.offer}
            style={{
              width: moderateScale(size - 2, 1.5),
              height: moderateScale(size - 2, 1.5),
            }}
            resizeMode="contain"
            resizeMethod="scale"
          />
        </View>
      )}
      {type === "check" && (
        <View
          style={{
            width: moderateScale(size - 2, 1.5),
            height: moderateScale(size - 2, 1.5),
          }}
        >
          <Image
            source={images.check}
            style={{
              width: moderateScale(size - 2, 1.5),
              height: moderateScale(size - 2, 1.5),
            }}
            resizeMode="contain"
            resizeMethod="scale"
          />
        </View>
      )}
      {type === "home" && (
        <View
          style={{
            width: moderateScale(size - 2, 1.5),
            height: moderateScale(size - 2, 1.5),
          }}
        >
          <Image
            source={images.menuIcon}
            style={{
              width: moderateScale(size - 2, 1.5),
              height: moderateScale(size - 2, 1.5),
            }}
            resizeMode="contain"
            resizeMethod="scale"
          />
        </View>
      )}
    </Pressable>
  );
};
export default memo(CircleButton);
