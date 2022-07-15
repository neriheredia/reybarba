import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { moderateScale } from "../../helpers/scaling";

export const styles = StyleSheet.create({
    container: {
        position: "absolute", 
        flex: 1, 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        zIndex: 99999,
        justifyContent: "center", 
        alignItems: "center",
        height:"100%",
        width:"100%",
    },
    image: {
        width: 68, 
        height: 68, 
        borderRadius: 16, 
        bottom: 32
    },
    text: {
        color: colors.darkGray,
        fontFamily: "Nunito-Bold",
        fontSize: moderateScale(16,1.1),
        textAlign: "center",
        width: "65%",
        alignSelf: "center",
        marginTop: 16
    },
    title: {
        color: colors.blue,
        fontFamily: "Nunito-ExtraBold",
        fontSize: moderateScale(18,1.1),
        textAlign: "center"
    },
    ball: {
        position: "absolute", 
        backgroundColor: colors.blue, 
        width: 12, 
        height: 12, 
        borderRadius: 12,
        alignSelf: "center",
        top: moderateScale(42,1.1)
    },
    ball2: {
        width: 10, 
        height: 10, 
        borderRadius: 10,
    },
    ball3: {
        width: 8, 
        height: 8, 
        borderRadius: 8,
    },
    ball4: {
        width: 6, 
        height: 6, 
        borderRadius: 6,
    },
    ball5: {
        width: 4, 
        height: 4, 
        borderRadius: 4,
    }
})