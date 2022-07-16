import { StyleSheet } from 'react-native';
import { moderateScale, horizontalScale, verticalModerateScale } from "../../helpers/scaling";

export const styles = StyleSheet.create({
    header: {
        alignItems: 'center', 
        width: '100%',
        paddingVertical:0,
    },
    text: {
        fontSize: moderateScale(18,1.1),
        paddingRight: 0,
        color: 'black',
        // fontFamily:"Nunito-SemiBold",
    }
})