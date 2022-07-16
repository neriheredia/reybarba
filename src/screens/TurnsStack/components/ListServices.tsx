import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import { listServices } from './fakeData';
import RenderItemService from './RenderItemServices';
import { ListServiceProps } from './interfaces';
import { moderateScale } from '../../../shared/helpers/scaling';

const ListServices = ({data, serviceSelected, setServiceSelected}: ListServiceProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={listServices}
        renderItem={({item}) => <RenderItemService
          item={item}
          serviceSelected={serviceSelected}
          setServiceSelected={setServiceSelected}
        />}
        style={{flex:1}}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
export default ListServices