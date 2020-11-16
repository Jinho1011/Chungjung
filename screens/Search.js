import React from "react";
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
    console.log(policy.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};
