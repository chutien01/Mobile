import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  FlatList,
  Animated,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header2 from "../components/Header2";

const SPACING = 10;
export default function ProductInfo({ route, navigation }) {
  const width = Dimensions.get("window").width;
  const { detail } = route.params;
  //console.log(detail);
  const { height } = Dimensions.get("window");

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  const renderProduct = ({ item, index }) => {
    return (
      <View
        style={{
          width: width,
          height: 240,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={item}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
        />
      </View>
    );
  };

  return (
    <>
      <View style={{ paddingHorizontal: 10, paddingTop: 40 }}>
        <ScrollView>
          <Header2
            type={detail.type}
            title={detail.name}
            navigation={navigation}
          />
          <View>
            <Text>{detail.name}</Text>

            <FlatList
              data={detail.imageList ? detail.imageList : null}
              horizontal
              renderItem={renderProduct}
              showsHorizontalScrollIndicator={false}
              decelerationRate={0.8}
              snapToInterval={width}
              bounces={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
            />
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              {detail.imageList
                ? detail.imageList.map((data, index) => {
                    let opacity = position.interpolate({
                      inputRange: [index - 1, index, index + 1],
                      outputRange: [0.2, 1, 0.2],
                      extrapolate: "clamp",
                    });
                    return (
                      <Animated.View
                        key={index}
                        style={{
                          width: "16%",
                          height: 2.4,
                          backgroundColor: "#000",
                          opacity,
                          marginHorizontal: 4,
                          borderRadius: 100,
                        }}
                      ></Animated.View>
                    );
                  })
                : null}
            </View>
            <Text>{detail.description}</Text>
          </View>
          <SafeAreaView style={{ alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: 150,
                borderWidth: 2,
                borderColor: "#9B9B9B",
                borderRadius: SPACING * 3,
                padding: SPACING,
              }}
            >
              <TouchableOpacity>
                <Ionicons name="remove" size={SPACING * 3}></Ionicons>
              </TouchableOpacity>
              <Text style={{ width: 20, alignSelf: "center" }}>1</Text>
              <TouchableOpacity>
                <Ionicons name="add" size={SPACING * 3}></Ionicons>
              </TouchableOpacity>
            </View>
            <View
              style={{
                padding: SPACING * 2,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginRight: 10,
                  borderWidth: 2,
                  borderColor: "#000",
                  padding: SPACING,
                  borderRadius: SPACING,
                }}
              >
                ${detail.price}
              </Text>

              <TouchableOpacity
                style={{
                  padding: SPACING,
                  backgroundColor: "#5EA33A",
                  flex: 1,
                  alignItems: "center",
                  borderRadius: SPACING,
                }}
                onPress={() =>
                  navigation.navigate("Cart", {
                    detail
                  })
                }
              >
                <Text
                  style={{
                    fontSize: SPACING * 2,
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  Add To Cart
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    </>
  );
}
