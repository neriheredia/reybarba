import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import { CheckboxProps } from './interfaces';

const Checkbox = ({onChangeValue = () => {}, checkboxStyle = undefined, iconColor = "#4376d8", size = 16 }: CheckboxProps) => {
    const [checked, setChecked] = useState<boolean>(false);

    const onPressCheck = () => {
        setChecked(!checked);
        onChangeValue(checked);
    };
    return(
        <Pressable onPress={onPressCheck}>
            <View style={[styles.body,checkboxStyle]} />
            {checked && <Icon color={iconColor} name="check" style={styles.icon} size={size}/>}
        </Pressable>
    )   
}
export default Checkbox;