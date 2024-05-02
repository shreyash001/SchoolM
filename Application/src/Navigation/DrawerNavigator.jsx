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
import HomePage from '../Components/HomePage';
import ForgotPassword from '../Components/ForgotPassword';
import Login from '../Pages/Login';
import Siblings from '../Components/Siblings';
import Academic from '../Components/Academic';
import Contact from '../Components/Contact';
import Fingerprint from '../Components/Fingerprint';
import Settings from '../Components/Settings';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{headerShown:true}}>
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Siblings" component={Siblings} />
      <Drawer.Screen name="Academic" component={Academic} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="ForgotPasssword" component={ForgotPassword} />
      <Drawer.Screen name="FingurePrint" component={Fingerprint} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Setting" component={Settings} />
   
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;