import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../screens/Search";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}></Stack.Screen>
    <Stack.Screen name="Search" component={Search}></Stack.Screen>
  </Stack.Navigator>
);
