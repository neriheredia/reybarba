import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { moderateScale, verticalModerateScale } from "../../helpers/scaling";

export const styles = StyleSheet.create({
    mainText: {
        textAlign:"center",
        fontSize: moderateScale(21, 1.1),
        color:"#4376D8",
        fontFamily: 'Nunito-Black'
    },
    descriptionText: {
        textAlign:"center",
        fontSize: moderateScale(13, 1.1),
        color: colors.black,
        opacity: .85,
        marginTop: verticalModerateScale(30, 1.1),
        fontFamily: 'Nunito-Regular'
    },
    gifWrapper: {
        height: moderateScale(150, 1.1),
        width: "100%",
        alignContent: 'center',
    },
    content: {
        top: moderateScale(-30, 1.1),
        alignSelf: 'center'
    },
    wrapper: {
        position: 'absolute',
        alignSelf: 'center',
        top: moderateScale(-30, 1.1),
    }
})