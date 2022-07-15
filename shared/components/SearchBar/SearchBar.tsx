import React, { useState, useMemo, useEffect } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '../../../constants/colors';
import { SearchBarProps, SearchBarListItem } from './interfaces';
import { styles } from './styles';

// Para usar este componente, el array de options debe estar formado por objetos 
// cuya interfaz extienda la interfaz SearchBarListItem. Por ejemplo:

// export interface Brand extends SearchBarListItem {
//     id: string,
//     icon?: string
// }
// const brandOptions: Brand[] = [ 
//     {id: '1', label: "Honda "}, 
//     {id: '2', label: "Ferrari "}, 
//     {id: '3', label: "Citroen "}
// ]

// brandOptions es el array que se pasa como prop al componente


const SearchBar = <T extends SearchBarListItem,>({ theme = 'dark', placeholder, options, renderItem, keyExtractor }: SearchBarProps<T>): JSX.Element => {
    
    const [text, setText] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);

    const iconColor = useMemo(() => theme === "dark" ? colors.darkGray : "white",[theme]);
    const backgroundColorTextInput = useMemo(() => theme === "dark" ? "white" : "rgba(255, 255, 255, .1)",[theme]);

    useEffect(() => {
        const auxFiltered = options.filter(opt => new RegExp(text, "i").test(opt.label))
        setFilteredOptions(auxFiltered);
    }, [text])

    return(
        <View style={styles().searchBarWrapper}>
            <View style={styles(iconColor, backgroundColorTextInput).searchBar}>
                <View style={styles(iconColor, backgroundColorTextInput).icon}>
                    <Icon name="search1" size={20} color={'grey'} />
                </View>
                <TextInput 
                    style={styles().textInput} 
                    placeholderTextColor={iconColor}
                    placeholder={placeholder}
                    onChangeText={setText}
                />
            </View>
            <FlatList
                data={filteredOptions}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    )
}

export default SearchBar;