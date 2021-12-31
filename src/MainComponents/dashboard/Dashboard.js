import React, { useEffect, useContext, useState } from "react";
import { useHttp } from "./../../Shared/Hooks/http-hook";
import Navbar from "./../../Shared/Components/Navbar/Navbar";
import Particle from "./../../Shared/Components/Particle/Particle";
import { AuthContext } from "./../../Shared/Context/Auth-context";
import "./dash.css";

const width = window.screen.width;
export default function Login() {
  const auth = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  const { sendRequest, clearError } = useHttp();

  useEffect(() => {
    clearError();
    const apiCall = async () => {
      try {
        const data = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/api/freshers/${auth.uid}`
        );
        // console.log(data);
        setUserData(data);
      } catch (err) {
        console.log(err);
      }
    };
    if (auth.uid) apiCall();
  }, [sendRequest, clearError, auth.uid]);

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <Navbar />
        <div style={{ minHeight: "100vh", backgroundColor: "black" }}>
          <Particle />
          {userData ? (
            <>
              <div
                className="card mx-auto my-3 shadow p-3 mb-5 bg-body rounded border border-info border-3"
                style={{
                  maxWidth: "75vw",
                  backgroundColor: "black",
                }}
              >
                <div
                  style={{ textAlign: "center" }}
                  className={`card-body d-flex justify-content-between ${
                    width <= 444 ? "flex-column m-auto" : ""
                  } `}
                >
                  <h1
                    style={{ fontSize: "7vw" }}
                    className="card-title golText"
                  >
                    {userData.user.name}
                  </h1>
                  <div className="mx-3">
                    <span style={{ fontSize: "7vw" }} className="golText">
                      Score:{userData.user.score[0]}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="card mx-auto my-3 shadow p-3 bg-body rounded border border-info"
                style={{
                  maxWidth: "66vw",
                  backgroundColor: "transparent",
                  textAlign: "center",
                }}
              >
                <h2 className="golText">{userData.user.rollid}</h2>
              </div>
              <div
                className="container  m-auto p-3 shadow p-3 mb-5 bg-body rounded border border-info border-2"
                style={{ maxWidth: "60vw", textAlign: "center" }}
              >
                <h4 className="golText">MORE TASK WILL BE ADDED SOON...</h4>
                <h3 className="golText">
                  UNTILL THEN COMPLETE THE FIRST TASK!
                </h3>
              </div>
              <div
                className="container  m-auto p-3 shadow p-3 mb-5 bg-body rounded border border-info border-2"
                style={{
                  maxWidth: "60vw",
                  backgroundColor: "black",
                  textAlign: "center",
                }}
              >
                <a href="/id/0">
                  <h1 className="golText">
                    {"<"} TASK 1 {">"}
                  </h1>
                </a>
              </div>
            </>
          ) : (
            <div
              className="container  m-auto p-3 shadow p-3 mb-5 bg-body rounded border border-error border-2"
              style={{ maxWidth: "60vw", textAlign: "center" }}
            >
              <h4 className="golText">LOADING ...</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
