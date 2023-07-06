import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import Header2 from "../components/Header2";
import { sandwiches } from "../data/database";
import popular from "../data/popular";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";

export default function Cart({ route, navigation }) {
    const cate = useRoute();
  return (
    <View style={{ paddingHorizontal: 10, paddingTop: 40 }}>
      <ScrollView>
        <Header2 type="Back" navigation={navigation} />
        <View
          style={
            {
              flexDirection: "row",
              flexWrap: "wrap",
              //justifyContent: "space-between",
              //alignItems:"center",
              //backgroundColor:"blue",
            }
          }
        >
            <View
              style={{
                //backgroundColor:"red",
                marginLeft: 10
              }}
              key={cate.id}
            >
              <Pressable
                onPress={() =>
                  navigation.navigate("ProductInfo", { detail: e })
                }
                style={{ width: 160, padding: 5 }}
              >
    
                <Image
                  style={{
                    width: 150,
                    height: 260,
                    resizeMode: "cover",
                  }}
                  source={cate.params.detail.image}
                />

                <Text style={{ color: "black",fontWeight:"500",fontSize:16 }}>${cate.params.detail.price}</Text>
                <Text style={{ width: "100%"}}>Quantity: 1</Text>
                <Text style={{ color: "black",fontWeight:"500",fontSize:14 }}>{cate.params.detail.name}</Text>
                <Text style={{ color: "#C0C0C0",fontSize:14 }}>{cate.params.detail.description}</Text>
              </Pressable>
            </View>
        </View>
      </ScrollView>
    </View>
  );
}