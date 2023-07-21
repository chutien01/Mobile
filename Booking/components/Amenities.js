import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Amenities = () => {
  const services = [
    {
      id: "0",
      name: "Dịch vụ phòng",
    },
    {
      id: "1",
      name: "Có wifi",
    },
    {
      id: "2",
      name: "Phòng cho gia đình",
    },
    {
      id: "3",
      name: "Có bãi đậu xe",
    },
    {
      id: "4",
      name: "Có hồ bơi",
    },
    {
      id: "5",
      name: "Có tivi",
    },
  ];
  return (
    <View style={{ marginTop: 6 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 6 }}>
        Phổ biến
      </Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}
      >
        {services.map((item, index) => (
          <View
            key={index}
            style={{
              margin:6,
              backgroundColor: "#007fff",
              paddingHorizontal: 18,
              paddingVertical: 5,
              borderRadius: 20,
            }}
          >
            <Text style={{color:"white"}}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Amenities;

const styles = StyleSheet.create({});
