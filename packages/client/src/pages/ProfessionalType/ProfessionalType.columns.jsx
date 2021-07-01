import i18n from "../../i18n";
import { Cell } from "../../components/Cell";

/**
 * Defines the columns of the table used in Crud component
 */
const columns = [
  {
    title: i18n.t("general.description"),
    dataIndex: "description",
    key: "description"
  },
  {
    title: i18n.t("general.status"),
    dataIndex: "status",
    key: "status",
    render: (value) => <Cell dataIndex="status" value={value} />
  }
];

export default columns;
