import React, { useState } from "react";
import { Button, Flex, Space, Table } from "antd";
import type { TableProps } from "antd";
import { Link } from "react-router";
import { getLocalStorage } from "../common/getLocalStorage";
import { ItemsType } from "../components/Confirmation/types";
import { iconMapping, mockData } from "../components/Confirmation/constants";
import modal from "antd/es/modal";

const columns: TableProps<ItemsType>["columns"] = [
  {
    title: "图标",
    dataIndex: "icon",
    key: "icon",
    render: (key) => iconMapping[key],
  },
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "数量",
    dataIndex: "amount",
    key: "amount",
  },
];

const config = {
  title: "请再次确认!",
  content: <>请确认是否清除所有历史记录</>,
};

export const History: React.FC = () => {
  const [data, setData] = useState(mockData);
  let store = getLocalStorage();
  let history = store ? store.history : [];
  const items = data
    .flatMap(({ items }) => items)
    .filter(({ id }) => history.includes(id));

  const handleClear = async () => {
    await modal.confirm({
      ...config,
      onOk: () => {
        localStorage.clear();
        setData([]);
      },
    });
  };

  return (
    <>
      <Space>
        <Button onClick={handleClear}>点击清除所有领取记录</Button>
        <Link to={"/confirm"}>继续回去领取奖品</Link>
      </Space>
      <Flex>
        <Space>
          <p>领取记录</p>
        </Space>
      </Flex>
      <Table<ItemsType> columns={columns} dataSource={items} />
    </>
  );
};
