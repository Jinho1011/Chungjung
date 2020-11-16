import React from "react";
import { View, Text, Button } from "react-native";
import { Input } from "react-native-elements";
import { CommonActions } from "@react-navigation/native";

export default ({ navigation, routes }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Text>인적 사항을 입력해주세요</Text>
      {/* NAME */}
      <Input placeholder="BASIC INPUT" />

      {/* SEX */}

      {/* AGE */}

      {/* REGION */}

      {/* EDUCATION */}

      {/* BUTTON */}

      <Input
        placeholder="Comment"
        leftIcon={{ type: "font-awesome", name: "comment" }}
        onChangeText={(value) => this.setState({ comment: value })}
      />

      <Button
        title="TO HOME"
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "Tab" }],
            })
          );
        }}
      ></Button>
    </View>
  );
};
