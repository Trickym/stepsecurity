import APIS from "@/Config/apiConfig";
import { useAuth } from "@/Context/AuthContext";
import {
  CloseOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Space,
  Spin,
  Tag,
  Tooltip,
  Typography,
  message,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ProfileDrawer = ({ open, onClose }) => {
  const authValue = useAuth();
  const { userData, logoutHandler } = authValue;
  const [userDetails, setUserDetails] = useState();
  const [detailsLoading, setDetailsLoading] = useState(true);
  useEffect(() => {
    if (open) {
      fetchUserData();
    }
  }, [open]);
  const fetchUserData = () => {
    setDetailsLoading(true);
    axios
      .get(APIS.PROFILE_API)
      .then((res) => {
        setUserDetails(res?.data);
      })
      .catch((err) => {
        message?.error(err?.response?.data?.message ?? "Something went wrong!");
      })
      .finally(() => {
        setDetailsLoading(false);
      });
  };
  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={onClose}
        title={null}
        footer={null}
        closeIcon={null}
      >
        <Spin spinning={detailsLoading}>
          <div className="flex justify-end">
            <CloseOutlined className="text-[20px]" onClick={onClose} />
          </div>
          <div className="flex justify-between items-start">
            <Space>
              <Avatar
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.1010993160.1716921564&semt=ais_user"
                size={60}
              />
              <div>
                <Typography className="text-xl m-0">
                  {userDetails?.user?.first_name}
                </Typography>
                <Typography.Text className="m-0" type="secondary">
                  {userDetails?.role?.role_name}
                </Typography.Text>
              </div>
            </Space>
          </div>
          <Divider
            style={{ borderBlockStart: "2px solid #e7e7f1" }}
            className="my-2"
          />
          <div className="py-2">
            <div className="grid grid-cols-12">
              <div className="col-span-6 pr-2">
                <Typography className="">USER ID </Typography>
                <Typography.Paragraph type="secondary" className="">
                  {userDetails?.user?.id}
                </Typography.Paragraph>
              </div>
              <div className="col-span-6 pr-2">
                <Typography className="">ERP </Typography>
                <Typography.Paragraph type="secondary" className="">
                  {userDetails?.erp}
                </Typography.Paragraph>
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-6 pr-2">
                <Typography className="">Phone </Typography>
                <Typography.Paragraph type="secondary" className="">
                  {userDetails?.phone_no}
                </Typography.Paragraph>
              </div>
              <div className="col-span-6 pr-2">
                <Typography className="">EMAIL </Typography>
                <Typography.Paragraph
                  ellipsis={{
                    tooltip: userDetails?.user?.email,
                  }}
                  type="secondary"
                  className=""
                >
                  {userDetails?.user?.email}
                </Typography.Paragraph>
              </div>
            </div>
            <div className="">
              <Typography className="">BRANCHES</Typography>
              <div className="flex flex-wrap gap-1 mt-[4px]">
                {userDetails?.branch?.map(({ branch_name, id }) => (
                  <Tag key={id}>{branch_name}</Tag>
                ))}
              </div>
            </div>
            {userData?.academic_profile?.is_budget_approver && (
              <Tooltip>
                <div className="p-2 px-3 mt-5 bg-violet-100 rounded-lg cursor-pointer">
                  <Typography.Text type="secondary">
                    <InfoCircleOutlined className="mr-2" />
                    You are a Budget Approver
                  </Typography.Text>
                </div>
              </Tooltip>
            )}
          </div>
          <div className="grid grid-cols-12 justify-between mt-4">
            <div className="col-span-6 pr-2">
              <Button className="w-full" icon={<SettingOutlined />}>
                Settings
              </Button>
            </div>
            <div className="col-span-6 pl-2">
              <Button
                className="w-full"
                icon={<LogoutOutlined />}
                type="primary"
                onClick={logoutHandler}
              >
                Logout
              </Button>
            </div>
          </div>
        </Spin>
      </Drawer>
    </React.Fragment>
  );
};

export default ProfileDrawer;
