import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from "../Components/HomePage";
import Settings from "../Components/Settings";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
export default BottomNavigator;