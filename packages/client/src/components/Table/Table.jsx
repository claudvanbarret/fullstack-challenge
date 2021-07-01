import React from "react";

import * as S from "./Table.styles";

const Table = ({ columns, dataSource, pagination, loading }) => (
  <S.Table columns={columns} dataSource={[...dataSource]} pagination={pagination} loading={loading} rowKey="id" />
);

export default Table;
