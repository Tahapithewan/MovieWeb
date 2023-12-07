import { useEffect, useState } from "react";
import fetchDataFromApi from "../utils/api";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    getData(url);
  }, [url]);

  const getData = async () => {
    try {
      const data = await fetchDataFromApi(url);
      setLoading(false);
      setData(data);
    } catch (err) {
      setLoading(false);
      setError("Something went wrong !");
    }
  };
  return { data, loading, error };
};

export default useFetch;
