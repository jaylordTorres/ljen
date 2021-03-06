import { Switch, Route } from "react-router-dom";
import { BasicLayout } from "../../shared/component/basic_layout";
import { DashboardPaths } from "../path";
import { RootPage } from "./root";
import { SomePage } from "./some";

export const DashboardPage = () => {
  return (
    <BasicLayout>
      <Switch>
        <Route path={DashboardPaths.root} component={RootPage} exact />
        <Route path={DashboardPaths.some} component={SomePage} />
      </Switch>
    </BasicLayout>
  );
};

// path helpers
DashboardPage.path = DashboardPaths.root;
DashboardPage.paths = DashboardPaths;
