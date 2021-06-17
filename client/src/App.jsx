import { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { useDispatch } from "react-redux";
import locale from "antd/lib/locale/pt_BR";
import Router from "./router";
import ResetStyles from "./styles/reset";
import { fetchUser } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();

  // Get user logged in
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <ConfigProvider locale={locale}>
      <ResetStyles />
      <HashRouter>
        <Router />
      </HashRouter>
    </ConfigProvider>
  );
}

export default App;
