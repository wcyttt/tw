import { AliasToken } from "antd/es/theme/internal";
import { createContext } from "react";

export const ThemeContext = createContext<Partial<AliasToken> | undefined>(
  undefined
);
