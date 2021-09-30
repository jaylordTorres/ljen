import { Switch, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { RegisterPage } from "./register";
import { AuthPaths } from "../path";

export const AuthPage = () => {
  return (
    <Switch>
      <Route path={AuthPaths.login} component={LoginPage} />
      <Route path={AuthPaths.register} component={RegisterPage} />
    </Switch>
  );
};

AuthPage.path = AuthPaths.root;
AuthPage.paths = AuthPaths;
