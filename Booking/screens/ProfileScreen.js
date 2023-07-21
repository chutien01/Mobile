import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Avatar } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { auth,db } from "../firebase";
import { setDoc, doc,getDoc} from "firebase/firestore";
import { onValue } from "firebase/database"
const ProfileScreen = () => {
  const uid = auth.currentUser.uid;
  const docRef = doc(db, "users", `${uid}`);
  const [info, setInfo] = useState([]);
  const navigation = useNavigation();
  //const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const profile = async () => {
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setInfo(data);
          //setLoading(false);
        } else {
          console.log("Document does not exist");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    profile();
  }, []);
  /* if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    )
  } */
  const handleLogout = async () => {
    try {
      await auth.signOut();
      //console.log('Đăng xuất thành công');
      Alert.alert("Đăng xuất thành công!")
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
        <View>
              <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: "20%"}}>
                  <Avatar.Image 
                    source={{
                      uri: 'http://www.gravatar.com/avatar/?d=mp',
                    }}
                    size={80}
                  />
                  <View style={{marginLeft: 20}}>
                    <Text style={[styles.title, {
                      marginTop:15,
                      marginBottom: 5,
                    }]}>{info.fullname}</Text>
                    <Text style={styles.caption}>{info.email}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.userInfoSection}>
                <View style={styles.row}>
                  <Entypo name="address" size={24} color="gray" />
                  <Text style={{color:"#777777", marginLeft: 20}}>{info.address}</Text>
                </View>
                <View style={styles.row}>
                  <Entypo name="phone" size={24} color="gray" />
                  <Text style={{color:"#777777", marginLeft: 20}}>{info.phone}</Text>
                </View>
                <View style={styles.row}>
                  <Entypo name="email" size={24} color="gray" />
                  <Text style={{color:"#777777", marginLeft: 20}}>{info.email}</Text>
                </View>
              </View>

              <View style={styles.infoBoxWrapper}>
              </View>
            </View>
          <View style={styles.menuWrapper}>
            {/* <Pressable onPress={() => profile()}>
              <View style={styles.menuItem}>
                <AntDesign name="heart" size={24} color="red" />
                <Text style={styles.menuItemText}>Your Favorites</Text>
              </View>
            </Pressable> */}
            <Pressable onPress={() => {}}>
              <View style={styles.menuItem}>
                <AntDesign name="creditcard" size={24} color="red" />
                <Text style={styles.menuItemText}>Thông tin thẻ thanh toán</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.menuItem}>
                <AntDesign name="sharealt" size={24} color="red" />
                <Text style={styles.menuItemText}>Chia sẻ với bạn bè</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => {}}>
              <View style={styles.menuItem}>
                <FontAwesome5 name="user-check" size={24} color="red" />
                <Text style={styles.menuItemText}>Hỗ trợ</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handleLogout()}>
              <View style={styles.menuItem}>
                <SimpleLineIcons name="logout" size={24} color="red" />
                <Text style={styles.menuItemText}>Đăng xuất</Text>
              </View>
            </Pressable>
          </View>
      
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  /* loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }, */
})