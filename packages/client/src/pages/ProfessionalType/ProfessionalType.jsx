import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "antd";
import has from "lodash/has";
import { Crud } from "../../components/Crud";
import ProfessionalForm from "./ProfessionalType.form";
import columns from "./ProfessionalType.columns";
import { fetch, save, edit, remove } from "../../store/professionaltypes/actions";

const ProfessionalType = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const professionalTypeState = useSelector((state) => state.professionaltypes);
  const [type, setType] = useState({});
  const { content, loading } = professionalTypeState;

  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);

  const handleClose = () => setType({});

  /**
   * Finishes the form by calling the service to save
   *
   * @param {*} values values from the form
   */
  const handleFinish = (values) => {
    if (has(type, "id")) {
      dispatch(edit(values));
    } else {
      dispatch(save(values));
    }

    handleClose();
  };

  const handleEdit = (record) => setType(record);

  const handleDelete = (record) => dispatch(remove(record));

  return (
    <div className="ProfessionalType">
      <Crud
        title={t("general.professional")}
        form={form}
        data={content}
        loading={loading}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onClose={handleClose}
        FormComponent={<ProfessionalForm form={form} initialValues={type} onFinish={handleFinish} />}
      />
    </div>
  );
};

export default ProfessionalType;
