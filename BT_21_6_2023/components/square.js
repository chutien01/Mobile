import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function FormSquare({ label,bgColor }) {
  return (
    <View style={{
      backgroundColor: bgColor || 'black',
      width: 100,
      height: 100,
      margin: 4,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text style={styles.customSquare1}>{label}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  customSquare1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
});
