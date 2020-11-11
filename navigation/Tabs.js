import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import Video from "../screens/Video";

const Tabs = createBottomTabNavigator();

export default ({ route, navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getFocusedRouteNameFromRoute(route) });
  }, [navigation, route]);

  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Favs" component={Favs} />
      <Tabs.Screen name="Video" component={Video} />
    </Tabs.Navigator>
  );
};
