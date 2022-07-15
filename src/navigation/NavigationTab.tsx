import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed } from "../screens/Feed";
import DiscountsStack from "./DiscountsStack";
import TurnsStack from "./TurnsStack";
import AcountStack from "./AcountStack";

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="feed"
        component={Feed}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="discountsStack" component={DiscountsStack} />
      <Tab.Screen name="turnsStack" component={TurnsStack} />
      <Tab.Screen name="acountStack" component={AcountStack} />
    </Tab.Navigator>
  );
};

export default NavigationTab;
