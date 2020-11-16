import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Detail from "../screens/Detail";
import Input from "../screens/Input";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Input"
    screenOptions={{
      // headerShown: false,
      headerStyle: {
        backgroundColor: "white",
        borderBottomColor: "white",
        shadowColor: "white",
      },
      headerTintColor: "black",
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen name="Tab" component={Tabs}></Stack.Screen>
    <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
    <Stack.Screen name="Input" component={Input}></Stack.Screen>
  </Stack.Navigator>
);
