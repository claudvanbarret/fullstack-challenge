import React from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "antd";

import * as S from "./Header.styles";
import routes from "../../configs/routes";

const Header = ({ onAdd, addable }) => {
  const location = useLocation();
  const { t } = useTranslation();
  const { label } = routes.find((route) => route.to === location.pathname);

  return (
    <S.Header>
      <h1>{label}</h1>
      {addable && (
        <Button type="primary" onClick={onAdd}>
          {t("general.add")}
        </Button>
      )}
    </S.Header>
  );
};

export default Header;
