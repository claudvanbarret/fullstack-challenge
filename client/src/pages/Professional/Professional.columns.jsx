import i18n from "../../i18n";
import { Cell } from "../../components/Cell";

/**
 * Defines the columns of the table used in Crud component
 */
const columns = [
  {
    title: i18n.t("general.name"),
    dataIndex: "name",
    key: "name"
  },
  {
    title: i18n.t("general.phone"),
    dataIndex: "phone",
    key: "phone"
  },
  {
    title: i18n.t("general.email"),
    dataIndex: "email",
    key: "email"
  },
  {
    title: i18n.t("general.type"),
    dataIndex: ["type", "description"],
    key: "email"
  },
  {
    title: i18n.t("general.status"),
    dataIndex: "status",
    key: "status",
    render: (value) => <Cell dataIndex="status" value={value} />
  }
];

export default columns;
