import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ImageFeedProps } from "./Interface";
import { moderateScale } from "../../shared/helpers/scaling";
import { colors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/ActionsAuth/RegisterAuth";
import { singOutUser } from "../../utils/ActionsAuth/SingOut";

const ImageFeed = ({ coment, height, url, width }: ImageFeedProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [currentUser, setCurrentUser] = useState(false);
  const uri = url;

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        return setCurrentUser(true);
      } else {
        return setCurrentUser(false);
      }
    });
  }, []);

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
      {currentUser && (
        <TouchableOpacity onPress={() => singOutUser()} style={styles.logout}>
          <Text>LOGAUT</Text>
        </TouchableOpacity>
      )}
      {currentUser ? (
        <TouchableOpacity onPress={() => {}} style={styles.avatar}>
          <Text>NAHUEL</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.avatar}
        >
          <Text>USER</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default ImageFeed;

const styles = StyleSheet.create({
  avatar: {
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 100,
    height: 50,
    justifyContent: "center",
    marginTop: 40,
    marginRight: 40,
    position: "absolute",
    bottom: 100,
    right: 0,
    width: 50,
  },
  logout: {
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 100,
    height: 50,
    justifyContent: "center",
    marginTop: 40,
    marginRight: 40,
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
  },
});
