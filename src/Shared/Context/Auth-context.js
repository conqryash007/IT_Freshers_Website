import { createContext } from "react";

export const AuthContext = new createContext({
  isLoggedIn: false,
  userId: null,
  login: () => {},
  logout: () => {},
});
