import { View, Pressable, Image, Text, StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
import { moderateScale } from '../../../shared/helpers/scaling';
import { RenderItemServiceProps } from './interfaces';


const RenderItemService = ({
  item,
  serviceSelected,
  setServiceSelected
}: RenderItemServiceProps ) => {
  
  const selectService = () => {
    setServiceSelected(item);
  }
  
  return (
        <Pressable  onPress={selectService} style={[styles.container, serviceSelected === item && {borderColor:colors.orange}]}>
          <View style={styles.opacityContainer}/>
          <View style={styles.imageContainer}>
            <Image
                source={item.image}
                style={[styles.image, serviceSelected === item && {borderColor:colors.orange, borderWidth:1, opacity:1}]}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    width: "90%",
    height: moderateScale(130,1.2),
    marginVertical:moderateScale(12,1),
    alignContent:"center",
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"center",
    borderRadius:7,
    alignSelf:"center",
    borderWidth:2,
  },
  opacityContainer:{
    backgroundColor:colors.black,
    position:"absolute",
    top:0,
    bottom:0,
    right:0,
    left:0,
    opacity:.5
  },
  image:{
    height:moderateScale(100,2),
    width:moderateScale(100,2),
    borderRadius:100,
    opacity:.3
  },
  imageContainer:{
    height:moderateScale(110,2),
    width:moderateScale(110,2),
    justifyContent:"center"
  },
  textContainer:{
    justifyContent:"space-evenly",
    height:moderateScale(100,2),
    width:moderateScale(130,3),
  },
  title:{
    alignSelf:"center",
    color:colors.white,
    fontSize:moderateScale(13,2)
  },
  description:{
    fontSize:moderateScale(10,2),
    color:colors.white,
    textAlign:"left"
  },
  price:{
    textAlign:'right',
    color:colors.orange
  }
})

export default RenderItemService;