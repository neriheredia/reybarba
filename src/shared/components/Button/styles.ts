import { StyleSheet } from 'react-native';
import { moderateScale, horizontalScale } from "../../helpers/scaling";

export const styles = StyleSheet.create({
    button: {
        // padding: 16,
        height: moderateScale(30,2), 
        marginHorizontal: moderateScale(40,1.1), 
        borderRadius: 32, 
        marginVertical: 16,
        alignItems:"center",
        justifyContent:"center"
    },
    text: {
        textAlign: "center",
        fontSize: moderateScale(13,1),
        fontFamily: 'Nunito-Bold',
        alignSelf:"center"
    }
})