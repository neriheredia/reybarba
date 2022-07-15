import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Landing from "./navigation/Landing";

export default function Main() {
  return (
    <NavigationContainer>
      <Landing />
    </NavigationContainer>
  );
}
