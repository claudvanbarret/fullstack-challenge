import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "antd";
import has from "lodash/has";
import { Crud } from "../../components/Crud";
import ProfessionalForm from "./Professional.form";
import columns from "./Professional.columns";
import { fetch, save, edit, remove } from "../../store/professional/actions";

import { PAGINATION_SIZE } from "../../constants/general";

const Professional = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const professionalState = useSelector((state) => state.professional);
  const [professional, setProfessinal] = useState({});
  const [pagination, setPagination] = useState({ page: 1, size: PAGINATION_SIZE });
  const { content, total, page, loading } = professionalState;

  /**
   * Fetch every time the pagination changes
   */
  useEffect(() => {
    dispatch(fetch(pagination));
  }, [dispatch, pagination]);

  const handleClose = () => setProfessinal({});

  /**
   * Finishes the form by calling the service to save
   *
   * @param {*} values values from the form
   */
  const handleFinish = (values) => {
    if (has(professional, "id")) {
      dispatch(edit(values));
    } else {
      dispatch(save(values));
    }

    handleClose();
  };

  const handleEdit = (record) => setProfessinal(record);

  const handleDelete = (record) => dispatch(remove(record));

  const handlePagination = (pag) => setPagination({ page: pag, size: PAGINATION_SIZE });

  return (
    <div className="Professional">
      <Crud
        title={t("general.professional")}
        form={form}
        data={content}
        loading={loading}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onClose={handleClose}
        FormComponent={<ProfessionalForm form={form} initialValues={professional} onFinish={handleFinish} />}
        pagination={{
          total,
          pageSize: PAGINATION_SIZE,
          current: page,
          onChange: handlePagination
        }}
      />
    </div>
  );
};

export default Professional;
