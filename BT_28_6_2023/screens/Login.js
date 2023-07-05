import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email === "" || password === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      // const auth = await AsyncStorage.getItem('currentUser');

      // if (auth && email === JSON.parse(auth).email && password === JSON.parse(auth).password) {
      navigation.navigate("Home");
      // }
      // else {
      //     alert('Sai tên tài khoản hoặc mật khẩu');
      // }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
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

        <Button onPress={handleLogin} title="Login" />

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.link}>Register</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
});
