import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const LandingPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>REY DE BARBA</Text>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://i.pinimg.com/564x/8c/f8/d8/8cf8d86df255f4c59ad949c40deb27c6.jpg",
        }}
      />
      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: 6,
          justifyContent: "center",
          padding: 10,
          margin: 20,
          width: 150,
        }}
        onPress={() => navigation.navigate("NavigationTab")}
      >
        <Text>INGRESAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 400,
    width: 400,
  },
  container: {
    alignItems: "center",
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    marginVertical: 40,
  },
});
