import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import { images } from '../../constants/images';

const Register = () => {
    return (
        <ImageBackground source={images.registerBackground} style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    mode="outlined"
                    label="hola"
                />
                <TextInput
                    // style={styles.input}
                    mode="outlined"
                    label="hola"
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%"
    },
    inputContainer:{
        width:"70%",
        borderWidth:1,
        top:50
    },
    input:{
        backgroundColor:"red",
        opacity:.1,
        borderWidth:1
    }
})

export default Register
