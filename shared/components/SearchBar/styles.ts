import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
import { moderateScale } from "../../helpers/scaling"

export const styles = (iconColor?: string, backgroundColorText?: string) =>  StyleSheet.create({
    searchBarWrapper: {
        overflow: 'hidden',
        flex: 1,
        marginBottom: 40
    },
    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: .5,
        borderColor: 'transparent',
        borderRadius: 50,
        elevation: 10,
        marginHorizontal: 40, 
        marginVertical: 10,
        backgroundColor: backgroundColorText
    },
    icon: {
        width:20, 
        height: 20,
        marginHorizontal: 16, 
        marginRight: 8,
        color: iconColor
    },
    textInput: {
        borderRadius: 40, 
        fontSize: moderateScale(12,1), 
        height: 40, 
        flex: 1,
        zIndex: 999,
        color: colors.darkGray,
    }
})