import React from 'react'
import { View, StyleSheet, Pressable, Text, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { moderateScale } from '../../shared/helpers/scaling';
import { colors } from '../../constants/colors';
import {useState} from 'react';
import {useEffect} from 'react';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface FloatingButtonsRight {
  image: ImageSourcePropType
}

const FloatingButtonsRight = ({image}: FloatingButtonsRight) => {
  const navigator = useNavigation<NativeStackNavigationProp<any>>();

  const [liked, setLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(0);

  useEffect(() => {
    setNumberOfLikes(Math.round((Math.random() * 1000)))
  },[liked])
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => setLiked(!liked)}>
          <Icon
            name="heart"
            color={!liked ? "white": colors.orange}
            size={moderateScale(25)}
          />
        </Pressable>
        <Text style={styles.text}>{numberOfLikes}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => navigator.navigate("Detail",{image})}>
          <Icon
            name="eye"
            color={"white"}
            size={moderateScale(25)}
          />
        </Pressable>
        <Text style={styles.text}>{numberOfLikes}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => console.log("presed")}>
          <Icon
            name="sharealt"
            color={"white"}
            size={moderateScale(25)}
          />
        </Pressable>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    position:"absolute",
    bottom:moderateScale(15,7),
    right: moderateScale(10,7),
  },
  button:{
    borderWidth:2,
    borderColor:"white",
    height:moderateScale(45),
    width:moderateScale(45),
    justifyContent:"center",
    alignItems:"center",
    borderRadius:100,
    alignSelf:"center"
  },
  buttonContainer:{
  },
  text:{    alignSelf:"center",
    marginVertical:moderateScale(5),
    fontSize:moderateScale(10,2),
    color:colors.white
  }
})
export default FloatingButtonsRight