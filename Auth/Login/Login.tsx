import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TextInput } from 'react-native';
import { images } from '../../constants/images';
import ButtonPrincipal from '../../components/ButtonPrincipal/ButtonPrrincipal';
import ButtonMedium from '../../components/ButtonMedium/ButtonMedium';
import { StatusBar } from 'expo-status-bar';
import { moderateScale } from '../../shared/helpers/scaling';
import { colors } from '../../constants/colors';
import {useState} from 'react';

const Login = () => {

    const [showInputEmail, setShowInputEmail] = useState(false);
    const [showInputPass, setShowInputPass] = useState(false);
    const [showIngresButton, setShowIngreButton] = useState(true);
    const [showFooter, setShowFooter] = useState(true);
    console.log("holas")
    return (
       
            <ImageBackground
                source={images.loginBackground}
                style={styles.container}
            > 
                <View style={styles.backgroundOpacity}/>
                <StatusBar hidden />
                <ScrollView>
                    <View style={styles.imageContainer}>
                        <Image
                            source={images.logo}
                            style={styles.logo}
                        />
                    </View>
                    
                    {
                        showIngresButton &&
                        <View style={styles.buttonContainer}>
                            <ButtonMedium
                                title={"Ingresar"}
                                onPress={() => {
                                    setShowInputEmail(true);
                                    setShowIngreButton(false);
                                    console.log("hola perrro")
                                }}
                                color={colors.orange}
                            /> 
                        </View>
                    }
                    {
                        showInputEmail &&
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
                                        setShowInputEmail(!showInputEmail)
                                        setShowInputPass(true);
                                    }}
                                /> 
                            </View>
                        </View>
                    }
                    {
                        showInputPass &&
                        <View>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Contraseña"
                                />
                            </View>
                            <View style={styles.buttonContainer}>
                                <ButtonMedium
                                    title={"Listo"}
                                    onPress={() => {
                                        setShowInputPass(false);
                                        setShowFooter(false)
                                    }}
                                /> 
                            </View>
                        </View>
                    }
                    {
                        showFooter &&
                        <View style={styles.textsContainer}>
                            <Text style={styles.text}>¿Primera vez?</Text>
                            <Text style={styles.text}>¡Registrate gratis haciendo click aca!</Text>
                        </View>
                    }
                </ScrollView>
            </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        width:"100%",
        justifyContent:"space-around",
    },
    backgroundOpacity:{
        flex:1,
        backgroundColor:"black",
        position:"absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        opacity:.3,
    },
    buttonContainer:{
        alignSelf:"center",
        // top: moderateScale(10,1.1),
        // justifyContent:"center",
        // backgroundColor:"red",
        marginTop:20
    },
    imageContainer:{
        flex:1,
        justifyContent:"center",
        height:moderateScale(450,1.2),
    },
    logo:{
        // backgroundColor:"red",
        height:moderateScale(300,1.2),
        width:moderateScale(210,1.1),
        alignSelf:"center",
        opacity:1,
        // bottom:70
    },
    textsContainer:{
        marginVertical:moderateScale(15,1),
        alignSelf:"center"
    },
    text:{
        color: colors.white,
        textAlign:"center",
        fontSize:moderateScale(13,1)
    },
    inputContainer:{
        width:"60%",
        alignSelf:"center",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    input:{
        backgroundColor:colors.white,
        width:"100%",
        height:moderateScale(30,1.1),
        borderRadius:7,
        textAlign:"center"
    },
    buttonArrow:{
        width:moderateScale(40,1.1),
        height:moderateScale(40,1.1),
        backgroundColor:colors.buttonPrimary,
        borderRadius:100,
        left:moderateScale(10,4.4)
    }
})
export default Login
