import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NavigationTab from "./NavigationTab";
import LandingPage from "../screens/Landing/Landing";

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
    </Stack.Navigator>
  );
};

export default Landing;
