import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NavigationTab from "./NavigationTab";
import LandingPage from "../screens/Landing/Landing";
import Register from "../screens/Auth/Register/Register";
import Login from "../screens/Auth/Login/Login";
import DetailPublication from '../screens/DetailPublication/DetailPublication';
import { colors } from '../constants/colors';

const Stack = createNativeStackNavigator();

const Landing = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="NavigationTab" component={NavigationTab} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Detail" component={DetailPublication}
        options={{
          headerShown:true,
          headerTitle: "Detalle de Publicacion",
          headerStyle:{
            backgroundColor:colors.orange
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default Landing;
