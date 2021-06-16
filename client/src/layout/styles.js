import styled from "styled-components";
import { Layout as AntLayout } from "antd";

import colors from "../styles/colors";

const { Sider } = AntLayout;
export const Layout = styled(AntLayout)`
  height: 100vh;
`;

export const Main = styled.main`
  height: 100%;
  padding: 1rem;
`;

export const Side = styled(Sider)`
  background: ${colors.white};
  border-right: 0.1rem solid ${colors.normal};
`;
