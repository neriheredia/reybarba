import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
    switchWrapper: {
        height: 25,
        width: 40,
        borderRadius: 50,
        borderWidth: 2,
        display: 'flex',
        justifyContent:'center',
        padding: 3,
        alignItems: 'flex-start'
    },
    check: {
        height: 15,
        width: 15,
        borderRadius: 100
    }
})

export const changeSwitch = (value: boolean) => StyleSheet.create({
    switchWrapperChange: {
        alignItems: value ? 'flex-end' : 'flex-start',
        borderColor: value ? colors.blue : colors.mediumGray
    },
    checkColor: {
        backgroundColor: value ? colors.blue : colors.mediumGray
    }
})