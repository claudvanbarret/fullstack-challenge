import React from 'react';
import { useTranslation } from 'react-i18next';
import { Drawer, Space, Button } from 'antd';

const DrawerForm = ({
  title,
  onCancel,
  onClose,
  onSubmit,
  children,
  width = 500,
  visible = false,
  isEditing = false,
  placement = 'right',
}) => {
  const { t } = useTranslation();

  return (
    <Drawer
      title={
        isEditing
          ? t('components.drawer.edit', { title })
          : t('components.drawer.add', { title })
      }
      width={width}
      visible={visible}
      footer={
        <Space>
          <Button onClick={onCancel}>{t('general.cancel')}</Button>
          <Button type="primary" onClick={onSubmit}>
            {isEditing ? t('general.update') : t('general.add')}
          </Button>
        </Space>
      }
      placement={placement}
      onClose={onClose}
      destroyOnClose
      closable
    >
      {children}
    </Drawer>
  );
};

export default DrawerForm;
