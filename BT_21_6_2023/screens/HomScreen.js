import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation} from "@react-navigation/native";
import Onboarding from "react-native-onboarding-swiper";
import { MaterialIcons } from "@expo/vector-icons";
const HomScreen = () => {
    const navigation = useNavigation();
    /* const Done = ({...props}) => (
        <TouchableOpacity
        {...props}
        >
        <Text style={{fontSize:16, marginHorizontal:20,color:"white"}}>Done</Text>
        </TouchableOpacity>
    ) */

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
            image: (
              <MaterialIcons
                name="screen-search-desktop"
                size={50}
                color="white"
              />
            ),
            title: "Welcome",
            subtitle: "Welcome to the first slide of the Onboarding Swiper.",
          },
          {
            backgroundColor: "#F5F55F",
            image: (
              <MaterialIcons
                name="screen-search-desktop"
                size={50}
                color="white"
              />
            ),
            title: "Welcome",
            subtitle: "Welcome to the first slide of the Onboarding Swiper.",
          },
          {
            backgroundColor: "blue",
            image: (
              <MaterialIcons
                name="screen-search-desktop"
                size={50}
                color="white"
              />
            ),
            title: "Welcome",
            subtitle: "Welcome to the first slide of the Onboarding Swiper.",
          },
          {
            backgroundColor: "red",
            image: (
              <MaterialIcons
                name="screen-search-desktop"
                size={50}
                color="white"
              />
            ),
            title: "Welcome",
            subtitle: "Welcome to the first slide of the Onboarding Swiper.",
          },
          {
            backgroundColor: "green",
            image: (
              <MaterialIcons
                name="screen-search-desktop"
                size={50}
                color="white"
              />
            ),
            title: "Welcome",
            subtitle: "Welcome to the first slide of the Onboarding Swiper.",
          },
        ]}
      />
    </View>
  );
};

export default HomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
});
