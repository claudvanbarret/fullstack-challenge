import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import routes from "../../configs/routes";
import * as S from "./styles";

const Navigation = () => {
  const [current, setCurrent] = useState("professionals");

  const handleClick = (e) => setCurrent(e.key);

  return (
    <S.Menu onClick={handleClick} selectedKeys={[current]} mode="vertical">
      {routes.map(({ itemKey, icon, label, to }) => (
        <Menu.Item key={itemKey} icon={icon}>
          <Link to={to}>{label}</Link>
        </Menu.Item>
      ))}
    </S.Menu>
  );
};

export default Navigation;
