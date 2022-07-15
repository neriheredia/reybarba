import { StyleProp } from 'react-native';


export interface ButtonProps {
    onPress: () => void,
    title: string,
    stylesCustom?: object,
    primary?: boolean,
    secondary?: boolean,
    loading?: boolean
    disabled?: boolean
}