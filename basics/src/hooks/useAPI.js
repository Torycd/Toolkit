import { useState, useEffect } from "react";

export const useAPI = (url, callback) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function handleApi() {
      callback?.();
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    handleApi();
  }, [callback, url]);

  return { loading, data, error };
};
