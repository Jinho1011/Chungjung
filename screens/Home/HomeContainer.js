import React, { useEffect, useState } from "react";
import { policyApi } from "../../api";
import HomePresenter from "./HomePresenter";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
  const [policies, setPolicy] = useState({
    policy: [],
    filtered: [],
    loading: true,
    user: {},
  });

  const getData = async () => {
    const rawPolicy = await policyApi.policy();
    const USER = await AsyncStorage.getItem("@USER");
    const EDU = JSON.parse(USER).edu;
    const policy = rawPolicy.data;
    var filterdPolicy = [];

    policy.map((p) => {
      if (p.edu.includes(EDU) || p.edu == "무관") {
        filterdPolicy.push(p);
      }
    });

    setPolicy({
      policy,
      filtered: filterdPolicy,
      loading: false,
      user: JSON.parse(USER),
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <HomePresenter {...policies}></HomePresenter>;
};
