import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

type SearchBarProps = {
    onSearch: (keywords: string) => void;
}

export default function SearchBar({onSearch}: SearchBarProps) {
    const [search, setSearch] = useState('')
    return (
        <View>
            <TextInput style={styles.input} value={search} onChangeText={setSearch} placeholder={'Pesquise aqui...'} />
            <Button title={'Buscar'} onPress={() => onSearch(search)} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    }
})