import { Button } from "antd";
import { FC } from "react";
import { InputFooterProps } from "./types";

export const InputFooter: FC<InputFooterProps> = ({
  loading,
  handleOk,
  handleCancel,
}) => (
  <>
    <Button key="back" onClick={handleCancel}>
      取消
    </Button>
    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
      {loading ? "验证码确认中" : "确认"}
    </Button>
  </>
);
