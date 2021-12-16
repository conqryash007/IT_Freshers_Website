import React, { useState, useContext } from "react";
import "./login.css";
import { AuthContext } from "./../../Shared/Context/Auth-context";
import { useHttp } from "./../../Shared/Hooks/http-hook";
import logo from "./../../Assets/gifs/logo.gif";
import Navbar from "./../../Shared/Components/Navbar/Navbar";
import Particle from "./../../Shared/Components/Particle/Particle";
import Loader from "../../Shared/Components/MUIModal/Loader";
import { useNavigate } from "react-router";

export default function Login() {
  const nav = useNavigate();
  const Auth = useContext(AuthContext);

  const [state, setState] = useState({
    userId: "",
    password: "",
    formValid: false,
  });

  const { loading, err, sendRequest, clearError } = useHttp();

  const inputChange = (e) => {
    let str = e.target.value;
    if (e.target.name === "userId") {
      str = str.trim().toLowerCase();
    }
    setState({
      ...state,
      [e.target.name]: str,
      formValid: !!(state.userId.length === 7 && state.password),
    });
  };
  const submitFormHandler = async (e) => {
    e.preventDefault();
    clearError();
    const data = JSON.stringify({
      rollid: state.userId,
      password: state.password,
    });
    let fresherInfo;
    try {
      fresherInfo = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/api/freshers/login`,
        "POST",
        data,
        {
          "Content-Type": "application/json",
        }
      );
      // console.log(fresherInfo);
      Auth.login(fresherInfo.userId, fresherInfo.uid, fresherInfo.token);
      nav(`/${fresherInfo.uid}`);
    } catch (err) {
      // console.log(err);
    }
    setState({ userId: "", password: "" });
  };

  return (
    <>
      <Navbar />
      <Particle />
      {loading ? <Loader message="PROCESSING ..." open={loading} /> : null}
      <div className="bg">
        <form onSubmit={submitFormHandler} name="myform">
          <div className="section" id="on">
            <div className="container">
              <div className="row full-height justify-content-center">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <label className="word">FLIP</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                    label="asas"
                  />
                  <label className="word">VER</label>
                  <div className="card-3d-wrap-001 mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Log In</h4>
                            <div className="form-group">
                              <input
                                type="text"
                                name="userId"
                                className="form-style"
                                placeholder="College ID"
                                style={{ textTransform: "uppercase" }}
                                onChange={inputChange}
                                value={state.userId}
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <br />
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="password"
                                className="form-style"
                                placeholder="PASSWORD"
                                onChange={inputChange}
                                value={state.password}
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <br />
                            <div>
                              <p>{err}</p>
                            </div>
                            <button
                              disabled={!state.formValid}
                              className="btn"
                              type="submit"
                            >
                              Submit
                            </button>
                            <p className="mb-0 mt-4 text-center"></p>
                          </div>
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h3>INSTRUCTION FOR AUTHENTICATION</h3>
                            <p>
                              Password related details will be provided by the
                              CRs of IT.
                            </p>
                            <img
                              id="myImg"
                              className="onicha"
                              src={logo}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
