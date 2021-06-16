import styled from "styled-components";
import { Menu as AntMenu } from "antd";

export const Menu = styled(AntMenu)`
  border: none;
`;

export const MenuLogout = styled(AntMenu.Item)`
  && {
    margin-top: 5rem;
  }
`;
