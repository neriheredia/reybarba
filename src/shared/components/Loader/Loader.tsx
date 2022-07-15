import React, { useEffect, useRef } from "react";
import { View, Animated, Text, Modal } from "react-native";
import { colors } from "../../../constants/colors";
import { moderateScale, verticalModerateScale } from "../../helpers/scaling";
import { styles } from "./styles";

interface LoaderProps {
  show: boolean;
  title?: string;
  subtitle?: string;
  background?: string;
}
type tranlateTypes = "x" | "y";

const Loader = ({
  show = false,
  title,
  subtitle,
  background = "rgba(43, 43, 43,.8)",
}: LoaderProps) => {
  const animatedScale = useRef(new Animated.Value(1)).current;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animatedValue2 = useRef(new Animated.Value(0)).current;
  const animatedValue3 = useRef(new Animated.Value(0)).current;
  const animatedValue4 = useRef(new Animated.Value(0)).current;
  const animatedValue5 = useRef(new Animated.Value(0)).current;

  const calculateTranslateFor = (type: tranlateTypes) => {
    const snapshot = 50,
      radius = moderateScale(24, 1.1);

    const inputRange = [],
      outputRange = [];
    for (var i = 0; i <= snapshot; ++i) {
      const value = i / snapshot;
      const move =
        (type === "x"
          ? Math.sin(value * Math.PI * 2)
          : -Math.cos(value * Math.PI * 2)) * radius;
      inputRange.push(value);
      outputRange.push(move);
    }
    return { inputRange, outputRange };
  };
  const xValue = calculateTranslateFor("x");
  const yValue = calculateTranslateFor("y");

  useEffect(() => {
    if (show) {
      Animated.loop(
        Animated.sequence([
          Animated.parallel([
            Animated.timing(animatedValue, {
              toValue: 1,
              duration: 2000,
              useNativeDriver: true,
            }),
            Animated.timing(animatedValue2, {
              toValue: 1,
              delay: 100,
              duration: 2000,
              useNativeDriver: true,
            }),
            Animated.timing(animatedValue3, {
              toValue: 1,
              delay: 200,
              duration: 2000,
              useNativeDriver: true,
            }),
            Animated.timing(animatedValue4, {
              toValue: 1,
              duration: 2000,
              delay: 300,
              useNativeDriver: true,
            }),
            Animated.timing(animatedValue5, {
              toValue: 1,
              duration: 2000,
              delay: 400,
              useNativeDriver: true,
            }),
            Animated.timing(animatedScale, {
              toValue: 1.15,
              useNativeDriver: true,
              delay: 1800,
              duration: 325,
            }),
          ]),
          Animated.timing(animatedScale, {
            toValue: 1,
            useNativeDriver: true,
            duration: 125,
          }),
        ]),
        {
          iterations: 1000,
        }
      ).start();
    }
  }, [show]);

  return (
    // <Modal  transparent animationType='slide'>
    <View style={[styles.container, { backgroundColor: background }]}>
      <View
        style={{
          backgroundColor: title || subtitle ? colors.white : "transparent",
          paddingVertical: verticalModerateScale(52, 1.1),
          borderRadius: 20,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: -moderateScale(92, 1.1) / 2,
            width: moderateScale(92, 1.1),
            height: moderateScale(92, 1.1),
            borderRadius: moderateScale(92, 1.1),
            backgroundColor: title || subtitle ? colors.white : "transparent",
            alignSelf: "center",
          }}
        >
          <Animated.View
            style={[
              styles.ball,
              {
                transform: [
                  {
                    translateX: animatedValue.interpolate({
                      inputRange: xValue.inputRange,
                      outputRange: xValue.outputRange,
                    }),
                  },
                  {
                    translateY: animatedValue.interpolate({
                      inputRange: yValue.inputRange,
                      outputRange: yValue.outputRange,
                    }),
                  },
                  {
                    scale: animatedScale,
                  },
                ],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.ball,
              styles.ball2,
              {
                transform: [
                  {
                    translateX: animatedValue2.interpolate({
                      inputRange: xValue.inputRange,
                      outputRange: xValue.outputRange,
                    }),
                  },
                  {
                    translateY: animatedValue2.interpolate({
                      inputRange: yValue.inputRange,
                      outputRange: yValue.outputRange,
                    }),
                  },
                ],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.ball,
              styles.ball3,
              {
                transform: [
                  {
                    translateX: animatedValue3.interpolate({
                      inputRange: xValue.inputRange,
                      outputRange: xValue.outputRange,
                    }),
                  },
                  {
                    translateY: animatedValue3.interpolate({
                      inputRange: yValue.inputRange,
                      outputRange: yValue.outputRange,
                    }),
                  },
                ],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.ball,
              styles.ball4,
              {
                transform: [
                  {
                    translateX: animatedValue4.interpolate({
                      inputRange: xValue.inputRange,
                      outputRange: xValue.outputRange,
                    }),
                  },
                  {
                    translateY: animatedValue4.interpolate({
                      inputRange: yValue.inputRange,
                      outputRange: yValue.outputRange,
                    }),
                  },
                ],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.ball,
              styles.ball5,
              {
                transform: [
                  {
                    translateX: animatedValue5.interpolate({
                      inputRange: xValue.inputRange,
                      outputRange: xValue.outputRange,
                    }),
                  },
                  {
                    translateY: animatedValue5.interpolate({
                      inputRange: yValue.inputRange,
                      outputRange: yValue.outputRange,
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
        <View style={{ top: 10 }}>
          {title ? <Text style={[styles.title]}>{title}</Text> : null}
          {subtitle ? <Text style={styles.text}>{subtitle}</Text> : null}
        </View>
      </View>
    </View>
    // </Modal>
  );
};

export default Loader;
