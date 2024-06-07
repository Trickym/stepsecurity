import { Avatar, Button, Space } from "antd";
import React, { useState } from "react";
import { Header } from "antd/es/layout/layout";
import { MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useTheme } from "@/Context/ThemeContext";
import ProfileDrawer from "@/Components/ProfileDrawer";
const Topbar = () => {
  const [profileDrawer, setProfileDrawer] = useState(false);
  const { theme } = useTheme();
  return (
    <React.Fragment>
      <Header className="flex justify-between items-center m-[10px] rounded-[10px] shadow-sm">
        <Link
          to={"/"}
          className="flex justify-center items-center min-w-[150px]"
        >
          <img
            className="h-[30px]"
            src={`https://step-security.netlify.app/img/logo.png`}
            alt="StepSecurity_logo"
          />
        </Link>
        <Space>
          <Button
            className="flex justify-center items-center rounded-[25px]"
            onClick={() => setProfileDrawer(true)}
            size="large"
          >
            <MenuUnfoldOutlined className="text-gray-400 " />
            <Avatar
              className="th-bg-primary"
              src={`https://avatars.githubusercontent.com/u/57531551?v=4`}
            />
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
