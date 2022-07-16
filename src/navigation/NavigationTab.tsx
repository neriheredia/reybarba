import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed } from "../screens/Feed";
import DiscountsStack from "./DiscountsStack";
import AcountStack from "./AcountStack";
import TurnsStack from "../screens/TurnsStack/TurnsStack";
import Header from '../shared/components/Header/Header';
import { TAB_BAR_HEIGHT } from '../helpers/app';
import { colors } from '../constants/colors';

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false, 
      tabBarShowLabel: false,
      tabBarStyle: {
          backgroundColor: colors.brown,
          height: TAB_BAR_HEIGHT,
          borderColor:colors.brown
      },
      
      tabBarHideOnKeyboard: true,
      headerStyle:{
        backgroundColor:colors.orange,
      },
    }} 
    >
      <Tab.Screen
        name="feed"
        component={Feed}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="discountsStack" component={DiscountsStack} />
      <Tab.Screen
      
        name="turnsStack"
        component={TurnsStack}
        options={{
          headerShown:false,
          headerTintColor:"red",
      }}
      />
      <Tab.Screen name="acountStack" component={AcountStack} />
    </Tab.Navigator>
  );
};

export default NavigationTab;
