
import { Text, View } from "@gluestack-ui/themed";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../Pages/Login";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="LoginPage" component={Login} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default AppNavigation;