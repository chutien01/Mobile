import 'react-native-gesture-handler';

import React from 'react';
import DrawerNavigator from './navigation/DrawerNavigator';
import Login from './screens/Login';
import Register from './screens/Register';
import OnBoarding from './screens/OnBoarding';
import Landingscreen from './screens/LandingScreen';
import Menu from './screens/Menu';
import ProductInfo from './screens/ProductInfo';
import Category from './screens/Category';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBoarding' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Landingscreen" component={Landingscreen} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
        <Stack.Screen name="Category" component={Category} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}