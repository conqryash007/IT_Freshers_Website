import { useCallback, useState, useRef, useEffect } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const activeHttpReq = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);

      const httpAbortCtrl = new AbortController();
      activeHttpReq.current.push(httpAbortCtrl);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });
        const resData = await response.json();

        activeHttpReq.current = activeHttpReq.current.filter(
          (curr) => curr !== httpAbortCtrl
        );

        if (!response.ok) {
          throw new Error(resData.message);
        }

        setLoading(false);
        return resData;
      } catch (err) {
        setLoading(false);
        setErr(err.message || "Something went wrong !");
        throw err;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setErr(null);
  }, []);

  useEffect(() => {
    return () => {
      activeHttpReq.current.forEach((curr) => curr.abort());
    };
  }, []);

  return { loading, err, sendRequest, clearError };
};
