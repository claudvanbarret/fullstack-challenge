import { Layout as AntLayout } from "antd";
import Navigation from "../components/Navigation";

import * as S from "./styles";

const { Content } = AntLayout;

const Layout = ({ children }) => {
  return (
    <S.Layout>
      <S.Side>
        <Navigation />
      </S.Side>
      <Content>
        <S.Main>{children}</S.Main>
      </Content>
    </S.Layout>
  );
};

export default Layout;
