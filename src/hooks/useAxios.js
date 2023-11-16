import { useState } from "react";
import { axioswithauth } from "../utils/axioswithauth";

export const useAxios = ({
  reqType,
  endpoint,
  payload,
  config,
  initialData,
}) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const doReq = () => {
    setLoading(true);
    return axioswithauth()
      [reqType](endpoint, payload, config)
      .then((res) => {
        setData(res.data);
        return res.data;
      })
      .catch((error) => {
        setError(error);
        throw error;
      })
      .finally(() => setLoading(false));
  };
  return [data, doReq, loading, error];
};
