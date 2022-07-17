import React, { useLayoutEffect, useState } from "react";
import { Alert, ImageBackground, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TextInput } from "react-native-paper";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import ButtonMedium from "../../../shared/components/ButtonMedium/ButtonMedium";
import { auth, registerNewUser } from "../../../utils/ActionsAuth/RegisterAuth";
import { onAuthStateChanged } from "firebase/auth";
import { validateEmail } from "../../../utils/ActionsAuth/ValidateEmail";

const Register = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const handleChangeUser = (name: string, value: string) => {
    setNewUser({ ...newUser, [name]: value });
  };

  const handleRegister = () => {
    if (newUser.email === "" || newUser.password === "") {
      return Alert.alert("Error", "Complete todos los campos");
    } else if (validateEmail(newUser.email) === false) {
      return Alert.alert("Error", "Email no valido");
    } else if (
      newUser?.password.length <= 6 ||
      newUser?.password.length >= 15
    ) {
      return Alert.alert(
        "Error",
        "Password debe ser mayor a 6 y menor de 15 caracteres"
      );
    } else {
      registerNewUser(newUser.email, newUser.password);
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
        <View
          style={{
            flex: 80,
            justifyContent: "center",
            width: "100%",
          }}
        >
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
        </View>
        <View
          style={{
            flex: 20,
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <ButtonMedium
            onPress={handleRegister}
            title={"Registrame"}
            color={colors.orange}
          />
          <ButtonMedium
            onPress={() => navigation.navigate("Login")}
            title={"Logearte"}
            color={colors.orange}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  buttonStyles: {
    alignSelf: "center",
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  inputContainer: {
    alignContent: "center",
    flex: 1,
    justifyContent: "space-around",
  },
  input: {
    borderWidth: 1,
    marginVertical: 20,
  },
});

export default Register;
