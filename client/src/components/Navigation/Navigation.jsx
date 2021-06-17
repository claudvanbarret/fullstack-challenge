import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Menu } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import routes from "../../configs/routes";
import { logout } from "../../services/auth.service";
import * as S from "./Navigation.styles";
import { setUser } from "../../store/user/actions";

const Navigation = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [current, setCurrent] = useState("professionals");

  /**
   * @description Changes the menu item
   */
  const handleClick = (e) => setCurrent(e.key);

  /**
   * @description Log out of the application
   */
  const handleLogout = () => {
    // Clear session
    logout();
    // Clear user store
    dispatch(setUser(null));
    // Redirects to login
    history.push("/");
  };

  return (
    <S.Menu onClick={handleClick} selectedKeys={[current]} mode="vertical">
      {routes.map(({ itemKey, icon, label, to }) => (
        <Menu.Item key={itemKey} icon={icon}>
          <Link to={to}>{label}</Link>
        </Menu.Item>
      ))}
      <S.MenuLogout key="logout" icon={<LoginOutlined />} onClick={handleLogout}>
        {t("general.logout")}
      </S.MenuLogout>
    </S.Menu>
  );
};

export default Navigation;
