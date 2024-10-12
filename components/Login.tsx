import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";


export default function Login() {
    const[username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log(username, password)
    }

    return (
        <View style={styles.container}>
            <Text>Username</Text>
            <TextInput value={username} onChangeText={setUsername} style={styles.input} />
            <Text>Password</Text>
            <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} style={styles.input} />
            <Button title={'Login'} onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 15
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        height: 35,
        padding: 5
    }
});
