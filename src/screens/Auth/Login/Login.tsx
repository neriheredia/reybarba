import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import { Alert, ImageBackground, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import ButtonMedium from "../../../shared/components/ButtonMedium/ButtonMedium";
import { auth, loginUser } from "../../../utils/ActionsAuth/LoginAuth";

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const handleChangeUser = (name: string, value: string) => {
    setNewUser({ ...newUser, [name]: value });
  };

  const handleLogin = () => {
    if (newUser.email === "" || newUser.password === "") {
      return Alert.alert("Error", "Complete todos los campos");
    } else {
      loginUser(newUser.email, newUser.password);
      setNewUser({ email: "", password: "" });
    }
  };

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("NavigationTab");
      }
    });
  }, []);

  return (
    <ImageBackground
      source={images.registerBackground}
      style={styles.container}
    >
      <View style={styles.inputContainer}>
        <TextInput
          label="Email"
          onChangeText={(value) => handleChangeUser("email", value)}
          style={styles.input}
          value={newUser.email}
        />
        <TextInput
          label="Password"
          onChangeText={(value) => handleChangeUser("password", value)}
          style={styles.input}
          secureTextEntry
          value={newUser.password}
        />
        <ButtonMedium
          onPress={handleLogin}
          title={"Ingresar"}
          color={colors.orange}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: "center",
    marginTop: 20,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  inputContainer: {
    alignContent: "center",
    flex: 1,
    justifyContent: "center",
    width: "70%",
  },
  input: {
    borderWidth: 1,
    marginVertical: 20,
  },
});

export default Login;
