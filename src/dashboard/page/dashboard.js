import { Switch, Route } from "react-router-dom";
import { DashboardPaths } from "../path";
import { RootPage } from "./root";
import { SomePage } from "./some";

export const DashboardPage = () => {
  return (
    <Switch>
      <Route path={DashboardPaths.root} component={RootPage} exact />
      <Route path={DashboardPaths.some} component={SomePage} />
    </Switch>
  );
};

// path helpers
DashboardPage.path = DashboardPaths.root;
DashboardPage.paths = DashboardPaths;
