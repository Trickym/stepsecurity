import {
  BankOutlined,
  CloseOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Drawer, Space, Typography } from "antd";
import React from "react";

const ProfileDrawer = ({ open, onClose }) => {
  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={onClose}
        title={null}
        footer={null}
        closeIcon={null}
      >
        <div className="flex justify-end">
          <CloseOutlined className="text-[20px]" onClick={onClose} />
        </div>
        <div className="flex justify-between items-start">
          <Space>
            <Avatar
              src="https://avatars.githubusercontent.com/u/57531551?v=4"
              size={60}
            />
            <div>
              <Typography className="text-xl m-0">
                {"TrickyM"} <SettingOutlined />
              </Typography>
              <Typography.Text className="m-0" type="secondary">
                {"Prashant Mishra"}
              </Typography.Text>
            </div>
          </Space>
        </div>

        <div className="py-2"></div>
        <div className="grid grid-cols-12 justify-between mt-4">
          <div className="col-span-6 pr-2">
            <Button className="w-full" icon={<BankOutlined />}>
              Organizations
            </Button>
          </div>
          <div className="col-span-6 pl-2">
            <Button className="w-full" icon={<LogoutOutlined />} type="primary">
              Logout
            </Button>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default ProfileDrawer;
