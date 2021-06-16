import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Switch, Select } from "antd";
import { fetch } from "../../store/professionaltypes/actions";
import * as rules from "../../constants/rules";

const ProfessionalForm = ({ form, initialValues, onFinish }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const professionalTypeState = useSelector((state) => state.professionaltypes);
  const { content } = professionalTypeState;

  // Updade the form for every change on initialValues
  useEffect(() => form.resetFields(), [form, initialValues]);

  // Load the professional types
  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);

  const handleFinish = (values) => {
    const additional = {
      id: initialValues.id,
      ...values
    };
    onFinish(additional);
  };

  return (
    <Form form={form} layout="vertical" name="professional" initialValues={initialValues} onFinish={handleFinish}>
      <Form.Item name="name" rules={rules.required}>
        <Input name="name" placeholder={t("general.name")} maxLength={40} />
      </Form.Item>
      <Form.Item name="phone">
        <Input name="phone" placeholder={t("general.phone")} />
      </Form.Item>
      <Form.Item name="email" rules={rules.email}>
        <Input name="email" placeholder={t("general.email")} />
      </Form.Item>
      <Form.Item name="typeId" rules={rules.required}>
        <Select name="typeId" placeholder={t("general.type")} allowClear>
          {content.map((type) => (
            <Select.Option key={type.id} value={type.id}>
              {type.description}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="status" label={t("general.status")} valuePropName="checked">
        <Switch name="status" />
      </Form.Item>
    </Form>
  );
};

export default ProfessionalForm;
