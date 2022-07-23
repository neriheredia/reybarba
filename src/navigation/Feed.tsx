import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NavigationTab from "./NavigationTab";
import Register from "../screens/Auth/Register/Register";
import Login from "../screens/Auth/Login/Login";
import DetailPublication from '../screens/DetailPublication/DetailPublication';
import { Feed } from "../screens/Feed/Feed";

const Stack = createNativeStackNavigator();

const FeedNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="FeedNavigation"
        component={Feed}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="DetailPublication" component={DetailPublication} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default FeedNavigation;