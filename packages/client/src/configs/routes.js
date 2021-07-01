import React from "react";
import { TeamOutlined, TagsOutlined } from "@ant-design/icons";

import i18n from "../i18n";

const routes = [
  {
    itemKey: "professionals",
    to: "/professionals",
    label: i18n.t("general.professional"),
    icon: <TeamOutlined />
  },
  {
    itemKey: "professionaltypes",
    to: "/professionaltypes",
    label: i18n.t("general.professional_type"),
    icon: <TagsOutlined />
  }
];

export default routes;
