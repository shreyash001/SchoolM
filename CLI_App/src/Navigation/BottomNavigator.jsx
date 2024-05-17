import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from "../Pages/HomePage";
import Settings from "../Components/Settings";
import DrawerNavigator from "./DrawerNavigator";
import { Icon } from "@gluestack-ui/themed";
import { GripVerticalIcon } from "@gluestack-ui/themed";
import { SettingsIcon } from "@gluestack-ui/themed";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator 
    initialRouteName="HomePage"
    screenOptions={{ headerShown: false,
      tabBarActiveTintColor:'red',
      tabBarInactiveTintColor:'black',
      tabBarShowLabel: false,
      tabBarStyle:{
        backgroundColor: "#ADD8E6"
      }
     }}
    >
      <Tab.Screen name="HomePage" component={HomePage} options={{
        tabBarIcon: ({focused }) => {
          return (
            <Icon as={GripVerticalIcon} style = {{ tintColor: focused ? 'red':'black' }}/>
          )
        }
      }}/>
      <Tab.Screen name="Settings" component={Settings} options={{
        tabBarIcon: ({focused }) => {
          return (
            <Icon as={SettingsIcon} style = {{ tintColor: focused ? 'red':'black' }}/>
          )
        }
      }}/>
    </Tab.Navigator>
  );
}
export default BottomNavigator;