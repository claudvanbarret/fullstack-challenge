import { Switch, Route } from "react-router-dom";

import { Layout } from "../layout";
import { Professional } from "../pages/Professional";
import { ProfessionalType } from "../pages/ProfessionalType";

const Router = () => (
  <Switch>
    <Layout>
      <Route exact path="/professionals" component={Professional} />
      <Route exact path="/professionaltypes" component={ProfessionalType} />
    </Layout>
  </Switch>
);

export default Router;
