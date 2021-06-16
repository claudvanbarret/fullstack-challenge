import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Form, Input, Switch } from "antd";
import * as rules from "../../constants/rules";

const ProfessionalTypeForm = ({ form, initialValues, onFinish }) => {
  const { t } = useTranslation();

  // Updade the form for every change on initialValues
  useEffect(() => form.resetFields(), [form, initialValues]);

  const handleFinish = (values) => {
    const type = {
      id: initialValues.id,
      ...values
    };
    onFinish(type);
  };

  return (
    <Form form={form} layout="vertical" name="professional" initialValues={initialValues} onFinish={handleFinish}>
      <Form.Item name="description" rules={rules.required}>
        <Input name="description" placeholder={t("general.description")} maxLength={40} />
      </Form.Item>
      <Form.Item name="status" label={t("general.status")} valuePropName="checked">
        <Switch name="status" />
      </Form.Item>
    </Form>
  );
};

export default ProfessionalTypeForm;
