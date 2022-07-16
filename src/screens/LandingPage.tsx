import React, { useEffect, useRef } from "react";
import {
  Animated,
  Button,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { images } from "../constants/images";
import { moderateScale } from "../shared/helpers/scaling";

export const LandingPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const fadeLogo = useRef(new Animated.Value(0)).current;
  const fadeButton = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeLogo, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  const fadeInBtn = () => {
    Animated.timing(fadeButton, {
      toValue: 1,
      duration: 8000,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeLogo, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      navigation.navigate("NavigationTab");
    }, 3000);
  };

  useEffect(() => fadeIn(), fadeInBtn(), [fadeIn, fadeInBtn]);

  return (
    <ImageBackground
      source={images.registerBackground}
      style={styles.container}
    >
      <View style={styles.capa}>
        <View style={styles.imageContainer}>
          <Animated.Image
            source={images.logo}
            style={[styles.logo, { opacity: fadeLogo }]}
          />
        </View>
        <Animated.View style={[styles.buttonRow, { opacity: fadeButton }]}>
          <Button title="INGRESAR" onPress={fadeOut} />
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  capa: {
    alignItems: "center",
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
    opacity: 0.6,
    width: "100%",
  },
  container: {
    alignItems: "center",
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    height: moderateScale(450, 1.2),
  },
  logo: {
    height: moderateScale(300, 1.2),
    width: moderateScale(210, 1.1),
    alignSelf: "center",
  },
  btn: {
    opacity: 1,
  },
  buttonRow: {
    borderRadius: 4,
    flexBasis: 100,
    justifyContent: "space-evenly",
    height: moderateScale(200, 1.2),
    marginVertical: 16,
    width: moderateScale(120, 1.2),
  },
});
