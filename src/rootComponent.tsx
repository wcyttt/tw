import { FC, useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Confirmation } from "./components/Confirmation/Confirmation";
import { Result } from "./components/Result/Result";
import { History } from "./History/History";
import GameInput from "./components/Input/GameInput";
import { Button, ConfigProvider } from "antd";
import { ThemeContext } from "./common/themeContext";
import { AliasToken } from "antd/es/theme/internal";

export const RootComponent: FC = () => {
  const [token, setToken] = useState<Partial<AliasToken> | undefined>();
  const [toggle, setToggle] = useState(false);

  return (
    <ThemeContext.Provider value={token}>
      <ConfigProvider theme={{ token }}>
        <Button
          onClick={() => {
            setToggle(!toggle);
            setToken(
              toggle
                ? undefined
                : {
                    colorPrimary: "#00b96b",
                    borderRadius: 2,
                    colorBgContainer: "#f6ffed",
                  }
            );
          }}
        >
          切换主题
        </Button>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GameInput />} />
            <Route path="confirm" element={<Confirmation />} />
            <Route path="result" element={<Result />} />
            <Route path="history" element={<History />} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
