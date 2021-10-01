import { useCallback, useMemo, useState } from "react";
import { AuthContext } from "./auth_context";

export const AuthProvider = ({ children, store }) => {
  const value = useAuthProviderHandler(store);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// isolation for unit testing
export const useAuthProviderHandler = (store, defaultValue = {}) => {
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

        store.save(response);
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
      store.save({});

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

  const authInit = useCallback(async () => {
    console.log("app init");
    const authData = await store.getItem();
    if (!authData) {
      return;
    }
    setState({
      user: authData.user || null,
      token: authData.token || null,
      expireAt: authData.expireAt || null,
    });
  }, [setState]);

  return useMemo(
    () => ({
      authInit,
      login,
      logout,
      isLogged,
      register,
      token: state.token,
      user: state.user,
    }),
    [authInit, login, logout, isLogged, register, state]
  );
};
