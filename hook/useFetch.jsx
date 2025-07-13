import { useEffect, useState, useCallback } from "react";

const useFetch = (fetchFunction, options = {}) => {
  const { initialData = null } = options;
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchFunction();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [fetchFunction]);

  const reset = () => {
    setData(null);
    setLoading(false);
    setError(null);
  };

  useEffect(() => {
    // Only fetch if we don't have initial data
    if (initialData === null) {
      fetchData();
    }
  }, [initialData, fetchData]);

  return { data, loading, error, refetch: fetchData, reset };
};
export default useFetch;
