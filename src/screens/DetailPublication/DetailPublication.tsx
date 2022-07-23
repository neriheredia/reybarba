import React from 'react'
import { View, Text, StyleSheet, ScrollView, Route, Image } from 'react-native';
import { Card, Title, Paragraph, Button, Avatar } from 'react-native-paper';
import { moderateScale } from '../../shared/helpers/scaling';
import { images } from '../../constants/images';
import { colors } from '../../constants/colors';
import ButtonMedium from '../../shared/components/ButtonMedium/ButtonMedium';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface DetailPublication{
  route: any,

}
const DetailPublication = ({route}:DetailPublication) => {
  const {image} = route.params;
  const navigator = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <View style={styles.cardImage}>
        <View style={styles.imagesContainer}>
          <ScrollView horizontal>
            {
              image.length && 
              image.map((e,i) => {
                return (
                  <Image
                    source={e}
                    style={styles.image}
                    key={i}
                  />
                )
              })
            }
            <Image
          source={images.person1}
          style={styles.image}
            />
            <Image
          source={images.person3}
          style={styles.image}
            />
          </ScrollView>
        </View>
        <View style={styles.barberContainer}>
          <View style={styles.opacityContainer}/>
          <View style={styles.textContainer}>
            <Text style={styles.titleCard}>Especialista a cargo:</Text>
            <Text style={styles.description}>Nahuel</Text>
            <Text style={styles.titleCard}>Servicio:</Text>
            <Text style={styles.description}>Corte de pelo y barba</Text>
          </View>
          <View style={styles.avatarContainer}>
            <Avatar.Image
              source={images.person1}
              size={moderateScale(80,1)}
            />
          </View>
        </View>
        <View style={styles.cardDescriptionContainer}>
          <View style={styles.opacityContainer}/>
          <View >
            <Text style={[styles.titleDescription, {marginVertical:10}]}>Descripcion de servicio:</Text>
            

            <Text style={styles.descriptionDescription}>Es un corte de pelo especial con acabado en degrades. Lavado, y Diseño de barba completo</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonMedium
          title='Reservar un Turno'
          color={colors.orange}
          onPress={() => navigator.navigate("Turnos")}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.brown,
    justifyContent:"space-evenly",
    flex:1,
  },card:{
    width:"95%",
    alignSelf:"center",
    justifyContent:"center",
    backgroundColor:"red"
  },
  cardImage:{
    width:"95%",
    alignSelf:"center",
    marginVertical:20,
    borderWidth:1,
    borderRadius:20,
    borderColor:colors.orange
  },
  imagesContainer:{
    flexDirection:"row",
    justifyContent:"center",
  },
  barberContainer:{
    width:"95%",
    height:moderateScale(100,2),
    alignSelf:"center",
    borderRadius:30,
    marginVertical:moderateScale(10,1),
    justifyContent:"space-around",
    flexDirection:"row",
  },
  image:{
    width:moderateScale(100,1),
    height:moderateScale(190,1),
    margin:moderateScale(10,2.1),
    borderRadius:30
  },
  avatarContainer:{
    justifyContent:"center",
  },
  textContainer:{
    width:"60%",
    justifyContent:"center",
  },
  opacityContainer:{
    backgroundColor:colors.black,
    position:"absolute",
    top:0,
    bottom:0,
    left:0,
    borderRadius:20,
    right:0,
    opacity:.4
  },
  titleCard:{
    fontSize: moderateScale(14,1.1),
    color:colors.buttonPrimary,
    alignSelf:"center"
  },
  description:{
    fontSize: moderateScale(12,1),
    color: colors.darkGray,
    textAlign:"center",
  },
  cardDescriptionContainer:{
    width:"95%",
    alignSelf:"center",
    borderRadius:30,
    marginVertical:moderateScale(10,1),
    justifyContent:"space-around",
    flexDirection:"row",
    paddingVertical:moderateScale(12,1)
  },
  titleDescription:{
    color:colors.buttonPrimary,
    fontSize:moderateScale(14,1.1),
    alignSelf:"center"
  },
  descriptionDescription:{
    color:colors.darkGray,
    fontSize:moderateScale(12,1),
  },
  buttonContainer:{
    alignSelf:"center"
  }
})

export default DetailPublication