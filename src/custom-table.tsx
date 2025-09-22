import React from "react";
import { Table, RowProps } from "antd";
import type { ColumnsType } from "antd/es/table";

type TTableProp<T extends object> = {
  showPagination?: boolean;
  components?: {
    body: {
      row: (props: RowProps) => React.JSX.Element;
    };
  };
  columns: ColumnsType<T>;
  loading?: boolean;
  data: T[];
  metadata?: {
    total?: number;
  };
  limit: number;
  page: number;
  handleOnChangeLimit: React.Dispatch<React.SetStateAction<number>>;
  handleOnChangePage: React.Dispatch<React.SetStateAction<number>>;
  pageSizeOptions?: number[];
  scrollX?: number | string;
};
const TableV2 = <T extends object>({
  showPagination = true,
  ...props
}: TTableProp<T>) => {
  return (
    <div
      style={{
        width: "100%",
        background: "#FAFAFA",
      }}
    >
      <Table
        components={props.components}
        className="table_v2 ios-scroll-fix"
        pagination={
          showPagination
            ? {
                showSizeChanger: true,
                responsive: false,
                total: props.metadata?.total,
                current: props.page,
                onShowSizeChange: (_, size) => props.handleOnChangeLimit(size),
                pageSizeOptions: props.pageSizeOptions || [
                  5, 10, 15, 20, 25, 30,
                ],
                pageSize: props.limit,
                onChange: (newPage) => props.handleOnChangePage(newPage),
              }
            : false
        }
        loading={props.loading}
        columns={props.columns}
        dataSource={props.data}
        rowKey="id"
        scroll={{ x: props.scrollX ? props.scrollX : "max-content", y: 800 }}
      />
    </div>
  );
};

export default TableV2;
