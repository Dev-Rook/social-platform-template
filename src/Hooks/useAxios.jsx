import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getApiData = useCallback(async () => {
    setLoading(true);

    try {
      const result = await axios.get(url);
      setData(result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return { data, loading, error };
};

export default useAxios;
