import { ReactNode } from "react";
import { GiftInfo } from "./types";
import {
  Html5TwoTone,
  PlusCircleTwoTone,
  SmileOutlined,
  SwapRightOutlined,
  TrophyTwoTone,
  UsbTwoTone,
} from "@ant-design/icons";

export const mockData: GiftInfo[] = [
  {
    id: "1",
    name: "喷漆",
    description: "您获得了一些喷漆奖励",
    expireTime: "2024-12-31T12:00:00",
    items: [
      {
        id: "1",
        name: "右箭头喷漆",
        icon: "SwapRightOutlined",
        amount: 1,
      },
      {
        id: "2",
        name: "Bug喷漆",
        icon: "SmileOutlined",
        amount: 1,
      },
      {
        id: "3",
        name: "加号喷漆",
        icon: "PlusCircleTwoTone",
        amount: 1,
      },
      {
        id: "4",
        name: "H5限定喷漆",
        icon: "Html5TwoTone",
        amount: 1,
      },
      {
        id: "5",
        name: "Usb喷漆",
        icon: "UsbTwoTone",
        amount: 1,
      },
      {
        id: "6",
        name: "奖杯喷漆",
        icon: "TrophyTwoTone",
        amount: 1,
      },
    ],
  },
  {
    id: "2",
    name: "武器",
    description: "您获得了一些武器奖励",
    expireTime: "2023-12-31T12:00:00",
    items: [],
  },
];

export const iconMapping: Record<string, ReactNode> = {
  SmileOutlined: <SmileOutlined />,
  SwapRightOutlined: <SwapRightOutlined />,
  PlusCircleTwoTone: <PlusCircleTwoTone />,
  Html5TwoTone: <Html5TwoTone />,
  UsbTwoTone: <UsbTwoTone />,
  TrophyTwoTone: <TrophyTwoTone />,
};
