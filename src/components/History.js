import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Kwota",
    dataIndex: "amount",
    key: "amount",
    align: "right",
  },
  {
    title: "Waluta",
    dataIndex: "firstCurrency",
    key: "firstCurrency",
    align: "left",
  },

  {
    title: "Kurs",
    dataIndex: "rate",
    key: "rate",
    align: "center",
  },

  {
    title: "Otrzymana kwota",
    dataIndex: "calculationResult",
    key: "calculationResult",
    align: "right",
  },

  {
    title: "Waluta",
    dataIndex: "secondCurrency",
    key: "secondCurrency",
    align: "left",
  },
  {
    title: "Kurs z dnia",
    dataIndex: "selectedDate",
    key: "selectedDate",
    align: "center",
  },

  // {
  //   title: "Action",
  //   key: "action",
  //   render: (text, record) => (
  //     <Space size="middle">
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },
];

function History(props) {
  return <Table columns={columns} dataSource={props.localSt} />;
}

export default History;
