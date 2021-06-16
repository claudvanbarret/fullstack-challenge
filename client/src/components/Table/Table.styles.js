import styled from 'styled-components';
import { Table as Tbl } from 'antd';

export const Table = styled(Tbl)`
  .ant-table-tbody > tr > td {
    word-break: break-word;
  }
`;
