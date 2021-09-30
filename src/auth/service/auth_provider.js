import { useCallback, useMemo, useState } from "react";
import { AuthContext } from "./auth_context";

export const AuthProvider = ({ children }) => {
  const value = useAuthProviderHandler();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// isolation for unit testing
export const useAuthProviderHandler = (defaultValue = {}) => {
  const [state, setState] = useState({
    token: null,
    user: null,
    expireAt: null,
    error: null,
    loading: false,
    ...defaultValue,
  });

  const login = useCallback(
    async (data, onSuccess, onFailure) => {
      try {
        // process login
        setState((store) => ({ ...store, loading: true }));

        // random api response
        const response = {
          user: { name: "Gwapa" },
          token: "user token",
          expireAt: 1641942962294,
        };
        setState((store) => ({
          ...store,
          user: response.user,
          token: response.token,
          expireAt: response.expireAt,
          loading: false,
          error: null,
        }));
        if (onSuccess) {
          onSuccess();
        }
      } catch (e) {
        setState((store) => ({
          ...store,
          loading: false,
          error: "error login in",
        }));
        if (onFailure) {
          onFailure();
        }
      }
    },
    [setState]
  );

  const logout = useCallback(
    (data, onSuccess) => {
      // process logout
      setState((store) => ({
        ...store,
        user: null,
        token: null,
        expireAt: null,
        error: null,
      }));
      if (onSuccess) {
        onSuccess();
      }
    },
    [setState]
  );

  const register = useCallback(() => {
    // process register
  }, [state]);

  const isLogged = useCallback(() => {
    // todo :validate token using expireAt
    return Boolean(state.token);
  }, [state]);

  return useMemo(
    () => ({
      login,
      logout,
      isLogged,
      register,
      token: state.token,
      user: state.user,
    }),
    [login, logout, isLogged, register, state]
  );
};
