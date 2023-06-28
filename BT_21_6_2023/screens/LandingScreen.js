import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from "react-native-onboarding-swiper";
import { Ionicons } from '@expo/vector-icons';
const LandingScreen = () => {
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
            image: <Ionicons name="fast-food-outline" size={50} color="white" />,
            title: "Welcome",
            subtitle: "Welcome to the first slide of the Onboarding Swiper.",
          },
          {
            backgroundColor: "#F5F55F",
            image: <Ionicons name="fast-food-outline" size={50} color="white" />,
            title: "Welcome",
            subtitle: "Welcome to the first slide of the Onboarding Swiper.",
          },
          {
            backgroundColor: "blue",
            image: <Ionicons name="fast-food-outline" size={50} color="white" />,
            title: "Welcome",
            subtitle: "Welcome to the first slide of the Onboarding Swiper.",
          },
          {
            backgroundColor: "red",
            image: <Ionicons name="fast-food-outline" size={50} color="white" />,
            title: "Welcome",
            subtitle: "Welcome to the first slide of the Onboarding Swiper.",
          },
          {
            backgroundColor: "green",
            image: <Ionicons name="fast-food-outline" size={50} color="white" />,
            title: "Welcome",
            subtitle: "Welcome to the first slide of the Onboarding Swiper.",
          },
        ]}
      />
    </View>
  )
}

export default LandingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
      },
})