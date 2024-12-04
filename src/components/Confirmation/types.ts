import { ReactNode } from "react";

export interface GiftInfo {
  id: string;
  name: string;
  description: string;
  expireTime: string;
  items: ItemsType[];
}

export interface ItemsType {
  id: string;
  name: string;
  icon: ReactNode;
  amount: number;
}
