import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const ButtonPrincipal = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.button}>Ingresar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
        height:100,
        justifyContent:"center",
        position:"absolute",
        alignItems:"center"
    },
    button:{
        textAlign:"center"
    }
})
export default ButtonPrincipal
