import React, { useEffect, useState } from "react";
import { policyApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

export default () => {
  const [policies, setPolicy] = useState({
    policy: [],
    loading: true,
  });

  const getData = async () => {
    const policy = await policyApi.policy();
    setPolicy({
      policy: policy.data,
      loading: false,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <SearchPresenter {...policies}></SearchPresenter>;
};
