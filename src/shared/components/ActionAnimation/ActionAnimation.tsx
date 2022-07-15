import React, { useEffect, useRef, useState } from "react";
import { View, Animated } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import { colors } from "../../../constants/colors";

// USO:

// Utilizar este componente en el mismo lugar que el boton de "like", el boton tendrá la lógica del cambio
// de estado de las publicaciones para ponerlas como "like" o "dislike"
// Ademas tendrá que haber un estado local a la publicación que va a indicar que accion se esta haciendo
// like, dislike o nada ('like' | 'dislike' | '').
// Este componente recibe como parámetro ese estado y el set de ese estado.

interface LikeDislikeProps {
  action: "like" | "dislike" | "";
  setAction: Function;
}

const ActionAnimation = ({
  action,
  setAction = () => {},
}: LikeDislikeProps) => {
  const [showLike, setShowLike] = useState(false);
  const [showNotLike, setShowNotLike] = useState(false);

  const animatedScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (action === "like") {
      setShowLike(true);
      setTimeout(() => {
        setShowLike(false);
        animatedScale.setValue(0);
      }, 800);
      setAction("");
    }
    if (action === "dislike") {
      setShowNotLike(true);
      setTimeout(() => {
        setShowNotLike(false);
        animatedScale.setValue(0);
      }, 800);
      setAction("");
    }
  }, [action]);

  useEffect(() => {
    if (showLike || showNotLike) {
      Animated.timing(animatedScale, {
        toValue: 1,
        useNativeDriver: true,
        duration: showNotLike ? 900 : 800,
      }).start();
    }
  }, [showLike, showNotLike]);

  return (
    <View style={{ position: "absolute", width: "100%", height: "90%" }}>
      {showLike && (
        <Animated.View
          style={{
            transform: [{ scale: animatedScale }],
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            elevation: 5,
          }}
        >
          <Icon name="heart" color={colors.blue} size={64} />
        </Animated.View>
      )}
      {showNotLike && (
        <Animated.View
          style={{
            transform: [
              {
                scale: animatedScale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0],
                }),
              },
            ],
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            elevation: 5,
          }}
        >
          <Icon2 name="heart-broken" color={colors.blue} size={64} />
        </Animated.View>
      )}
    </View>
  );
};

export default ActionAnimation;
