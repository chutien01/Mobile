import { StyleSheet, Text, View,ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { pixelNormalize } from "../components/Normalise";
//No use
const FullScreen = () => {
  const route = useRoute();
  //console.log(route.params.url)
  //const deviceHeight = Dimensions.get('window').height;
  //const deviceWidth = Dimensions.get('window').width;
  return (
    <View>
      <ImageBackground
            source={{uri:route.params.url}}
            style={{height: '70%',width:'100%',marginTop: "50%"}}
      />
    </View>
  )
}

export default FullScreen

const styles = StyleSheet.create({})