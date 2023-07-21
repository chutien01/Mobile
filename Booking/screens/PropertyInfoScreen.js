import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { pixelNormalize } from "../components/Normalise";
import { SafeAreaView } from "react-native-safe-area-context";
import PropertyCard from "../components/PropertyCard";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Amenities from "../components/Amenities";

const PropertyInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  //console.log(route.params);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
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
  const difference = route.params.oldPrice - route.params.newPrice;
  const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;
  return (
    <View>
      <ScrollView>
        <Pressable
          style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}
        >
          {route.params.photos.slice(0, 5).map((photo) => (
            <View style={{ margin: 6 }} key={photo.id}>
              <Image
                style={{
                  width: 100,
                  height: pixelNormalize(80),
                  borderRadius: pixelNormalize(4),
                }}
                source={{ uri: photo.image }}
              />
            </View>
          ))}
          <Pressable
            onPress={() =>
              navigation.navigate("ShowMore", {
                name: route.params.name,
                rating: route.params.rating,
                oldPrice: route.params.oldPrice,
                address: route.params.address,
                newPrice: route.params.newPrice,
                photos: route.params.photos,
                rooms: route.params.rooms,
                adults: route.params.adults,
                children: route.params.children,
                rooms: route.params.rooms,
                selectedDates: route.params.selectedDates,
              })
            }
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Text
              style={{
                textAlign: "center",
                marginLeft: 6,
                backgroundColor: "#ffff",
                width: 100,
                height: pixelNormalize(80),
                borderRadius: pixelNormalize(4),
                paddingVertical: 28,
              }}
            >
              Show More
            </Text>
          </Pressable>
          <View
            style={{
              padding: 10,
              backgroundColor: "#ffff",
              maxWidth: "100%",
              borderRadius: 5,
              //flexDirection:"row",
              //alignItems:"center",
              //justifyContent:"space-between"
            }}
          >
            {/* Start Content 1 */}
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                //backgroundColor:"red"
              }}
            >
              <Text
                style={{
                  width: "55%",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {route.params.name}
              </Text>
              {/* <AntDesign name="hearto" size={22} color="red" /> */}
              <View
                style={{
                  backgroundColor: "#17B169",
                  paddingHorizontal: 2,
                  paddingVertical: 4,
                  borderRadius: 6,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 13, fontWeight: "500" }}
                >
                  Travel sustainable
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                marginTop: 7,
                //backgroundColor:"red",
                //justifyContent:"center"
              }}
            >
              <MaterialIcons name="stars" size={20} color="green" />
              <Text>{route.params.rating}</Text>
              <View
                style={{
                  backgroundColor: "#003580",
                  paddingVertical: 3,
                  borderRadius: 5,
                  width: 100,
                }}
              >
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 13 }}
                >
                  Genius Level
                </Text>
              </View>
            </View>
            {/* End Content 1 */}

            <Text
              style={{
                borderColor: "#E0E0E0",
                borderWidth: 3,
                height: 1,
                marginTop: 15,
              }}
            />

            {/* Start Content 2 */}
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 6,
                marginTop: 6,
              }}
            >
              Giá phòng
            </Text>
            <View
              style={{
                marginTop: 5,
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Text
                style={{
                  color: "red",
                  fontSize: 18,
                  textDecorationLine: "line-through",
                }}
              >
                {route.params.oldPrice * route.params.adults}
              </Text>
              <Text style={{ fontSize: 18 }}>
                {route.params.newPrice * route.params.adults}
              </Text>
              <View
                style={{
                  backgroundColor: "#17B169",
                  paddingHorizontal: 6,
                  paddingVertical: 4,
                  borderRadius: 6,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 13, fontWeight: "500" }}
                >
                  {offerPrice.toFixed(0)} % OFF
                </Text>
              </View>
            </View>
            {/* End Content 2 */}

            <Text
              style={{
                borderColor: "#E0E0E0",
                borderWidth: 3,
                height: 1,
                marginTop: 15,
              }}
            />

            {/* Start Content 3 */}
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 60 }}
            >
              <View style={{ marginTop: 6 }}>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", marginBottom: 6 }}
                >
                  Từ ngày
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "600", color: "#007FFF" }}
                >
                  {route.params.selectedDates.startDate}
                </Text>
              </View>

              <View>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", marginBottom: 6 }}
                >
                  Đến ngày
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "600", color: "#007FFF" }}
                >
                  {route.params.selectedDates.endDate}
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 6 }}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", marginBottom: 6 }}
              >
                Phòng và khách
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: "600", color: "#007FFF" }}
              >
                {route.params.rooms} Phòng {route.params.adults} người lớn{" "}
                {route.params.children} trẻ em
              </Text>
            </View>
            {/* End Content 3 */}

            <Text
              style={{
                borderColor: "#E0E0E0",
                borderWidth: 3,
                height: 1,
                marginTop: 15,
              }}
            />

            {/* Start content 4 */}
            <Amenities />
            {/* End content 4 */}

            <Text
              style={{
                borderColor: "#E0E0E0",
                borderWidth: 3,
                height: 1,
                marginTop: 15,
              }}
            />
          </View>
        </Pressable>
      </ScrollView>
      <Pressable
        onPress={() =>
          navigation.navigate("Rooms", {
            name: route.params.name,
            rating: route.params.rating,
            oldPrice: route.params.oldPrice,
            newPrice: route.params.newPrice,
            rooms: route.params.availableRooms,
            adults: route.params.adults,
            children: route.params.children,
            startDate: route.params.selectedDates.startDate,
            endDate: route.params.selectedDates.endDate,
          })
        }
        style={{
          backgroundColor: "#6CB4EE",
          position: "absolute",
          bottom: 20,
          padding: 15,
          width: "98%",
          marginHorizontal: 2,
          borderRadius: 25,
        }}
      >
        <Text
          style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
        >
          Tiếp tục
        </Text>
      </Pressable>
    </View>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({});
