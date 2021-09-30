import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthPage } from "../auth/page/auth";
import { DashboardPage } from "../dashboard/page/dashboard";
import { HomePage } from "../home/page/home";

export const Pages = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={DashboardPage.path} component={DashboardPage} />
        <Route path={AuthPage.path} component={AuthPage} />
        <Route path={HomePage.path} component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};
