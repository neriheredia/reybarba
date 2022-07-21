import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import { Alert, ImageBackground, StyleSheet, View,TextInput, Text,TouchableOpacity } from "react-native";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import ButtonMedium from "../../../shared/components/ButtonMedium/ButtonMedium";
import { auth } from "../../../utils/ActionsAuth/LoginAuth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { validateEmail } from "../../../utils/ActionsAuth/ValidateEmail";
import Icon from "react-native-vector-icons/AntDesign"

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
      <View style={styles.container} >
        <ImageBackground
          source={images.registerBackground}
          style={styles.imageContainer}
        >
        <View style={styles.opaco} ></View>   
      <View>
        <ImageBackground source={images.logo} style={styles.logo}/>
        </View>
        <View style={styles.inputContainer}>
          <View
            style={{
              flex: 80,
              justifyContent: "center",
              width: "100%",
            }}
          >
            
            
            <Text style={styles.text} > Email: </Text>
            <TextInput
              placeholder="Email"
              placeholderTextColor={"white"}
              onChangeText={(value) => handleChangeUser("email", value)}
              style={styles.input}
              value={newUser.email}
            />
            <Text style={styles.text} > Contraseña: </Text>         
            <TextInput
              placeholder="Password"
              placeholderTextColor={"white"}
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
              bottom:20
            }}
          >
            <ButtonMedium
              onPress={handleLogin}
              title={"Ingresar"}
              color={colors.orange}
            
            />
            <View style={styles.viewIcons} >
              <TouchableOpacity onPress={()=>(alert("te lleva a registrarte con google"))} >
                <Icon 
                  name="google" 
                  size={25}
                  style={styles.icon}
                  />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>(alert("te lleva a registrarte con facebook"))} >     
                  <Icon 
                  name="facebook-square" 
                  size={25}
                  style={styles.icon}
                  />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>(alert("te lleva a registrarte con insta"))} >     
                  <Icon 
                  name="instagram" 
                  size={25}
                  style={styles.icon}
                  />
              </TouchableOpacity>
            </View>      
            
            <Text style={styles.textRegister} > No tienes cuenta?
              <Text onPress={()=>(alert("hola"))}>  CLIK AQUI </Text>
            </Text>         
          </View>
        </View>
        </ImageBackground>
      </View>
     
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
  imageContainer:{
    flex: 1,
    justifyContent: "center",
    width: "100%",
    backgroundColor:"red"  
  },
  inputContainer: {
    alignContent: "center",
    flex: 1,
    justifyContent: "space-around",   
  },
  input: {
    width:"70%",
    heigh:"5%",
    alignContent:"center",
    borderBottomWidth:1,
    borderBottomColor:colors.buttonPrimary,
    marginVertical: 20,
    left:50,
    top:130,
    backgroundColor:"none",
    borderColor:"none",
    border:"none",
    color:colors.white,   
  },
  text:{
    color:"white",
    fontSize:18,
    alignSelf:"center",
    top:145    
  },
  logo:{
    flex:1,
    position:"absolute",
    alignSelf:"center",
    width:130,
    height:190,
    top:100,
    opacity:1
     
  },
  logoView:{
    flex:1,
    width:60,
    height:60,
    alignSelf:"center",
    backgroundColor:"red",
    top:150
  },
  textRegister:{
    color:"white",
    top:15
  },
  icon:{
    color:"white",
    padding:15
  },
  viewIcons:{
    alignSelf:"center",
    flexDirection:"row",
  },
  opaco:{
    flex:1,
    opacity:0.5,
    position:"absolute",
    top:0,
    bottom:0,
    left:0,
    right:0,
    backgroundColor:"black"
  }
 
});

export default Login;