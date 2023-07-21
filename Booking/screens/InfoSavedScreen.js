import { SafeAreaView, StyleSheet, Text, View ,Image,ScrollView} from 'react-native'
import React,{useState, useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

const InfoSavedScreen = ({route}) => {
  const { news } = route.params;
  const paragraphs = news.content.split('\n');
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Chi tiết",
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
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.newsTitle}>{news.title}</Text>
    <Image source={news.image} style={styles.newsImage} />
    <ScrollView>
      {paragraphs.map((paragraph, index) => (
        <Text key={index} style={styles.newsContent}>
          {paragraph}
        </Text>
      ))}
    </ScrollView>
  </SafeAreaView>
  )
}

export default InfoSavedScreen

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 16,
    marginTop: "10%",
  },
  newsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  newsContent: {
    fontSize: 16,
    marginTop:10
  },
  newsImage: {
    width: "100%",
    height: 200,
    marginRight: 16,
    borderRadius: 4,
  },
})