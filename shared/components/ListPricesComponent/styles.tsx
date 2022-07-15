import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { moderateScale } from "../../helpers/scaling";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        paddingVertical: 16
    },
    column: {
        flex: 1
    },
    priceTitle: {
        fontSize: moderateScale(10,1.1), 
        textAlign: "center", 
        marginBottom: 4,
        color: colors.darkGray
    },
    priceTitleBold: {
        fontWeight: "bold", 
        fontSize: moderateScale(10,1.1), 
        textAlign: "center" , 
        marginBottom: 4,
        color: colors.darkGray
    },
    salePriceContainer: {
        padding: 4, 
        borderRadius: 12, 
        backgroundColor: "#eef3fb"
    },
    salePriceBoldContainer: {
        padding: 4, 
        borderRadius: 12, 
        backgroundColor: colors.orange,
    },
    saleText: {
        color: colors.darkGray, 
        fontSize: moderateScale(10,1.1), 
        textAlign: "center"
    },
    saleTextBold: {
        color: colors.white, 
        fontSize: moderateScale(10,1.1), 
        textAlign: "center", 
        fontWeight: "bold"
    },
    separator: {
        height: "100%", 
        width:1, 
        backgroundColor: colors.darkGray , 
        marginHorizontal: 8
    }
})