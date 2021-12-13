import { useState, useCallback, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./MainComponents/Homepage/Homepage";
import Login from "./MainComponents/login/Login";
import Resource from "./MainComponents/resource/Resource";
import Task from "./MainComponents/taskpage/Task";
import Dashboard from "./MainComponents/dashboard/Dashboard";
import { AuthContext } from "./Shared/Context/Auth-context";

let timerId;

function App() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [expiryTime, setExpiryTime] = useState(null);

  console.log(userId, token);

  const login = useCallback((id, token, expirationTime) => {
    const expiry =
      expirationTime || new Date(new Date().getTime() + 1000 * 60 * 60 * 6);
    setExpiryTime(expiry);

    localStorage.setItem(
      "userData",
      JSON.stringify({ userId: id, token: token, expiry: expiry.toISOString() })
    );
    setToken(token);
    setUserId(id);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setExpiryTime(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (token && expiryTime) {
      const time = expiryTime.getTime() - new Date().getTime();

      timerId = setTimeout(logout, time);
    } else {
      clearTimeout(timerId);
    }
  }, [token, expiryTime, logout]);

  useEffect(() => {
    let stored = localStorage.getItem("userData");
    if (stored) {
      stored = JSON.parse(stored);
      if (stored.token && new Date(stored.expiry) > new Date()) {
        login(stored.userId, stored.token, new Date(stored.expiry));
      }
    }
  }, [login]);

  let routes;
  // if (!token) {
  if (true) {
    routes = (
      <>
        <Route path="/login" element={<Login />} exact></Route>
        {/*for testing will be deleted*/}
        <Route path="/:id" element={<Dashboard />} exact></Route>
        <Route path="/:id/0" element={<Task />} exact></Route>
        <Route path="/:id/resource" element={<Resource />} exact></Route>

        <Route path="*" element={<Homepage />} exact></Route>
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/:id" element={<Dashboard />} exact></Route>
        <Route path="/:id/0" element={<Task />} exact></Route>
        <Route path="/:id/resource" element={<Resource />} exact></Route>
        <Route path="*" element={<Homepage />} exact></Route>
      </>
    );
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <Routes>{routes}</Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
