import styled from "styled-components";
import { Layout } from "antd";

import colors from "../../styles/colors";

const Header = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${colors.white};
`;

export { Header };
