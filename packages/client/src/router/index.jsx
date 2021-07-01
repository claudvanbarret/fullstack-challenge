import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout } from "../layout";
import { Professional } from "../pages/Professional";
import { ProfessionalType } from "../pages/ProfessionalType";
import { Login } from "../pages/Login";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      }
    />
  );
};

const Router = () => {
  const { loadingUser } = useSelector((state) => state.user);

  return (
    <Switch>
      <Route exact path="/" component={Login} />
      {!loadingUser && (
        <Layout>
          <PrivateRoute exact path="/professionals" component={Professional} />
          <PrivateRoute exact path="/professionaltypes" component={ProfessionalType} />
        </Layout>
      )}
    </Switch>
  );
};

export default Router;
