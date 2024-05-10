// import { View } from "@gluestack-ui/config/build/theme";
// import { Text } from "@gluestack-ui/themed";
// import React from "react";

// const DrawerNavigator = () =>{
//   return(
//     <>
//     <View>
//       <Text>
//         DrawerNavigator
//       </Text>
//     </View>
//     </>
//   )
// }


import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../Pages/HomePage';
import ForgotPassword from '../Components/ForgotPassword';
import Login from '../Pages/Login';
import Siblings from '../Components/Siblings';
import Academic from '../Components/Academic';
import Contact from '../Components/Contact';
import Fingerprint from '../Components/Fingerprint';
import Settings from '../Components/Settings';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './BottomNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="HomePage">
      <Drawer.Screen name="HomePage" component={HomePage} />
      <Drawer.Screen name="BottomNavigator" component={BottomNavigator} />
    </Drawer.Navigator>

  );
}
export default DrawerNavigator;