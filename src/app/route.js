import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthPage } from "../auth/page/auth";
import { DashboardPage } from "../dashboard/page/dashboard";

export const Pages = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={DashboardPage.path} component={DashboardPage} />
        <Route path={AuthPage.path} component={AuthPage} />
      </Switch>
    </BrowserRouter>
  );
};
