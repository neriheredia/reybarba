import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const Feed = () => {
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
