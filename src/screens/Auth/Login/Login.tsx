import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import { Alert, ImageBackground, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import ButtonMedium from "../../../shared/components/ButtonMedium/ButtonMedium";
import { auth } from "../../../utils/ActionsAuth/LoginAuth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { validateEmail } from "../../../utils/ActionsAuth/ValidateEmail";

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const handleChangeUser = (name: string, value: string) => {
    setNewUser({ ...newUser, [name]: value });
  };

  const handleLogin = async () => {
    if (newUser.email === "" || newUser.password === "") {
      return Alert.alert("Error", "Complete todos los campos");
    } else if (validateEmail(newUser.email) === false) {
      return Alert.alert("Error", "Credenciales no validas");
    }
    try {
      signInWithEmailAndPassword(auth, newUser.email, newUser.password)
        .then((userCredential) => {
          const user = userCredential.user;
          return Alert.alert("Bienvenido", `${user.email}`);
        })
        .catch((error) => {
          error && Alert.alert("Error", "Credenciales no validas");
        });
    } catch (error) {
      return Alert.alert("Error", "Error del servidor pruebe mas tarde");
    }
    setNewUser({ email: "", password: "" });
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
            onPress={handleLogin}
            title={"Ingresar"}
            color={colors.orange}
          />
          <ButtonMedium
            onPress={() =>
              Alert.alert(
                "Recuperar Contraseña",
                "Este apartador esta en construcción, disculpe las molestias"
              )
            }
            title={"Recuperar"}
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

export default Login;
