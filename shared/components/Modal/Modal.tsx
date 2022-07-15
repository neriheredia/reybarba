import React from 'react'
import { Text, View, StyleSheet, useWindowDimensions, Image, Pressable, TouchableOpacity, Modal, } from 'react-native';
import { colors } from '../../../constants/colors';
import { images } from '../../../constants/images';
import { moderateScale, verticalModerateScale, verticalScale } from '../../helpers/scaling';
import { ModalNotificationsProps } from './interfaces';

const ModalNotifications = ({
    children,
    setOpenModal,
    openModal,
    type = 'center',
    onClose
}: ModalNotificationsProps) => {

    const { height, width } = useWindowDimensions();

    const closeModal = () => {
        openModal && setOpenModal(false);
        onClose && onClose()
    }

    return (
        <>
            { openModal ?
                <Modal transparent animationType='slide'>
                    <View style={styles.container}>
                        <Pressable style={styles.opacity} onPress={closeModal}/>
                        <View 
                            style={
                                [ type === 'center' ? styles.modalCenter : styles.modalBottom, 
                                type === 'center' ? { top:verticalModerateScale(height/4.8,1) } : styles.positionBottom]
                            }
                        >
                            { children }
                        </View>
                    </View> 
                </Modal>
            :
                <></>
            }
        </>
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
    positionBottom: {
        bottom: 0,
    },
    opacity:{
        backgroundColor:"#000000",
        height:"100%",
        width:"100%",
        opacity:.7,
    },
    modalCenter:{
        width:"90%",
        backgroundColor:"white",
        position:"absolute",
        borderRadius:30,
        padding: 20
    },
    modalBottom:{
        width:"100%",
        backgroundColor: "white",
        position:"absolute",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 20
    }
})

export default ModalNotifications
