import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SavedScreen from './screens/SavedScreen';
import BookingScreen from './screens/BookingScreen';
import ProfileScreen from './screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './screens/SearchScreen';
import PlacesScreen from './screens/PlacesScreen';
import MapScreen from './screens/MapScreen';
import PropertyInfoScreen from './screens/PropertyInfoScreen';
import ShowMoreScreen from './screens/ShowMoreScreen';
import FullScreen from './screens/FullScreen';
import RoomsScreen from './screens/RoomsScreen';
import UserScreen from './screens/UserScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { MaterialIcons } from '@expo/vector-icons';
import InfoSavedScreen from './screens/InfoSavedScreen';
import IntroSlider from './screens/IntroSlider';

const StackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function BottomTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Trang chủ", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <Entypo name="home" size={24} color="#003580" />
                        ) : (
                            <AntDesign name="home" size={24} color="black" />
                        )
                    }}
                />
                <Tab.Screen
                    name="Save"
                    component={SavedScreen}
                    options={{
                        tabBarLabel: "Tin tức", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <MaterialIcons name="article" size={24} color="#003580" />
                        ) : (
                            <MaterialIcons name="article" size={24} color="black" />
                        )
                    }}
                />
                <Tab.Screen
                    name="Bookings"
                    component={BookingScreen}
                    options={{
                        tabBarLabel: "Thông báo", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <Ionicons name="notifications" size={24} color="#003580" />
                        ) : (
                            <Ionicons name="notifications-outline" size={24} color="black" />
                        )
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: "Tài khoản", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <Ionicons name="person" size={24} color="#003580" />
                        ) : (
                            <Ionicons name="person-outline" size={24} color="black" />
                        )
                    }}
                />
            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Onbroad" component={IntroSlider}  options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown: false}}/>
                <Stack.Screen name="Register" component={RegisterScreen}  options={{headerShown: false}}/>
                <Stack.Screen name="Main" component={BottomTabs}  options={{headerShown: false}}/>
                <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}} />
                <Stack.Screen name="Places" component={PlacesScreen} />
                <Stack.Screen name="Map" component={MapScreen} options={{headerShown: false}} />
                <Stack.Screen name="Info" component={PropertyInfoScreen} />
                <Stack.Screen name="ShowMore" component={ShowMoreScreen} />
                <Stack.Screen name="FullScreen" component={FullScreen} options={{headerShown: false}} />
                <Stack.Screen name="Rooms" component={RoomsScreen} />
                <Stack.Screen name="User" component={UserScreen} />
                <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
                <Stack.Screen name="InfoSaved" component={InfoSavedScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})