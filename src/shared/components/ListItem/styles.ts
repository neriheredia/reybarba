import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { moderateScale } from "../../helpers/scaling";

export const styles = StyleSheet.create({
    itemContainer: {
        marginHorizontal: 16, 
        borderRadius: 16, 
        elevation: 5,
        backgroundColor: "white",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        shadowColor: "rgba(105, 105, 105,.8)",
    },
    buttonsContainer: {
        // justifyContent: "center"
    },
    topSide: {
        borderTopRightRadius: 12, 
        borderTopLeftRadius: 12, 
        height: moderateScale(170,1.1), 
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
        height: moderateScale(170,1.1), 
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
        color: colors.white, 
        fontSize: moderateScale(16,1)
    },
    year: {
        color: colors.darkGray, 
        fontSize: moderateScale(12,1),
        marginLeft: moderateScale(7),
        fontFamily: 'Nunito-SemiBold'
    },
    textCarName: {
        fontFamily: 'Nunito-ExtraBold',
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
        color: colors.darkGray ,
        fontSize: moderateScale(12,1.1), 
        fontWeight: "bold", 
        marginHorizontal: 4, 
        zIndex: 99
    },
    starsAvg: {
        color: colors.darkGray ,
        fontSize: moderateScale(11,1.1)
    },
    textKms: {
        fontSize: moderateScale(14,1.1), 
        color: colors.white, 
        marginRight: 4, 
        fontWeight: "500", 
        marginTop: 4,
        fontFamily: 'Nunito-Bold'
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
        marginBottom: 4,
        color: colors.darkGray
    },
    priceTitleBold: {
        fontWeight: "bold", 
        fontSize: moderateScale(11,1), 
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
        backgroundColor: colors.orange
    },
    saleText: {
        color: colors.darkGray, 
        fontSize: moderateScale(11,1), 
        textAlign: "center"
    },
    saleTextBold: {
        color: colors.white, 
        fontSize: moderateScale(11,1), 
        textAlign: "center", 
        fontWeight: "bold"
    },
    separator: {
        height: "100%", 
        width:1, 
        backgroundColor: colors.darkGray , 
        marginHorizontal: 8
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    justifySpaceBeet: {
        justifyContent: "space-between"
    },
    belowSection: {
        padding: moderateScale(15)
    },
    description: {
        fontSize: moderateScale(10),
        color: colors.darkGray,
        fontFamily: 'Nunito-Light',
        marginTop: moderateScale(15)
    },
    km: {
        fontSize: moderateScale(12,1.1),
        fontFamily: 'Nunito-Bold'
    },
    price: {
        fontSize: moderateScale(12),
        color: colors.darkGray,
        fontFamily: 'Nunito-SemiBold',
    },
    statusWrapper: {
        backgroundColor: "#EEF3FC",
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    status: {
        color: colors.darkGray,
        fontSize: moderateScale(10),
        fontFamily: 'Nunito-Regular'
    },
    fontColor: {
        color: colors.darkGray
    },
    margins: {
        marginTop: 3
    }
});