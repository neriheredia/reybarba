import React from 'react';
import { View, Text } from 'react-native';
import { HeaderProps } from './interfaces';
import { styles } from './styles';

const Header = ({ title }:HeaderProps) => {
    
    return(
        <View  
            style={styles.header}
        >
            <Text style={styles.text}>{title}</Text>
        </View>
    )   
}
export default Header;