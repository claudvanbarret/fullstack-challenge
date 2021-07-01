import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Button, Space, Modal } from "antd";
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

import { Header } from "../Header";
import { Table } from "../Table";
import { DrawerForm } from "../DrawerForm";

const { confirm } = Modal;

const Crud = ({
  title,
  data,
  columns,
  loading,
  pagination,
  addable,
  onEdit,
  onDelete,
  onClose,
  form,
  FormComponent
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  /**
   * Submit the form.
   */
  const handleSubmit = async () => {
    try {
      await form.validateFields();
      await form.submit();
      await setOpen(false);
      await setIsEditing(false);
    } catch (error) {
      setOpen(true);
    }
  };

  /**
   * Open the DrawerForm to edit the record.
   *
   * @param record - record ro edited.
   */
  const handleEdit = (record) => {
    onEdit(record);
    setIsEditing(true);
    setOpen(true);
  };

  /**
   * Shows the modal to confirm deletion
   *
   * @param record - record to be deleted.
   */
  const handleDelete = (record) => {
    confirm({
      title: t("components.crud.delete_title"),
      icon: <ExclamationCircleOutlined />,
      content: t("components.crud.delete_content"),
      okText: t("general.yes"),
      okType: "danger",
      cancelText: t("general.no"),
      onOk() {
        onDelete(record);
      }
    });
  };

  /**
   * Closes the DrawerForm.
   */
  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    if (onClose) onClose();
  };

  /**
   * Adds two new columns to the table. The action to edit and delete
   *
   * @param cols - previous columns.
   */
  const buildColumns = (cols) => {
    if (!onEdit && !onDelete) return cols;

    return [
      ...cols,
      {
        title: t("general.actions"),
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            {!!onEdit && <Button shape="circle" icon={<EditOutlined />} onClick={() => handleEdit(record)} />}
            {!!onDelete && <Button shape="circle" icon={<DeleteOutlined />} onClick={() => handleDelete(record)} />}
          </Space>
        )
      }
    ];
  };

  return (
    <>
      <Header onAdd={() => setOpen(true)} addable={addable} />
      <Table columns={buildColumns(columns)} dataSource={data} loading={loading} pagination={pagination} />
      <DrawerForm
        title={title}
        visible={open}
        isEditing={isEditing}
        onCancel={handleClose}
        onClose={handleClose}
        onSubmit={handleSubmit}
      >
        {FormComponent}
      </DrawerForm>
    </>
  );
};

Crud.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  addable: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onClose: PropTypes.func,
  FormComponent: PropTypes.node
};

Crud.defaultProps = {
  FormComponent: null,
  addable: true,
  onEdit: () => null,
  onDelete: () => null,
  onClose: () => null
};

export default Crud;
