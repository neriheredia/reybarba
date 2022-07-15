import { StyleSheet } from "react-native";
import { verticalModerateScale, moderateScale } from "../../helpers/scaling";

export const styles = StyleSheet.create({
    itemContainer: {
        marginHorizontal: 16, 
        borderRadius: 16, 
        borderWidth: 1, 
        borderColor: "gray"
    },
    buttonsContainer: {
        justifyContent: "center"
    },
    topSide: {
        borderTopRightRadius: 12, 
        borderTopLeftRadius: 12, 
        height: verticalModerateScale(170,1.1), 
        backgroundColor: "transparent"
    },
    imageBackgroundMask : {
        position: "absolute", 
        top: 0, 
        bottom: 0, 
        right: 0, 
        left: 0, 
        flex: 1, 
        backgroundColor: "rgba(48, 48, 48,.3)", 
        zIndex: 1, 
        borderTopRightRadius: 10, 
        borderTopLeftRadius: 10
    },
    carImage: {
        height: verticalModerateScale(170,1.1), 
        width: "100%", 
        borderTopRightRadius: 20, 
        borderTopLeftRadius: 20
    },
    detailContainer: {
        position: "absolute", 
        top: 0, 
        bottom: 0,
        right: 0, 
        left: 0, 
        flex: 1, 
        justifyContent: "space-between", 
        margin: moderateScale(10,1), 
        zIndex: 2, 
        flexDirection: "row"
    },
    topLeftDetail: {
        justifyContent: "space-between"
    },
    text: {
        color: "white", 
        fontSize: moderateScale(16,1)
    },
    textCarName: {
        fontWeight: "bold"
    },
    bottomLeft: {
        flexDirection: "column", 
        alignItems: "flex-start"
    },
    averageContainer: {
        backgroundColor: "#f3f4f5", 
        borderRadius: 12, 
        padding: 4, 
        flexDirection: "row", 
        paddingHorizontal: 6
    },
    starsText: {
        color: "black" ,
        fontSize: moderateScale(12,1.1), 
        fontWeight: "bold", 
        marginHorizontal: 4, 
        zIndex: 99
    },
    starsAvg: {
        color: "black" ,
        fontSize: moderateScale(11,1.1)
    },
    textKms: {
        fontSize: moderateScale(14,1.1), 
        color: "white", 
        marginRight: 4, 
        fontWeight: "500", 
        marginTop: 4
    },
    circleButton: {
        marginVertical: 6
    },
    bottomSide: {
        flexDirection: 'row', 
        paddingVertical: 16
    },
    column: {
        flex: 1
    },
    priceTitle: {
        fontSize: moderateScale(11,1), 
        textAlign: "center", 
        marginBottom: 4
    },
    priceTitleBold: {
        fontWeight: "bold", 
        fontSize: moderateScale(11,1), 
        textAlign: "center" , 
        marginBottom: 4
    },
    salePriceContainer: {
        padding: 4, 
        borderRadius: 12, 
        backgroundColor: "#eef3fb"
    },
    salePriceBoldContainer: {
        padding: 4, 
        borderRadius: 12, 
        backgroundColor: "red"
    },
    saleText: {
        color: "black", 
        fontSize: moderateScale(11,1), 
        textAlign: "center"
    },
    saleTextBold: {
        color: "white", 
        fontSize: moderateScale(11,1), 
        textAlign: "center", 
        fontWeight: "bold"
    },
    separator: {
        height: "100%", 
        width:1, 
        backgroundColor: "black", 
        marginHorizontal: 8
    }
});