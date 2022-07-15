import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SwitchProps } from './interfaces';
import { styles, changeSwitch } from './styles';

const Switch = ({ value, onChange} : SwitchProps) => {
    return(
        <TouchableOpacity onPress={onChange}>
            <View  style={[styles.switchWrapper, changeSwitch(value).switchWrapperChange]}>
                <View style={[styles.check, changeSwitch(value).checkColor]}/>
            </View>
        </TouchableOpacity>
    )   
}

export default Switch;