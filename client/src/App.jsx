import { HashRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import locale from "antd/lib/locale/pt_BR";
import Router from "./router";
import ResetStyles from "./styles/reset";

function App() {
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
