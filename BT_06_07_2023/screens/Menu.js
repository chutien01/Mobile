import React from 'react'
import Header from '../components/Header';
import { View, TouchableOpacity, ImageBackground, ScrollView, Text } from 'react-native';
import menu from '../data/menu';

const Menu = ({ navigation }) => {
    return (
        <View style={{ paddingHorizontal: 10, paddingTop: 40 }}>
            <Header navigation={navigation} />
            <ScrollView>
                <View
                    style={{
                        flexDirection:"column",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        marginBottom: 20,
                    }}
                >
                    {menu.map((e, i) => (
                        <TouchableOpacity
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                height: 115,
                                marginBottom: 20,
                            }}
                            key={i}
                            onPress={() =>
                            navigation.navigate("Category", { cate: e.name })
                    }
                        >
                            <ImageBackground
                                style={{
                                    width: "100%",
                                    height: 120,
                                    resizeMode: 'contain',
                                    position: 'absolute',

                                }}
                                source={e.image}>
                                <View style={{
                                    flex: 1,
                                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{ position: 'absolute', color: '#fff' }}>{e.name}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default Menu;