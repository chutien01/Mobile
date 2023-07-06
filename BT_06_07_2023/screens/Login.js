import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {

        if (email === '' || password === '') {
            alert('Vui lòng nhập đầy đủ thông tin');
        }
        else {
            // const auth = await AsyncStorage.getItem('currentUser');

            // if (auth && email === JSON.parse(auth).email && password === JSON.parse(auth).password) {
                navigation.navigate('HomeScreen')
            // }
            // else {
            //     alert('Sai tên tài khoản hoặc mật khẩu');
            // }
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Email'
                        onChangeText={newText => setEmail(newText)}
                        name="email" />

                    <TextInput
                        style={styles.textInput}
                        placeholder='Password'
                        onChangeText={newText => setPassword(newText)}
                        secureTextEntry
                        name="password" />
                    <View style={{ textAlign: 'center' }}>
                        <Pressable
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingVertical: 12,
                                paddingHorizontal: 32,
                                width: 278,
                                height: 53,
                                borderRadius: 26.5,
                                textAlign: 'center',
                                marginBottom: 20,
                                backgroundColor: '#5EA33A',
                            }}
                            onPress={handleLogin}>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 21,
                                fontWeight: 'bold',
                                letterSpacing: 0.25,
                                color: "#fff"
                            }}
                            >
                                Log In
                            </Text>
                        </Pressable>
                        <Text style={{ marginBottom: 20 }}>OR</Text>
                        <Pressable
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingVertical: 12,
                                paddingHorizontal: 32,
                                width: 278,
                                height: 53,
                                borderRadius: 26.5,
                                textAlign: 'center',
                                marginBottom: 20,
                                backgroundColor: '#344d91',
                            }}
                            onPress={() => alert('Coming Soon')}>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 21,
                                fontWeight: 'bold',
                                letterSpacing: 0.25,
                                color: "#fff"
                            }}
                            >
                                Facebook Login
                            </Text>
                        </Pressable>
                    </View>


                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        width: '100%',
        height: '100%',
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
    },

    form: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textInput: {
        width: 323,
        height: 53,
        paddingHorizontal: 20,
        marginBottom: 20,
        borderRadius: 26.5,
        borderWidth: 1,
        borderColor: "#374b6d",
        /*    border: '1px solid #374b6d' */
    },

    button: {}
});