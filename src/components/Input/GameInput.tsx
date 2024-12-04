import React, { useState } from "react";
import { Alert, Flex, Input, Modal } from "antd";
import { varifyFormat } from "./helpers/varifyFormat";
import { varifyLength } from "./helpers/varifyLength";
import { useNavigate } from "react-router";
import { deferExecution } from "./helpers/deferExecution";
import { InputFooter } from "../InputFooter/InputFooter";
import "./GameInput.css";

const GameInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replaceAll(",", "");
    const newValue = value
      .replaceAll(",", "")
      .split("")
      .reduce((pre, item, index) => {
        if (index !== 0 && index % 4 === 0) {
          return pre + "," + item;
        }
        return pre + item;
      }, "");
    setInputValue(newValue);
    if (!varifyFormat(newValue)) {
      return setError("您输入的验证码格式有误");
    }
    setError("");
    if (varifyLength(newValue)) {
      setLoading(true);
      deferExecution(() => {
        setLoading(false);
        navigate("/confirm");
      });
    }
  };

  const handleOk = () => {
    setLoading(true);
    deferExecution(() => {
      setLoading(false);
      const value = inputValue.replaceAll(",", "");

      if (!varifyFormat(value)) {
        return setError("您输入的验证码格式有误");
      }
      if (!varifyLength(value)) {
        return setError("您输入的验证码长度有误");
      }
      setError("");
      navigate("/confirm");
    });
  };

  return (
    <Flex>
      <Modal
        mask={false}
        title="请输入兑换码"
        open
        onOk={handleOk}
        footer={
          <InputFooter
            loading={loading}
            handleOk={handleOk}
            handleCancel={() => {}}
          />
        }
      >
        {error && (
          <>
            <Alert
              message={error}
              type="error"
              closable
              onClose={() => {
                setError("");
              }}
            />
            <br />
          </>
        )}
        <Input
          className={error ? "content" : ""}
          maxLength={19}
          value={inputValue}
          onChange={onChange}
          placeholder=""
        />
      </Modal>
    </Flex>
  );
};

export default GameInput;
