import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed } from "../screens/Feed";
import { screenOptions } from "../utils/navigationOptions";
import { colors } from "../constants/colors";

import DiscountsStack from "./DiscountsStack";
import TurnsStack from "./TurnsStack";
import AcountStack from "./AcountStack";

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: colors.black,
        },
        tabBarIcon: ({ color }) => screenOptions(route, color),
        tabBarInactiveTintColor: colors.gray,
        tabBarActiveTintColor: colors.white,
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
