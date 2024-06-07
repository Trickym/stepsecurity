import {
  ContainerOutlined,
  DashboardOutlined,
  OneToOneOutlined,
  SettingOutlined,
  SolutionOutlined,
  TableOutlined,
} from "@ant-design/icons";

export const menuList = [
  {
    label: "Dashboard",
    icon: <DashboardOutlined />,
    key: "/",
    link: "/",
    roles: [],
  },
  {
    label: "MRF",
    key: "/mrf",
    icon: <SolutionOutlined />,
    link: "/mrf",
    roles: [],
  },
  {
    label: "Offer Letter",
    key: "/offer-letter",
    icon: <ContainerOutlined />,
    link: "/offer-letter",
    roles: [],
  },
  {
    label: "Interviews",
    key: "/interviews",
    icon: <OneToOneOutlined />,
    link: "/interviews",
    roles: [],
  },
  {
    label: "Reports",
    key: "/reports",
    icon: <TableOutlined />,
    link: "/reports",
    roles: [],
  },
  {
    label: "Settings",
    key: "/settings",
    icon: <SettingOutlined />,
    link: "/settings",
    roles: [],
  },
];

export default menuList;
