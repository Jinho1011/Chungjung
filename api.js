import axios from "axios";

const makeRequest = () => axios.get("http://3.22.118.49:8080/policy/");

export const policyApi = {
  policy: () => makeRequest(),
};
