import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
import { colors } from '../../constants/colors';
import { moderateScale } from '../../shared/helpers/scaling';
import ListBarber from './components/ListBarber';
import {useState} from 'react';
import ButtonMedium from '../../shared/components/ButtonMedium/ButtonMedium';
import ChipsList from './components/ChipsList';
import { hoursList, datesList, listServices } from './components/fakeData';
import { Service } from './components/interfaces';
import ListServices from './components/ListServices';

const TurnsStack = () => {
    const [barberSelected, setBarberSelected] = useState("");
    const [hourSelected, setHourSelected] = useState(0);
    const [dateSelected, setDateSelected] = useState("");
    const [serviceSelected, setServiceSelected] = useState<Service>({
        name:"",
        image:0,
        id:"",
        description:"",
        price:0
    });
    const [showListServices, setShowListServices] = useState(false);
    return (
        <View style={{flex:1}} >
            {
                !showListServices &&
                <View style={styles.container}>
                    <Text style={styles.title}>Turnos</Text>
                    <View>
                        <Text style={styles.text}>Elegí a tu Barbero:</Text>
                        <View>
                            <ListBarber
                                barberSelected={barberSelected}
                                setBarberSelected={setBarberSelected}
                            />
                        </View> 
                    </View>
                        <Text style={styles.text}>Elegí una fecha disponible:</Text>
                    <ChipsList
                        dataSelected={hourSelected}
                        setDataSelected={setHourSelected}
                        data={datesList}
                    />
                    <ChipsList
                        dataSelected={dateSelected}
                        setDataSelected={setDateSelected}
                        data={hoursList}
                    />
                    <View style={styles.buttonContainer}>
                        <ButtonMedium
                            title='Siguiente'
                            color={colors.orange}
                            onPress={() => setShowListServices(true)}
                        />
                    </View>
                </View>
            }
            {
                showListServices &&
                <View style={styles.container}>
                    <Text style={[styles.title, {marginVertical:moderateScale(10,1)}]}>Turnos</Text>
                    <ListServices
                        data={listServices}
                        serviceSelected={serviceSelected}
                        setServiceSelected={setServiceSelected}
                    />
                    {
                        serviceSelected.name !== "" &&
                        <View style={styles.buttonContainer}>
                            <ButtonMedium
                                title='Listo'
                                color={colors.orange}
                                onPress={() => setShowListServices(true)}
                            />
                        </View>
                    }
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.brown,
        flex:1,
        justifyContent: 'space-around',
    },
    title:{
        fontSize: moderateScale(20,1.2),
        color: colors.white,
        textAlign:"center"
    },
    imageContainer:{
        width:"100%",
        height:moderateScale(160,1.1),
    },
    opacityImage:{
        position:"absolute",
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:colors.black,
        opacity:.4
    },
    image:{
        height:moderateScale(160,1.1),
        width:"100%",
        alignSelf:"center",
    },
    elementsContainer:{
        alignSelf:"center",
        width:"95%",
        backgroundColor:"orange"
    },
    text:{
        color:colors.white,
        marginVertical:moderateScale(7,5),
        fontSize:moderateScale(10,4),
        marginLeft:moderateScale(10,1.1)
    },
    buttonContainer:{
        alignSelf:"center",
        marginVertical:moderateScale(10,1)
    }
})

export default TurnsStack