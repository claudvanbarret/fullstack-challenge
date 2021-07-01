import { Layout as AntLayout } from "antd";
import { Navigation } from "../components/Navigation";

import * as S from "./Layout.styles";

const { Content } = AntLayout;

const Layout = ({ children }) => (
  <S.Layout>
    <S.Side>
      <Navigation />
    </S.Side>
    <Content>
      <S.Main>{children}</S.Main>
    </Content>
  </S.Layout>
);

export default Layout;
