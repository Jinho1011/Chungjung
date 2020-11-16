import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => {
  return (
    <View>
      <Text>Detail</Text>
      <Button
        title="TO HOME"
        onPress={() => navigation.navigate("Tab")}
      ></Button>
    </View>
  );
};
