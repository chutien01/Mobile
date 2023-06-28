import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextInput } from "react-native";

const Register = ({navigation}) => {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
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

        <Button title="Register" />

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