import React from "react";
import { useTranslation } from "react-i18next";
import { Tag } from "antd";
import upperCase from "lodash/upperCase";

const Cell = ({ dataIndex, value }) => {
  const { t } = useTranslation();

  /**
   * Transforms a boolean value into a Tag
   * @returns a Tag component with the status
   */
  const status = () => {
    if (value) return <Tag color="success">{upperCase(t("general.active"))}</Tag>;

    return <Tag color="error">{upperCase(t("general.inactive"))}</Tag>;
  };

  const component = () => {
    switch (dataIndex) {
      case "status":
        return status();
      default:
        return <span>{value}</span>;
    }
  };

  return component();
};

export default Cell;
