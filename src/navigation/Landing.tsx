import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LandingPage } from "../screens/LandingPage";
import NavigationTab from "./NavigationTab";

const Stack = createNativeStackNavigator();

const Landing = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="NavigationTab" component={NavigationTab} />
    </Stack.Navigator>
  );
};

export default Landing;
