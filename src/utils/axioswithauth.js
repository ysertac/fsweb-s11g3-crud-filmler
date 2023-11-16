import axios from "axios";

export const axioswithauth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://localhost:9000/api/",
    headers: token ? { authorization: token } : {},
  });
};
