import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  const { login, logout, isLogged, register, user, token } =
    useContext(AuthContext);

  // separeted for property backreading
  return { login, logout, isLogged, register, user, token };
};
