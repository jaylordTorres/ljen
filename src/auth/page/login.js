import { useCallback } from "react";
import { Button, Typography } from "@mui/material";

// using global paths as sample
import { AppPaths } from "../../app/gobal";

export const LoginPage = ({ history }) => {
  const onRegister = useCallback(() => {
    history.push(AppPaths.auth.register);
  }, [history]);

  return (
    <div>
      <Typography variant="h1">Login</Typography>
      <Button onClick={onRegister}>redir to register using callback</Button>
    </div>
  );
};
