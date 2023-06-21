import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';
import HomScreen from './screens/HomScreen';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import OnbroadScroll from './screens/OnbroadScroll';

const StackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function BottomTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomScreen}
                    options={{
                        tabBarLabel: "Home", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <Entypo name="home" size={24} color="#003580" />
                        ) : (
                            <AntDesign name="home" size={24} color="black" />
                        )
                    }}
                />
                <Tab.Screen
                    name="Landing"
                    component={LandingScreen}
                    options={{
                        tabBarLabel: "Lading", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <Ionicons name="fast-food-outline" size={24} color="#003580" />
                        ) : (
                            <Ionicons name="fast-food-outline" size={24} color="black" />
                        )
                    }}
                />
                <Tab.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        tabBarLabel: "Login", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <AntDesign name="login" size={24} color="#003580" />
                        ) : (
                            <AntDesign name="login" size={24} color="black" />
                        )
                    }}
                />
                <Tab.Screen
                    name="Register"
                    component={SignupScreen}
                    options={{
                        tabBarLabel: "Register", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <FontAwesome5 name="user-edit" size={24} color="#003580" />
                        ) : (
                            <FontAwesome5 name="user-edit" size={24} color="black" />
                        )
                    }}
                />
                <Tab.Screen
                    name="OnbroadScoll"
                    component={OnbroadScroll}
                    options={{
                        tabBarLabel: "OnbroadScoll", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <FontAwesome5 name="scroll" size={24} color="#003580" />
                        ) : (
                            <FontAwesome5 name="scroll" size={24} color="black" />
                        )
                    }}
                />
            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={BottomTabs}  options={{headerShown: false}}/>
                {/* <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}} />
                <Stack.Screen name='Places' component={PlacesScreen}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})