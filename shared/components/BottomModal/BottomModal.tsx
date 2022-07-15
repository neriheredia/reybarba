import React, { useEffect, useRef } from "react";
import { View, Image, Pressable, Text, Modal, StatusBar, Animated, Dimensions } from "react-native";
import { moderateScale } from "../../helpers/scaling";
import { BottomModalProps } from "./interfaces";
import { styles } from "./styles";
import LottieView from 'lottie-react-native';
import { colors } from '../../../constants/colors';
import { images } from "../../../constants/images";
import Button from "../Button";

const DEVICEHEIGHT = Dimensions.get("window").height;
const wrapperButtonStylesDefault = {
    
}

const BottomModal = ({ 
    closeMessage, 
    show, 
    onAccept, 
    children, 
    gif, 
    image, 
    acceptButton = true, 
    cancelButtom = false, 
    acceptButtonLabel = 'Aceptar',
    cancelButtonLabel = 'Omitir',
    wrapperButtonStyles = wrapperButtonStylesDefault,
    gifStyles = {}
}: BottomModalProps) => {

    const animatedValue = useRef(new Animated.Value(DEVICEHEIGHT)).current;

    const onPressAccept = () => {
        onAccept();
        onPress();
    }

    const onPress = () => {
        Animated.timing(animatedValue,{
            toValue: DEVICEHEIGHT,
            useNativeDriver: true,
            duration: 250
        }).start();

        setTimeout(() => {
            closeMessage();
        },250);
    };

    useEffect(() => {
        if(show){
            Animated.timing(animatedValue,{
                toValue: 0,
                useNativeDriver: true,
                duration: 250
            }).start()
        }
    },[show])

    return(
        <Modal animationType="none" transparent style={styles.messageContainer}>
            <StatusBar backgroundColor="rgba(43, 43, 43,.5)"/>
            <Pressable style={{flex: 1, backgroundColor:"rgba(43, 43, 43,.5)"}} onPress={onPress}>
                <Pressable style={{flex:1}} onPress={onPress}/>
                <Animated.View 
                    style={{
                        transform: [{
                            translateY: animatedValue
                        }]
                    }}
                >
                    <View style={{backgroundColor: colors.white, borderTopRightRadius: moderateScale(30,1.1), borderTopLeftRadius: moderateScale(30,1.1), alignItems: "center"}}>
                        <Pressable style={({pressed}) => ({opacity: pressed ? 0.5 : 1, height: 10, backgroundColor:"rgba(210, 210, 214,.46)", alignSelf: "center", width: "20%", marginVertical: moderateScale(24,1.1), borderRadius: 16})} onPress={onPress}/>
                    { gif ?
                            <LottieView
                                source={gif}
                                style={[{
                                    position: 'relative',
                                    height: moderateScale(60, 1.1)
                                }, gifStyles]}
                                autoPlay
                                loop
                            />
                        : image ?
                            <Image source={image} resizeMode="contain" resizeMethod="scale"  style={{ height: moderateScale(60, 1.1), width: moderateScale(60, 1.1) }}/>
                        :
                            <Image source={images.linzeIcon} resizeMode="contain" resizeMethod="scale"  style={{ height: moderateScale(60, 1.1), width: moderateScale(60, 1.1) }}/>
                        }

                        { children }

                        <View style={[wrapperButtonStyles, { flexDirection: 'row'}]}>
                            {acceptButton && <Button title={acceptButtonLabel} onPress={onPressAccept}/>}
                            {cancelButtom && <Button title={cancelButtonLabel} onPress={onPressAccept}/>}
                        </View>
                    </View>
                </Animated.View>
            </Pressable>
        </Modal>
    )
};

export default BottomModal;