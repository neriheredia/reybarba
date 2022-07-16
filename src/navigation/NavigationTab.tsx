import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed } from "../screens/Feed";
import { screenOptions } from "../utils/navigationOptions";
import { colors } from "../constants/colors";

import DiscountsStack from "./DiscountsStack";
import AcountStack from "./AcountStack";
import TurnsStack from "../screens/TurnsStack/TurnsStack";
import Header from "../shared/components/Header/Header";
import { TAB_BAR_HEIGHT } from "../helpers/app";

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.brown,
          height: TAB_BAR_HEIGHT,
          borderColor: colors.brown,
        },
        tabBarIcon: ({ color }) => screenOptions(route, color),
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: colors.gray,
        tabBarActiveTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.orange,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Descuentos" component={DiscountsStack} />
      <Tab.Screen
        name="Turnos"
        component={TurnsStack}
        options={{
          headerShown: false,
          headerTintColor: "red",
        }}
      />
      <Tab.Screen name="Cuenta" component={AcountStack} />
    </Tab.Navigator>
  );
};

export default NavigationTab;
