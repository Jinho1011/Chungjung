import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => {
  console.log(navigation);
  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate("Search")}
        title="Go to Search"
      ></Button>
    </View>
  );
};
