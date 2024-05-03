import { useState, useEffect, useCallback, memo } from "react";

export const useApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  console.log("useapi hook");

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch data");
      const json = await response.json();
      setData(json);
      console.log(json)
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url]);
  
  useEffect(() => {
    setError(false);
    fetchData();
  }, [url, fetchData]);

  console.log(data)
  return { loading, data, error };
};