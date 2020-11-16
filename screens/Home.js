import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { policyApi } from "../api";

export default () => {
  const [policies, setPolicy] = useState({
    policy: [],
  });

  const getData = async () => {
    const policy = await policyApi.policy();
    setPolicy({
      policy: policy.data,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Text>{policies.policy[0].age}</Text>
    </View>
  );
};
