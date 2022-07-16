import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../../shared/helpers/scaling';
import RenderItemHours from './RenderItemChips';
import { DataListProps } from './interfaces';
import RenderItemChips from './RenderItemChips';

const ChipsList = ({dataSelected, setDataSelected, data}: DataListProps) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <RenderItemChips
                        item={item} dataSelected={dataSelected}
                        setDataSelected={setDataSelected}
                        data={data}
                    />)}
                horizontal
                style={styles.flatList}
                showsHorizontalScrollIndicator={false}
            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:verticalScale(55),
        width:"90%",
        borderRadius:80,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
    },
    flatList:{
        flex:1,
    }
})

export default ChipsList
