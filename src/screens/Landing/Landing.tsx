import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { images } from "../../constants/images";
import ButtonMedium from "../../shared/components/ButtonMedium/ButtonMedium";
import { StatusBar } from "expo-status-bar";
import { moderateScale } from "../../shared/helpers/scaling";
import { colors } from "../../constants/colors";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";
import { Animated } from "react-native";
import { useRef } from "react";
import { useEffect } from "react";

const LandingPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [showInputEmail, setShowInputEmail] = useState(false);
  const [showInputPass, setShowInputPass] = useState(false);
  const [showIngresButton, setShowIngreButton] = useState(true);

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
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeLogo, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start();
    Animated.timing(fadeButton, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      navigation.navigate("NavigationTab");
    }, 3000);
  };

  useEffect(() => {
    fadeIn(), fadeInBtn();
  }, [fadeIn, fadeInBtn]);

  return (
    <ImageBackground source={images.loginBackground} style={styles.container}>
      <View style={styles.backgroundOpacity} />
      <StatusBar hidden />
      <ScrollView>
        <View style={styles.imageContainer}>
          <Animated.Image
            source={images.logo}
            style={[styles.logo, { opacity: fadeLogo }]}
          />
        </View>

        {showIngresButton && (
          <View style={styles.buttonContainer}>
            <Animated.View style={[{ opacity: fadeButton }]}>
              <ButtonMedium
                title={"Ingresar"}
                onPress={fadeOut}
                color={colors.orange}
              />
            </Animated.View>
          </View>
        )}
        {showInputEmail && (
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email o Numero de Telefono..."
              />
            </View>
            <View style={styles.buttonContainer}>
              <ButtonMedium
                title={"Siguiente"}
                onPress={() => {
                  setShowInputEmail(!showInputEmail);
                  setShowInputPass(true);
                }}
              />
            </View>
          </View>
        )}
        {showInputPass && (
          <View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Contraseña" />
            </View>
            <View style={styles.buttonContainer}>
              <ButtonMedium
                title={"Listo"}
                onPress={() => {
                  setShowInputPass(false);
                }}
              />
            </View>
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    width: "100%",
  },
  backgroundOpacity: {
    flex: 1,
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.6,
  },
  buttonContainer: {
    alignSelf: "center",
    // top: moderateScale(10,1.1),
    // justifyContent:"center",
    // backgroundColor:"red",
    marginTop: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    height: moderateScale(450, 1.2),
  },
  logo: {
    // backgroundColor:"red",
    height: moderateScale(300, 1.2),
    width: moderateScale(210, 1.1),
    alignSelf: "center",
    opacity: 1,
    // bottom:70
  },
  textsContainer: {
    marginVertical: moderateScale(15, 1),
    alignSelf: "center",
  },
  text: {
    color: colors.white,
    textAlign: "center",
    fontSize: moderateScale(13, 1),
  },
  inputContainer: {
    width: "60%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: colors.white,
    width: "100%",
    height: moderateScale(30, 1.1),
    borderRadius: 7,
    textAlign: "center",
  },
  buttonArrow: {
    width: moderateScale(40, 1.1),
    height: moderateScale(40, 1.1),
    backgroundColor: colors.buttonPrimary,
    borderRadius: 100,
    left: moderateScale(10, 4.4),
  },
});
export default LandingPage;
