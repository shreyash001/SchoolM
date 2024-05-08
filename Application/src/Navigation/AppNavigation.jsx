
import { Text, View } from "@gluestack-ui/themed";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../Pages/Login";
import HomePage from "../Pages/HomePage";
import ForgotPassword from "../Components/ForgotPassword";
import DrawerNavigator from "./DrawerNavigator";
import BottomNavigator from "./BottomNavigator";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {


    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginPage" component={Login} />
                <Stack.Screen name="DrawerNavigtor" component={DrawerNavigator} screenOptions={{ headerShown: false }} />
                <Stack.Screen name="BottomNavigator" component={BottomNavigator} screenOptions={{ headerShown: true }} />
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default AppNavigation;