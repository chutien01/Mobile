import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    try {
        if (name === '' || email === '' || password === '' || confirmPassword === '') {
            alert('Vui lòng nhập đầy đủ thông tin')
        }
        else {
            if (password === confirmPassword) {
                await AsyncStorage.setItem('currentUser', JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword,
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
      <View style={styles.wrapper}>
        <TextInput
            style={styles.input}
            value={name}
            placeholder="Enter name"
            onChangeText={(text) => setName(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        ></TextInput>

        <TextInput
          style={styles.input}
          value={confirmPassword}
          placeholder="Confirm password"
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
        ></TextInput>

        <Button onPress={handleRegister} title="Register" />

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text>If I have an account?</Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
    height: 50,
  },
  link: {
    color: "blue",
    fontWeight: "bold",
    marginLeft: 5,
  },
})