import React from 'react'
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { images } from '../../../constants/images';
import { moderateScale } from '../../../shared/helpers/scaling';
import RenderItemBarbers from './RenderItemBarbers';
import { ItemProps, ListBarberProps } from './interfaces';

const ListBarber = ({setBarberSelected, barberSelected}: ListBarberProps) => {

    const listBarber: ItemProps[] = [
        {
            name:"Nahuel",
            image: images.person1,
            id:"1"
        },
        {
            name:"Rodri",
            image: images.person2,
            id:"2"
        },
        {
            name:"Pablo",
            image: images.person3,
            id:"3"
        },
        {
            name:"Pablo",
            image: images.person3,
            id:"3"
        },
    ]

  return (
    <ScrollView horizontal style={styles.container}>
            {
                listBarber.length && listBarber.map((item,i) => {
                    return <RenderItemBarbers
                    key={i}
                    item={item}
                    barberSelected={barberSelected}
                    setBarberSelected={setBarberSelected}
                    />
                })
            }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        alignSelf:"center",
        flexDirection:"row",
    }
})

export default ListBarber