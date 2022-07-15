import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const ArrowGoBack = () => {

    const navigation = useNavigation();
    const goBack = () =>  navigation.goBack();

    return(
        <Pressable onPress={goBack} style={{marginRight: 8}}>
            <Icon name="arrowleft" color="gray" size={18} />
        </Pressable>
    )
};

export default ArrowGoBack;