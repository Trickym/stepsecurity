import { Button, Col, Divider, Form, Input, Row, Typography } from "antd";
import LoginImage from "@/Assets/login_page_img.svg";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";
import { useAuth } from "@/Context/AuthContext";
import Logo from "@/Assets/vertical_logo.svg";
const Login = () => {
  const authValue = useAuth();
  const { loginHandler, loginLoading } = authValue;
  const login = (values) => {
    loginHandler(values);
  };
  return (
    <div className="h-[100vh] grid grid-cols-12">
      <div className="col-span-7 h-full max-900:hidden ">
        <div className="h-full flex justify-center items-center">
          <img src={LoginImage} className="h-[300px]" />
        </div>
      </div>
      <div className="col-span-5 max-900:col-span-12 flex justify-center items-center h-full">
        <Form
          onFinish={login}
          initialValues={{ remember: true }}
          size="large"
          className="max-w-[500px] px-3"
        >
          <div className="w-full">
            <div className="w-full flex justify-center mb-2">
              <img src={Logo} className="h-[100px]" />
            </div>
            <div className="mb-2">
              <Typography.Text className="text-[26px]">Login</Typography.Text>
            </div>
            <div>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="Username" />
              </Form.Item>
            </div>
            <div md={24}>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                />
              </Form.Item>
            </div>
            <div md={24}>
              <Button
                loading={loginLoading}
                htmlType="submit"
                className="w-full"
                type="primary"
              >
                Sign in
              </Button>
            </div>
            <div className="mt-2" md={24}>
              <Typography.Link>Forgot Password?</Typography.Link>
            </div>
          </div>
          <Divider />
          <Typography className="text-center">
            <Paragraph type="secondary">
              By proceeding, you agree to our{" "}
              <Typography.Link>Terms and Conditions</Typography.Link> and{" "}
              <Typography.Link>Privacy Policy</Typography.Link>. Copyright ©
              2024, K12 Techno Services Pvt. Ltd.
            </Paragraph>
          </Typography>
        </Form>
      </div>
    </div>
  );
};

export default Login;
