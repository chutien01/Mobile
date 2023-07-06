import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({ navigation }) {

    const [fullname, setFullname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        try {
            if (fullname === '' || phoneNumber === '' || email === '' || password === '') {
                alert('Vui lòng nhập đầy đủ thông tin')
            }
            else {
                if (password === confirmPassword) {
                    await AsyncStorage.setItem('currentUser', JSON.stringify({
                        fullname: fullname,
                        phoneNumber: phoneNumber,
                        email: email,
                        password: password,
                    }))

                    navigation.navigate('Login');
                }

                else {
                    alert('Mật khẩu nhập lại không đúng')
                }
            }
        } catch (error) {
            alert('Failed to save the data to the storage')
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Full name'
                        onChangeText={newText => setFullname(newText)}
                        name="username" />

                    <TextInput
                        style={styles.textInput}
                        placeholder='Phone Number'
                        onChangeText={newText => setPhoneNumber(newText)}
                        type
                        name="phone" />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Email Address'
                        onChangeText={newText => setEmail(newText)}
                        name="email" />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Password'
                        onChangeText={newText => setPassword(newText)}
                        secureTextEntry
                        name="password" />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Confirm Password'
                        onChangeText={newText => setConfirmPassword(newText)}
                        secureTextEntry
                        name="confirmPassword" />

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
                            marginTop: 30,
                            backgroundColor: '#344d91',
                        }}
                        onPress={handleRegister}>
                        <Text style={{
                            fontSize: 16,
                            lineHeight: 21,
                            fontWeight: 'bold',
                            letterSpacing: 0.25,
                            color: "#fff"
                        }}
                        >
                            Sign Up
                        </Text>
                    </Pressable>
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
        backgroundColor: '#eee',
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
    },

    button: {}
});