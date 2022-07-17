import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed } from "../screens/Feed/Feed";
import { screenOptions } from "../utils/navigationOptions";
import { colors } from "../constants/colors";

import DiscountsStack from "./DiscountsStack";
import AcountStack from "./AcountStack";
import TurnsStack from "../screens/TurnsStack/TurnsStack";
import Header from "../shared/components/Header/Header";
import { TAB_BAR_HEIGHT } from "../helpers/app";
import { Pressable, View, Image } from "react-native";
import { images } from "../constants/images";
import { moderateScale } from "../shared/helpers/scaling";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  const navigator = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
        tabBarActiveTintColor: colors.orange,
        headerStyle: {
          backgroundColor: colors.brown,
        },
      })}
    >
      <Tab.Screen
        name="Descuentos"
        component={DiscountsStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Pressable
              onPress={() => {
                navigator.navigate("Descuentos");
              }}
            >
              <View style={{ borderTopLeftRadius: 10 }}>
                <Image
                  source={
                    focused ? images.discountOrange : images.discountWhite
                  }
                  resizeMode="contain"
                  resizeMethod="scale"
                  style={{
                    width: moderateScale(22, 1.5),
                    height: moderateScale(22, 1.5),
                  }}
                />
              </View>
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Pressable
              onPress={() => {
                navigator.navigate("Home");
              }}
            >
              <View style={{ borderTopLeftRadius: 10 }}>
                <Image
                  source={focused ? images.logoNaranja : images.logo}
                  resizeMode="contain"
                  resizeMethod="scale"
                  style={{
                    width: moderateScale(50, 1.5),
                    height: moderateScale(50, 1.5),
                  }}
                />
              </View>
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Turnos"
        component={TurnsStack}
        options={{
          headerShown: false,
          headerTintColor: colors.black,
          tabBarIcon: ({ focused }) => (
            <Pressable
              onPress={() => {
                navigator.navigate("Turnos");
              }}
            >
              <View style={{ borderTopLeftRadius: 10 }}>
                <Image
                  source={
                    focused
                      ? images.calendarIconOrange
                      : images.calendarIconWhite
                  }
                  resizeMode="contain"
                  resizeMethod="scale"
                  style={{
                    width: moderateScale(22, 1.5),
                    height: moderateScale(22, 1.5),
                  }}
                />
              </View>
            </Pressable>
          ),
        }}
      />
      {/* <Tab.Screen name="Cuenta" component={AcountStack} /> */}
    </Tab.Navigator>
  );
};

export default NavigationTab;
