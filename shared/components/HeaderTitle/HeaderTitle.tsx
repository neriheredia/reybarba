import React from "react";
import { Image, View } from "react-native";
import { images } from "../../../constants/images";
import { moderateScale } from "../../helpers/scaling";

const HeaderTitle = () => {

    return(
        <View style={{justifyContent: "center", alignItems: "center"}}>
            <Image style={{height: moderateScale(40,1.1)}} resizeMode="center" source={images.linzeLogo} />
        </View>
    )
};

export default HeaderTitle;