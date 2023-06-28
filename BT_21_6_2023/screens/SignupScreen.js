import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from "react-native-onboarding-swiper";
import { FontAwesome5 } from '@expo/vector-icons';

const SignupScreen = () => {
    const Dots = ({selected}) => {
        let backgroundColor;
        backgroundColor = selected ? 'white' : 'black'
        return (
        <View
        style={{
            width:10,
            height:3,
            marginHorizontal:3,
            backgroundColor
        }}
        />
        )
    }
  return (
    <View style={styles.container}>
      <Onboarding
        showSkip={false}
        showNext={false}
        //DoneButtonComponent={Done}
        DotComponent={Dots}
        pages={[
          {
            backgroundColor: "#a6e4d0",
            image: <FontAwesome5 name="user-edit" size={50} color="white" />,
            title: "Welcome",
            subtitle: "Welcome to the first slide of the Onboarding Swiper.",
          },
          {
            backgroundColor: "#F5F55F",
            image: <FontAwesome5 name="user-edit" size={50} color="white" />,
            title: "Welcome",
            subtitle: "Welcome to the first slide of the Onboarding Swiper.",
          },
          {
            backgroundColor: "blue",
            image: <FontAwesome5 name="user-edit" size={50} color="white" />,
            title: "Welcome",
            subtitle: "Welcome to the first slide of the Onboarding Swiper.",
          },
          {
            backgroundColor: "red",
            image: <FontAwesome5 name="user-edit" size={50} color="white" />,
            title: "Welcome",
            subtitle: "Welcome to the first slide of the Onboarding Swiper.",
          },
          {
            backgroundColor: "green",
            image: <FontAwesome5 name="user-edit" size={50} color="white" />,
            title: "Welcome",
            subtitle: "Welcome to the first slide of the Onboarding Swiper.",
          },
        ]}
      />
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },})