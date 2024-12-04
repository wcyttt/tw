import React, { FC } from "react";
import { Button, Result as AntdResult } from "antd";
import { useNavigate, useParams, useSearchParams } from "react-router";

export const Result: FC = () => {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  return (
    <AntdResult
      status="success"
      title="领取成功!"
      subTitle={`您已成功领取: ${searchParams.get(
        "name"
      )}, 您可点点击返回继续领取`}
      extra={[
        <Button type="primary" key="home" onClick={() => navigate("/")}>
          返回主页
        </Button>,
        <Button key="back" onClick={() => navigate("/confirm")}>
          返回继续领取
        </Button>,
      ]}
    />
  );
};
