import React from 'react'
import { View, Image, StyleSheet, useWindowDimensions, Text, Pressable } from 'react-native';
import { images } from '../../../constants/images';
import { moderateScale } from '../../../shared/helpers/scaling';
import { RenderItemBarbersProps } from './interfaces';
import { colors } from '../../../constants/colors';

const RenderItemBarbers = ({item, barberSelected, setBarberSelected}: RenderItemBarbersProps) => {
  const { height, width}  = useWindowDimensions();
  
  const selectBarber = () => {
    setBarberSelected(item.id);
  }

  return (
    <View style={styles.container}>
        <Pressable onPress={selectBarber}>
            <Image
                source={item.image}
                style={[styles.image, {width:width * .27, height:width * .27}, item.id === barberSelected && {borderColor:colors.orange, borderWidth:2, opacity:1}]}
            />
        </Pressable>
        <Text style={[styles.name, barberSelected === item.id && {color:colors.orange}]}>{item.name}</Text>
    </View>
  )
}

const styles  = StyleSheet.create({
    container:{
        marginHorizontal:moderateScale(10,1.1),
    },
    image:{
        borderRadius:100,
        opacity:.28,

    },
    name:{
        color: colors.white,
        fontSize: moderateScale(12,1),
        textAlign:"center",
        marginVertical:moderateScale(10,2),
    }
})

export default RenderItemBarbers