import React from "react";
import { SkinOutlined, PlusCircleOutlined } from "@ant-design/icons";

import i18n from "../i18n";

const routes = [
  {
    itemKey: "professionals",
    to: "/professionals",
    label: i18n.t("general.professional"),
    icon: <SkinOutlined />
  },
  {
    itemKey: "professionaltypes",
    to: "/professionaltypes",
    label: i18n.t("general.professional_type"),
    icon: <PlusCircleOutlined />
  }
];

export default routes;
