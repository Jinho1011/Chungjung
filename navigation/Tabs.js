import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();

export default ({ route, navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: getFocusedRouteNameFromRoute(route) || "Home",
      //   headerShown: false,
      //   headerStyle: {
      //     backgroundColor: "blue",
      //   },
    });
  }, [navigation, route]);

  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";

          if (route.name == "Home") {
            iconName += "home";
          } else if (route.name == "Favs") {
            iconName += "heart";
          } else if (route.name == "Search") {
            iconName += "search";
          }

          return (
            <Ionicons
              name={iconName}
              color={focused ? "black" : "grey"}
              size={24}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "white",
          borderTopColor: "white",
        },
      }}
    >
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Favs" component={Favs} />
    </Tabs.Navigator>
  );
};
