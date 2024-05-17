
import { Text, View } from "@gluestack-ui/themed";
import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from "../Pages/Login";
import HomePage from "../Pages/HomePage";
import ForgotPassword from "../Components/ForgotPassword";
import DrawerNavigator from "./DrawerNavigator";
import BottomNavigator from "./BottomNavigator";
import ProfilePage from "../Pages/ProfilePage";
import Faq from "../Pages/Faq";



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigation = () => {


    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginPage" component={Login} />
                <Stack.Screen name="BottomNavigation" component={DrawerNavigator} />
                <Stack.Screen name="help" component={Faq} />
                <Stack.Screen name="Profile" component={ProfilePage} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;