import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Search from '../screens/Search';
import Cart from '../screens/Cart';

import { Ionicons } from "@expo/vector-icons";
import { Image, View, Text } from 'react-native';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Menu"
            screenOptions={{
                /*   drawerActiveBackgroundColor: "#5EA33A",
                  drawerActiveTintColor: "#fff", */
                drawerContentContainerStyle: {
                    flex: 1,
                    justifyContent: 'center',
                    marginHorizontal: 20
                },
                headerShown: false,
            }}>
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'HOME',
                    drawerIcon: () => (
                        <Image
                            style={{
                                width: 25,
                                resizeMode: 'contain',
                            }}
                            source={require('../assets/MenuIcon/home.png')}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Menu"
                component={Menu}
                options={{
                    title: 'MENU',
                    drawerIcon: () => (
                        <Image
                            style={{
                                width: 25,
                                resizeMode: 'contain',
                            }}
                            source={require('../assets/MenuIcon/menu.png')}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Search"
                component={Search}
                options={{
                    title: 'SEARCH',
                    drawerIcon: () => (
                        <Image
                            style={{
                                width: 25,
                                resizeMode: 'contain',
                            }}
                            source={require('../assets/MenuIcon/search.png')}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: 'Cart',
                    drawerIcon: () => (
                        <Image
                            style={{
                                width: 25,
                                resizeMode: 'contain',
                            }}
                            source={require('../assets/MenuIcon/cart.png')}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator