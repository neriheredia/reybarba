import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed } from "../screens/Feed";
import { screenOptions } from "../utils/navigationOptions";

import DiscountsStack from "./DiscountsStack";
import TurnsStack from "./TurnsStack";
import AcountStack from "./AcountStack";

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#000",
        },
        tabBarIcon: ({ color }) => screenOptions(route, color),
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "white",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Descuentos" component={DiscountsStack} />
      <Tab.Screen name="Turnos" component={TurnsStack} />
      <Tab.Screen name="Cuenta" component={AcountStack} />
    </Tab.Navigator>
  );
};

export default NavigationTab;
