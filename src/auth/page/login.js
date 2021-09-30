import { useCallback } from "react";
import { Button, Typography } from "@mui/material";

// using global paths as sample
import { AppPaths } from "../../app/gobal";
import { useAuthContext } from "../service/auth_context";

export const LoginPage = ({ history }) => {
  const onRegister = useCallback(() => {
    history.push(AppPaths.auth.register);
  }, [history]);

  const onDashboard = useCallback(() => {
    history.push(AppPaths.dashboard.root);
  }, [history]);

  const { isLogged, login, user } = useAuthContext();
  console.log("user is logged? ", isLogged(), user);

  const onLogin = useCallback(() => {
    login({}, onDashboard);
  }, [login, onDashboard]);

  return (
    <div>
      <Typography variant="h1">Login</Typography>
      <Button onClick={onLogin}>click to login</Button>
      <Button onClick={onRegister}>redir to register using callback</Button>
      <Button onClick={onDashboard}>goto dashboard</Button>
    </div>
  );
};
