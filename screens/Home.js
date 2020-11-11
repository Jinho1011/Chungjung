import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <Text>Home</Text>
      <Button
        title="Detail"
        onPress={() => navigation.navigate("Detail")}
      ></Button>
    </View>
  );
};
