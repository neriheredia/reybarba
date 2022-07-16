import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '../../../constants/colors';
import { moderateScale, verticalModerateScale, verticalScale } from '../../../shared/helpers/scaling';
import { RenderItemChip } from './interfaces';

const RenderItemChips = ({item, dataSelected, setDataSelected}: RenderItemChip) => {

    const handleClickHour = () => {
        setDataSelected(item);
    }
    return (
        <Pressable onPress={handleClickHour}>
            <View style={[styles.container, dataSelected === item && {backgroundColor: colors.orange }]}>
                <Text style={[styles.item, styles.fontText, dataSelected === item && {color: colors.white,}]}>{item}</Text>
            </View>
        </Pressable>
    )
}

export default RenderItemChips

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.gray,
        marginHorizontal: 9,
        justifyContent:"center",
        width:moderateScale(60,1.1),
        alignSelf:"center",
        alignItems:"center",
        height:verticalModerateScale(35,1.2),
        borderRadius:50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,        
    },

    item:{
        color: colors.black
    },
    fontText:{
        fontSize: moderateScale(12, 1.1)
    }
})
