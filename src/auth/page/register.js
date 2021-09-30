import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// using local path as sample
import { AuthPaths } from "../path";

export const RegisterPage = () => {
  return (
    <div>
      <Typography variant="h1">Register</Typography>

      <Link component={Button} to={AuthPaths.login}>
        redir to login using Link
      </Link>
    </div>
  );
};
