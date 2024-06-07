import { Avatar, Button, Drawer, Menu, Row, Space, Typography } from "antd";
import React, { useState } from "react";
import menuList from "@/Utils/menuList";
import { Header } from "antd/es/layout/layout";
import { MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useTheme } from "@/Context/ThemeContext";
import HeaderLogo from "@/Assets/horizontal_logo.svg";
import ProfileDrawer from "@/Components/ProfileDrawer";
import ThemeSwitcher from "@/ThemeSwitcher";
const Topbar = () => {
  const [profileDrawer, setProfileDrawer] = useState(false);
  const { theme } = useTheme();
  return (
    <React.Fragment>
      <Header className="flex justify-center items-center m-[10px] rounded-[10px] shadow-sm">
        <Link
          to={"/"}
          className="flex justify-center items-center min-w-[150px]"
        >
          <img className="h-[40px]" src={HeaderLogo} alt="cvbox_logo" />
        </Link>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["/"]}
          items={menuList}
          theme={theme}
          className="flex flex-1 min-w-0"
        />
        <Space>
          <Button
            className="flex justify-center items-center rounded-[25px]"
            onClick={() => setProfileDrawer(true)}
            size="large"
          >
            <MenuUnfoldOutlined className="text-gray-400 " />
            <Avatar className="th-bg-primary" icon={<UserOutlined />} />
          </Button>
        </Space>
      </Header>
      <ProfileDrawer
        open={profileDrawer}
        onClose={() => setProfileDrawer(false)}
      />
    </React.Fragment>
  );
};

export default Topbar;
