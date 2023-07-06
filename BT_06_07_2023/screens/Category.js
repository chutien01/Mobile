import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import Header2 from "../components/Header2";
import { sandwiches } from "../data/database";
import popular from "../data/popular";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Category({ route, navigation }) {
  const { cate } = route.params;

  return (
    <View style={{ paddingHorizontal: 10, paddingTop: 40 }}>
      <ScrollView>
        <Header2 type="Back" title={cate} navigation={navigation} />
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
          {popular.map((e, i) => (
            <View
              style={{
                //backgroundColor:"red",
                marginLeft: 10
              }}
              key={i}
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
                  source={e.image}
                />
                <Text style={{ color: "black",fontWeight:"500",fontSize:16 }}>${e.price}</Text>
                <Text style={{ color: "black",fontWeight:"500",fontSize:14 }}>{e.name}</Text>
                <Text style={{ color: "#C0C0C0",fontSize:14 }}>{e.description}</Text>
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
