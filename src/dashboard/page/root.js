import { Button, Divider, Typography } from "@mui/material";
import { useCallback } from "react";
import { useHistory } from "react-router";
import { AppPaths } from "../../app/path";
import { useAuthContext } from "../../auth/service/auth_context";

export const RootPage = () => {
  const history = useHistory();

  const { logout } = useAuthContext();

  const onLogout = useCallback(() => {
    logout({}, () => history.push(AppPaths.auth.login));
  }, [history, logout]);

  return (
    <div>
      <Typography variant="h1"> Dashboard</Typography>
      <Divider />

      <Button variant="contained" color="error" onClick={onLogout}>
        logout
      </Button>
    </div>
  );
};
