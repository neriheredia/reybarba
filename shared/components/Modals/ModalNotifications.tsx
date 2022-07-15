import React from 'react'
import { Text, View, StyleSheet, useWindowDimensions, Image, Pressable, Modal, } from 'react-native';
import { colors } from '../../../constants/colors';
import { images } from '../../../constants/images';
import { moderateScale, verticalModerateScale } from '../../helpers/scaling';
import { ModalNnotificationsProps } from './interfaces';
import LottieView from 'lottie-react-native';
import Button from '../Button';
import Icon from 'react-native-vector-icons/Ionicons';

const ModalNotifications = ({
    mainTitle,
    title,
    description,
    setOpenModal,
    openModal,
    buttons = false,
    onPressAcept = () => setOpenModal(false),
    onPressCancel = () => setOpenModal(false),
    icon = images.loginLinzeIcon,
    noIcon = false,
    gif = false,
    closedButton = true,
    button1Name = "Cancelar",
    button2Name = "Aceptar"
}: ModalNnotificationsProps) => {

    const { height, width } = useWindowDimensions();

    const closeModal = () => {
        openModal && setOpenModal(false);
    }

    return (
        <Modal transparent animationType='slide'>
            <View style={styles.container}>
                <View style={styles.opacity}>
                    <Pressable onPress={closeModal}>
                        <View style={styles.opacity}/>
                    </Pressable>
                </View>
                
                <Pressable onPress={buttons ? () => {} : closeModal} style={[styles.modal, {top:verticalModerateScale(height/4.8,1),  paddingBottom: buttons ? 0 : moderateScale(20)}]}>
                    <View style={{ position: 'relative' }}>
                        {!noIcon ?
                            <View style={styles.imageContainer}>
                                <Image source={icon} style={[styles.icon, styles.circle]}/>
                            </View>
                        : 
                            null
                        }
                        {
                        noIcon && gif && 
                            <View style={styles.absolute}>
                                <View style={styles.circle}>
                                    <LottieView
                                        source={gif}
                                        style={{
                                            width: moderateScale(100,1.1),
                                            height: moderateScale(100,1.1),
                                            top:- moderateScale(3)
                                        }}
                                        autoPlay
                                        loop
                                    />
                                </View>
                            </View>
                        }
                        {
                            closedButton &&
                            <Pressable onPress={closeModal} style={{position: "absolute", right: moderateScale(16,1.1), top: moderateScale(16,1.1)}}>
                                <Icon color={colors.darkGray} name="close" size={moderateScale(20,1.1)}/>
                            </Pressable>
                        }
                        
                        {
                            noIcon && !gif && 
                            <View style={styles.absolute}>
                                <View style={styles.circle}/>
                            </View>
                        }
                        <View style={[styles.textWrapper, noIcon && gif ? styles.paddingTopTextWrapper : {}]}>
                            {mainTitle ?  <Text numberOfLines={2} ellipsizeMode={"tail"} style={styles.mainText}>{mainTitle}</Text> : null}
                            {title ?  <Text numberOfLines={5} ellipsizeMode={"tail"} style={styles.text}>{title}</Text> : null}
                            {description ? <Text numberOfLines={3} ellipsizeMode={"tail"} style={styles.descriptionText}>{description}</Text>: null}
                        </View>
                        {
                            buttons &&
                            <View style={styles.buttons}>
                                <View style={{ flex: .5 }}>
                                    <Button title={button1Name} onPress={onPressCancel} secondary/>
                                </View>
                                <View style={{ flex: .5 }}>
                                    <Button title={button2Name} onPress={onPressAcept}/>
                                </View>
                            </View>
                        }
                    </View>
                </Pressable>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:"100%",
        width:"100%",
        position:"absolute",
        alignContent:"center",
        alignSelf:"center",
        alignItems:"center",
    },
    opacity:{
        backgroundColor: colors.black,
        height:"100%",
        width:"100%",
        opacity:.7,
    },
    modal:{
        width:"90%",
        position:"absolute",
        borderRadius:30,
        backgroundColor:colors.white,
    },
    text:{
        textAlign:"center",
        fontSize:moderateScale(15),
        color: colors.black,
        marginTop: 5,
        fontFamily: 'Nunito-SemiBold'
    },
    imageContainer:{
        alignItems:"center",
        top: verticalModerateScale(-30),
    },
    buttons:{
        display: 'flex',
        flexDirection:"row",
        alignSelf:"center",
        flex: 1
    },
    button:{
        marginHorizontal:moderateScale(10),
        paddingHorizontal:moderateScale(40),
        paddingVertical:verticalModerateScale(10),
        backgroundColor:"red",
        borderRadius:100,
        color: colors.white,
        fontSize:moderateScale(13)
    },
    buttonCancel:{
        backgroundColor: colors.buttonSecondary,
        color: colors.black,
    },
    buttonAcept:{
        backgroundColor: colors.buttonPrimary
    },
    mainText: {
        textAlign:"center",
        fontSize: moderateScale(20),
        color:"#4376D8",
        fontFamily: 'Nunito-Black'
    },
    descriptionText: {
        textAlign:"center",
        fontSize: moderateScale(13),
        color: colors.black,
        opacity: .85,
        marginTop: 7,
        fontFamily: 'Nunito-Regular'
    },
    textWrapper: {
        paddingHorizontal: moderateScale(20, 1.1),
        paddingBottom: moderateScale(20, 1.1),
    },
    paddingTopTextWrapper: {
        paddingTop: moderateScale(80, 1.1)
    },
    circle: {
        height: moderateScale(90,1.1),
        width: moderateScale(70,1.1),
        borderRadius: 50,
        backgroundColor: colors.white,
        justifyContent:"center",
        alignItems:"center",
    },
    absolute: {
        alignItems:"center",
        top: verticalModerateScale(-40),
        position: 'absolute',
        right: '50%',
        left: '50%'
    },
    icon: {
        width: 10,
        height: 10,
    }
})

export default ModalNotifications
  