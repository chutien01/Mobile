import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { pixelNormalize } from "../components/Normalise";
import { SafeAreaView } from "react-native-safe-area-context";
//import PropertyCard from "../components/PropertyCard";

const ShowMoreScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState(route.params.photos);
  //console.log(data);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Album",
      headerTitleAlign: "center", // Set text center IOS & Android
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerTintColor: "white", // To change color of the arrow
    });
  }, []);
  const { width, height } = Dimensions.get("window");
  //const height = width * 0.6;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Start Use FullScrean  */}
      {/* <ScrollView
      >
        <Pressable
        style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}
        >
          {route.params.photos.map((photo) => (
            <Pressable
              style={{ margin: 6 }}
              key={photo.id}
              onPress={() =>
                navigation.navigate("FullScreen", {
                  url: photo.image,
                })
              }
            >
              <Image
                style={{
                  width: 100,
                  height: pixelNormalize(170),
                  borderRadius: pixelNormalize(4),
                }}
                source={{ uri: photo.image }}
              />
            </Pressable>
          ))}
        </Pressable>
      </ScrollView> */}
      {/* End Use FullScrean  */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            height: height / 2 + 5,
            justifyContent: "center",
            alignItems: "center",
            //backgroundColor:"red"
          }}
        >
          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={(e) => {
              const x = e.nativeEvent.contentOffset.x;
              setCurrentIndex((x / width).toFixed(0));
            }}
            horizontal
            renderItem={({ item, index }) => {
              //console.log(index)
              return (
                <View
                  style={{
                    width: width,
                    height: height / 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    disabled={true}
                    style={{
                      width: "90%",
                      height: "90%",
                      backgroundColor: "green",
                      borderRadius: 10,
                    }}
                  >
                    <Image
                      key={item}
                      style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "cover",
                      }}
                      source={{ uri: item.image }}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: width,
            justifyContent: "center",
            alignItems: "center",
            //backgroundColor:"blue"
          }}
        >
          {data.map((item, index) => {
            return (
              <View
                key={item.id}
                style={{
                  width: currentIndex == index ? 50 : 8,
                  height: currentIndex == index ? 10 : 8,
                  borderRadius: currentIndex == index ? 5 : 4,
                  backgroundColor: currentIndex == index ? "#003580" : "gray",
                  marginLeft: 5,
                }}
              ></View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default ShowMoreScreen;

const styles = StyleSheet.create({});
