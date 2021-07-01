import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";

import * as S from "./Login.styles";

const Login = () => {
  const { t } = useTranslation();

  const loginToGithub = () => {
    window.location.replace(process.env.REACT_APP_AUTH_URL);
  };

  return (
    <div className="Login">
      <S.Container>
        <S.Content>
          <S.Title> {t("general.title")}</S.Title>
          <Button onClick={loginToGithub} icon={<GithubOutlined />}>
            {t("general.login_with_github")}
          </Button>
        </S.Content>
      </S.Container>
    </div>
  );
};

export default Login;
