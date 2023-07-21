import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
//import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = () => {
  const [fullname, setFullname] = useState(null);
  const [address, setAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState(null);
  const navigation = useNavigation();
  const register = () => {
    if (
      email === null ||
      password === null ||
      phone === null ||
      fullname === null
    ) {
      Alert.alert(
        "Invalid Detials",
        "Please enter all the credentials",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials._tokenResponse.email;
        //console.log(user);
        const uid = auth.currentUser.uid;
        //console.log(uid);
        Alert.alert("Đăng ký tài khoản thành công!Vui lòng đăng nhập");
        setDoc(doc(db, "users", `${uid}`), {
          email: user,
          password: password,
          phone: phone,
          fullname: fullname,
          address: address,
        });
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log("Api call error");
        alert(error.message);
      });
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Text style={{ color: "#003580", fontSize: 20, fontWeight: "700" }}>
            Đăng ký
          </Text>

          <Text style={{ marginTop: 5, fontSize: 18, fontWeight: "500" }}>
            Tạo một tài khoản
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "black" }}>
              Họ và Tên
            </Text>

            <TextInput
              value={fullname}
              onChangeText={(text) => setFullname(text)}
              placeholder="Họ và tên"
              placeholderTextColor={"gray"}
              style={{
                fontSize: fullname ? 16 : 16,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 6,
                width: 300,
              }}
            />
          </View>
          <View>
              <Text style={{ fontSize: 16, fontWeight: "600", color: "black" }}>
                Địa chỉ
              </Text>

              <TextInput
                value={address}
                onChangeText={(text) => setAddress(text)}
                placeholder="Địa chỉ"
                placeholderTextColor={"gray"}
                style={{
                  fontSize: address ? 16 : 16,
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  marginVertical: 6,
                  width: 300,
                }}
              />
            </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "black" }}>
              Email
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              placeholderTextColor={"gray"}
              style={{
                fontSize: email ? 16 : 16,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 6,
                width: 300,
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "black" }}>
              Mật khẩu
            </Text>

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={"gray"}
              style={{
                fontSize: password ? 16 : 16,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 6,
                width: 300,
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "black" }}>
              Số điện thoại
            </Text>

            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="(+84)"
              placeholderTextColor={"gray"}
              style={{
                fontSize: password ? 16 : 16,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 6,
                width: 300,
              }}
            />
          </View>
        </View>

        <Pressable
          onPress={() => register(navigation)}
          style={{
            width: 200,
            backgroundColor: "#003580",
            padding: 15,
            borderRadius: 7,
            marginTop: 35,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Đăng ký
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginTop: 20 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 17 }}>
            Nếu bạn đã có tài khoản?
          </Text>
          <Text style={{ textAlign: "center", color: "#003580", fontSize: 17 }}>
            Đăng nhập
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
