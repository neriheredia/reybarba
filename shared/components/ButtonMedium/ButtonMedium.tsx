import React from 'react'
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { moderateScale, verticalModerateScale } from '../../helpers/scaling';
import { ButtonMediumProps } from './interfaces';
import { colors } from '../../../constants/colors';

const ButtonMedium = ({title, color = "blue", onPress=() => console.log("pressed"), disabled=false}: ButtonMediumProps) => {

    const colorButton = () => {
        if(color === "blue") return colors.buttonPrimary;
        if(color === "gray") return colors.buttonSecondary;
    }
    return (
        <Pressable onPress={onPress} disabled={disabled}>
            <View style={[styles.container, {backgroundColor: colorButton()},disabled && {backgroundColor: colors.buttonSecondary}]}>
                <Text style={[styles.button, styles.fontText]}>{title}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        height:verticalModerateScale(40, 1.1),
        width: moderateScale(130, 1.1),
        backgroundColor:colors.buttonPrimary,
        justifyContent:"center",
        borderRadius: 70,
        marginHorizontal: moderateScale(10),
    },
    button:{
        textAlign:"center",
        color: colors.white
    },
    fontText:{
        fontFamily:"Nunito-Bold",
        fontSize: moderateScale(14, 1.1)
    }
})

export default ButtonMedium
