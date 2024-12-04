import React, { ReactNode } from "react";
import { Button, Flex, Space, Table } from "antd";
import type { TableProps } from "antd";
import { iconMapping, mockData } from "./constants";
import { ItemsType } from "./types";
import { Link, useNavigate } from "react-router";
import modal from "antd/es/modal";
import { getLocalStorage } from "../../common/getLocalStorage";

const config = {
  title: "请再次确认!",
  content: <>请确认是否领取该内容</>,
};
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
  {
    title: "领取",
    dataIndex: "get",
    key: "get",
  },
];

export const Confirmation: React.FC = () => {
  const navigate = useNavigate();
  columns[3].render = (_, record) => {
    let store = getLocalStorage();
    let history = store ? store.history : [];
    const hasGet = history.includes(record.id);
    return hasGet ? (
      <p>已领取</p>
    ) : (
      <Button
        onClick={async () => {
          await modal.confirm({
            ...config,
            onOk: () => {
              let store = getLocalStorage();
              let history = store ? store.history : [];

              history.unshift(record.id);
              if (history.length > 5) {
                history.pop();
              }
              localStorage.setItem(
                "store",
                JSON.stringify({ store: { history } })
              );
              navigate(`/result?name=${record.name}`);
            },
          });
        }}
      >
        确认领取
      </Button>
    );
  };

  return (
    <>
      <Space>
        <Link to="/">返回主页</Link>
        <Link to="/history">查看领取记录(只保留五条)</Link>
      </Space>
      {mockData.map((data, index) => (
        <>
          <div>{`这是你的第${index + 1}个奖励`}</div>
          <Flex>
            <Space>
              <p>名称: {data.name}</p>
              <p>说明: {data.description}</p>
              <p>
                {new Date(data.expireTime) > new Date()
                  ? `有效期至: ${new Date(
                      data.expireTime
                    ).toLocaleDateString()}`
                  : "该奖励已过期"}
              </p>
            </Space>
          </Flex>
          {data.items && (
            <Table<ItemsType> columns={columns} dataSource={data.items} />
          )}
        </>
      ))}
    </>
  );
};
