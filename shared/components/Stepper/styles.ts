import { StyleSheet } from 'react-native';
import { moderateScale, horizontalScale } from "../../helpers/scaling";

export const styles = StyleSheet.create({
    stepper: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: moderateScale(12,1.1),
        color: 'black',
        fontWeight: '600',
        marginBottom: 5,
    },
    step: {
        width: 10,
        height: 10,
        borderRadius: 50,
        marginRight: 6
    },
    stepsContainer: {
        display: 'flex',
        flexDirection: 'row',
    }
})

export const isSelected = (value:boolean) => StyleSheet.create({
    currentStep: {
        backgroundColor: value ? '#4376D8' : '#D1D1D6',
        width: value ? 25 : 10
    }
})