import React, { useEffect } from "react";
import { useHttp } from "./../../Shared/Hooks/http-hook";
import { useParams } from "react-router";

export default function Login() {
  const { userId } = useParams();

  const { loading, err, sendRequest, clearError } = useHttp();

  useEffect(() => {
    clearError();
    const apiCall = async () => {
      try {
        const data = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/api/freshers`
        );
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    apiCall();
  }, [sendRequest, clearError]);

  return (
    <div>
      <h1>HERE Dashboard</h1>
    </div>
  );
}
